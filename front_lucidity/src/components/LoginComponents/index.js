import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './styles.css';


class LoginComponent extends Component {
    state = {
        email:'',
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
            password: this.state.password,
            username: this.state.email,
        }
        const url = `http://localhost:3000/api/auth`;

        axios.post(url, objectData)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                alert("Login correcto. ¡Bienvenid@!")
                localStorage.setItem('userID', response.data.user);
                this.setState({redirect: true});
            })
            .catch(err => {
                alert("Ups, ha habido un problema y no hemos podido realizar el login. Vuelva a intentarlo más tarde o contactese con la administradora del sitio.")
            });    
    }

    render(){
        if (this.state.redirect === true) {
            return <Redirect to="/panel" />
        }
        return(
            <React.Fragment>

{/* 
<div className="prueba">
    <div className="group">
        <label htmlFor="email" className="label">Correo Electrónico</label>
        <input id="user" type="text" className="input" name="email" required onChange={(e) => {this.handleChange(e)}}/>
    </div>
    <div className="group">
        <label htmlFor="password" className="label">Contraseña</label>
        <input id="pass" type="password" className="input" name="password" required onChange={(e) => {this.handleChange(e)}}/>
    </div>

    <div className="group">
        <button type="button" className="button" onClick={this.submitHandler}>Entrar</button>
    </div>
</div> */}




                 <div className="contenedor">
                    <div className="login-wrap">
                        <div className="login-html">
                            <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1" className="tab">Entrar</label>
                            <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
                            <div className="login-form">
                                <div className="sign-in-htm">
                                    <div className="group">
                                        <label htmlFor="email" className="label">Correo Electrónico</label>
                                        <input id="user" type="text" className="input" name="email" required onChange={(e) => {this.handleChange(e)}}/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="password" className="label">Contraseña</label>
                                        <input id="pass" type="password" className="input" name="password" required onChange={(e) => {this.handleChange(e)}}/>
                                    </div>
         
                                    <div className="group">
                                        <button type="button" className="button" onClick={this.submitHandler}>Entrar</button>
                                    </div>
                                    <div className="hr"></div>
    
                                </div>			
                            </div>
                        </div>
                    </div> 
                </div> 
            </React.Fragment>
        )  
    }
}
export default LoginComponent;





