import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Freelancer from '../Perfil/Freelancer';
import Experto from '../Perfil/Experto';
import Manager from '../Perfil/Manager';
import Tecnologo from '../Perfil/Tecnologo';
import Multiperfil from '../Perfil/Multiperfil';

import './styles.css';

class Perfil extends React.Component {

    state = {
        redirect: false,
        resultados: null,
        tecnologo: null,
        especialista: null,
        manager: null,
        freelancer: null
    }

    // component lifecycle
    componentDidMount() {
        // si el localstorage tiene valor para userID: hacemos la llamada axios a nuestra api en donde pedimos el ultimo test de ese usuarios.
        const userID = localStorage.getItem('userID');
        const token = localStorage.getItem('token');

        if (userID && token) {
            const url = `http://localhost:3000/api/usuarios/${userID}/tests`;         

            axios.get(url, {headers: {
                'x-access-token': token
              }})
              .then(response => {
                this.setState(
                    {
                        resultados: response.data[0],
                        tecnologo: (response.data[0].res_1 
                            + response.data[0].res_2 
                            + response.data[0].res_3 
                            + response.data[0].res_4 
                            + response.data[0].res_5) * 100 / 20,
                        manager: (response.data[0].res_6 
                            + response.data[0].res_7 
                            + response.data[0].res_8 
                            + response.data[0].res_9 
                            + response.data[0].res_10) * 100 / 20,
                        freelancer: (response.data[0].res_11 
                            + response.data[0].res_12 
                            + response.data[0].res_13 
                            + response.data[0].res_14 
                            + response.data[0].res_15) * 100 / 20,
                        especialista: (response.data[0].res_16
                            + response.data[0].res_17 
                            + response.data[0].res_18 
                            + response.data[0].res_19 
                            + response.data[0].res_20) * 100 / 20
                    });
            
              })
              .catch(err => {
                  alert("No hemos podido procesar los resultados de su respuesta. Disculpe las molestias.");
              })
        } else {
            alert("No hay ningún usuario logueado.");
            this.setState({redirect: true});
        }
    }

    componentDidUpdate() {
        this.doJqueryMagic();
    }
    doJqueryMagic = () => {

        // eslint-disable-next-line no-undef
        $(() => {console.log("tooltip" + $('[data-toggle="tooltip"]'));$('[data-toggle="tooltip"]').tooltip({
                placement: 'right',
            });
            // eslint-disable-next-line no-undef
            $('[data-toggle="tooltip"]').tooltip('show');
        });

        // eslint-disable-next-line no-undef
        $(".progress-bar").each(function(){
            // eslint-disable-next-line no-undef
            const each_bar_width = $(this).attr('aria-valuenow');
            // eslint-disable-next-line no-undef
            $(this).width(each_bar_width + '%');
        });
    }

    render(){

        if (this.state.redirect === true) {
            return <Redirect to="/login" />
        }

        let primero = "";

        if (this.state.resultados !== null) {

            if (this.state.tecnologo > this.state.manager &&
                this.state.tecnologo > this.state.especialista &&
                this.state.tecnologo > this.state.freelancer) {
                    primero = "Tecnólogo";
                }
                else if (this.state.manager > this.state.tecnologo &&
                    this.state.manager > this.state.especialista &&
                    this.state.manager > this.state.freelancer) {
                    primero = "Manager"
                }
                else if (this.state.freelancer > this.state.tecnologo &&
                    this.state.freelancer > this.state.especialista &&
                    this.state.freelancer > this.state.manager) {
                    primero = "Freelancer"
                }
                else if (this.state.especialista > this.state.tecnologo &&
                    this.state.especialista > this.state.freelancer &&
                    this.state.especialista > this.state.manager) {
                    primero = "Especialista"
                } else {
                    primero = "Un empate entre dos o más categorías"
                }
        } 

        let htmlPerfil = ""
        if (primero === "Tecnólogo") {
            htmlPerfil = (
                <React.Fragment>
                    <Tecnologo/> 
                </React.Fragment>
                
            )
        } else if (primero === "Manager") {
            htmlPerfil = (
                <React.Fragment>
                    <Manager/> 
                </React.Fragment>
            )
        } else if (primero === "Freelancer") {
            htmlPerfil = (
                <React.Fragment>
                    <Freelancer/> 
                </React.Fragment>
            )
        } else if (primero === "Especialista") {
            htmlPerfil = (
                <React.Fragment>
                    <Experto/> 
                </React.Fragment>
            )
        } else if (primero === "Un empate entre dos o más categorías") {
            htmlPerfil = (
                <React.Fragment>
                    <Multiperfil/> 
                </React.Fragment>
            )
        }

        const perfiles = ["tecnologo", "manager", "freelancer", "especialista"];

        return(
            <React.Fragment>
                <div><h1>Tu perfil es: {primero}</h1></div>
                <div className="profile">   
                    {this.state.resultados !== null ? (
                        <div className="tablas">
                            <p>Su Porcentaje de tecnólogo es de: {this.state.tecnologo}%</p>
                            <p>Su Porcentaje de manager es {this.state.manager}%</p>
                            <p>Su Porcentaje de freelancer es {this.state.freelancer}%</p>
                            <p>Su Porcentaje de especialista es {this.state.especialista}%</p> 
                        </div>  
                     ) : ""}
                    <div>{htmlPerfil}</div>
                </div>   


                <section className="progress-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-lg-2"></div>
                            <div className="col-md-8 col-lg-8">
                            {
                            perfiles.map( perfil => {
                                const valor = this.state[perfil];
                                const ancho = `${valor}%`;
                                return <div key={perfil} className="barWrapper">
                                    <span className="progressText"><b>{perfil}</b></span>
                                    <div className="progress">
                                      <div className="progress-bar" role="progressbar" aria-valuenow={valor} aria-valuemin="0" aria-valuemax="100" >  
                                        <span  className="popOver" data-toggle="tooltip" data-placement="top" title={ancho}></span>     
                                      </div>
                                    </div>
                                </div>
                            })
                            }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>    
        )      
    }
}

export default Perfil;