import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

class Register extends Component {
    state = {
        name: '',
        lastname: '',
        email: '',
        city: '',
        age: '',
        password: '',
        redirect: false
    }


    handleChange = e => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        }


    submitHandler = () => {        
        const objectData = {
            name: this.state.name,
            lastname: this.state.lastname,
            edad: this.state.age,
            psw: this.state.password,
            email: this.state.email,
            city: this.state.city
        }
        const url = `http://localhost:3000/api/usuarios`;

        axios.post(url, objectData)
            .then(response => {
               alert("El usuario ha sido creado exitosamente.")
               this.setState({redirect: true});
            })
            .catch(err => {
               alert("Ha habido un problema y no hemos podido registrar el usuario.");
            });    
    }

    render () {

        if (this.state.redirect === true) {
            return <Redirect to="/login" />
        }

        return(
        <React.Fragment>
                <div className="contenedor2">
                    <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1" className="tab">Registrarse</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="name" className="label">Nombres</label>
                                    <input id="user" type="text" className="input"  
                                    onChange={(e) => {this.handleChange(e)}} 
                                    name="name" required/>
                                </div>

                                <div className="group">
                                    <label htmlFor="lastname" className="label">Apellidos</label>
                                    <input type="text" className="input" 
                                    onChange={(e) => {this.handleChange(e)}}  
                                    name="lastname" required/>
                                </div>

                                <div className="group">
                                    <label htmlFor="email" className="label">Correo Electrónico</label>
                                    <input type="text" className="input"  
                                    onChange={(e) => {this.handleChange(e)}}  
                                    name="email" required/>
                                </div>

                                <div className="group">
                                    <label htmlFor="city" className="label">Ciudad</label>
                                    <input type="text" className="input" 
                                    onChange={(e) => {this.handleChange(e)}} 
                                    name="city" required/>
                                </div>

                                <div className="group"> 
                                    <label htmlFor="age" className="label">Edad</label>
                                    <input type="text" className="input"  
                                    onChange={(e) => {this.handleChange(e)}} 
                                    name="age" required/>
                                </div>

                                <div className="group">
                                <label htmlFor="password" className="label">Password</label>
                                    <input type="password" className="input"  
                                    onChange={(e) => {this.handleChange(e)}} 
                                    name="password" required/>
                                </div>
                                        
                                <div className="group">
                                    <button type="button" 
                                    onClick={this.submitHandler} 
                                    className="button panel">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
                </div>
        </React.Fragment>

        )  
    }
}

export default Register;
         