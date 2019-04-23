import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Test extends React.Component {

    state = {
        res_1: '',
        res_2: '',
        res_3: '',
        res_4: '',
        res_5: '',
        res_6: '',
        res_7: '',
        res_8: '',
        res_9: '',
        res_10: '',
        res_11: '',
        res_12: '',
        res_13: '',
        res_14: '',
        res_15: '',
        res_16: '',
        res_17: '',
        res_18: '',
        res_19: '',
        res_20: '',
        redirect: false
    }

    handleChange = e => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        }


    submitHandler = () => {        
        const objectData = {
            res_1: this.state.res_1,
            res_2: this.state.res_2,
            res_3: this.state.res_3,
            res_4: this.state.res_4,
            res_5: this.state.res_5,
            res_6: this.state.res_6,
            res_7: this.state.res_7,
            res_8: this.state.res_8,
            res_9: this.state.res_9,
            res_10: this.state.res_10,
            res_11: this.state.res_11,
            res_12: this.state.res_12,
            res_13: this.state.res_13,
            res_14: this.state.res_14,
            res_15: this.state.res_15,
            res_16: this.state.res_16,
            res_17: this.state.res_17,
            res_18: this.state.res_18,
            res_19: this.state.res_19,
            res_20: this.state.res_20,
        }
        const url = `http://localhost:3000/api/usuarios/${localStorage.getItem('userID')}/tests`;

        const config = {
            headers: {
              'x-access-token': localStorage.getItem('token')
            }
          }

        axios.post(url, objectData, config)
            .then(() => {
                this.setState({redirect: true});
            })
            .catch(() =>{});    
    }
    

    render(){

        if (this.state.redirect === true) {
            return <Redirect to="/perfil" />
        }

        return(
            <React.Fragment>
                    <h2>Conteste las opciones: 1. Completamente en desacuerdo, 2. En desacuerdo, 3. De acuerdo y 4. Completamente de acuerdo</h2>
                    <div className="radio">
                        <label htmlFor="res_1">1. Soy una persona creativa y me intereso por las novedades que surgen.</label>
                        <input type="radio" name="res_1" value="1" onChange={(e) => {this.handleChange(e)}}/>1 
                        <input type="radio" name="res_1" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_1" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_1" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_2">2. Prefiero estabilidad y equilibrio a sufrir los cambios del entorno.</label>
                        <input type="radio" name="res_2" value="4" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_2" value="3" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_2" value="2" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_2" value="1" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_3">3. Suelo cuestionar las reglas, supuestos o estructuras establecidas.</label>
                        <input type="radio" name="res_3" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_3" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_3" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_3" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_4">4. Suelo encontrar soluciones que otros miembros de mi equipo no ven.</label>
                        <input type="radio" name="res_4" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_4" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_4" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_4" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_5">5. Tengo un flujo constante de ideas pero hay muchas de ellas que no termino de llevarlas a cabo.</label>
                        <input type="radio" name="res_5" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_5" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_5" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_5" value="4" onChange={(e) => {this.handleChange(e)}}/>4   
                        <br></br>
                        <label htmlFor="res_6">6. Soy una persona abierta, flexible y generosa.</label>
                        <input type="radio" name="res_6" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_6" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_6" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_6" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>       
                        <label htmlFor="res_7">7. Prefiero trabajar en compañía de otros.</label>
                        <input type="radio" name="res_7" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_7" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_7" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_7" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_8">8. Las personas de mi alrededor suelen aceptar y seguir mis ideas y opiniones.</label>
                        <input type="radio" name="res_8" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_8" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_8" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_8" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_9">9. Me considero una persona de principios sólidos.</label>
                        <input type="radio" name="res_9" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_9" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_9" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_9" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_10">10. Me gusta motivar a los que me rodean.</label>
                        <input type="radio" name="res_10" value="1" onChange={(e) => {this.handleChange(e)}}/>1 
                        <input type="radio" name="res_10" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_10" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_10" value="4" onChange={(e) => {this.handleChange(e)}}/>4  
                        <br></br>
                        <label htmlFor="res_11">11. Me gusta escuchar sugerencias o consejos de otros profesionales.</label>
                        <input type="radio" name="res_11" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_11" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_11" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_11" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_12">12.  A la hora de comunicarme con otras personas utilizo un lenguaje accesible y me adapto a su nivel de interlocución.</label>
                        <input type="radio" name="res_12" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_12" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_12" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_12" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_13">13. Trato de hacer lo que pueda para evitar tensiones inútiles.</label>
                        <input type="radio" name="res_13" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_13" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_13" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_13" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_14">14. Soy decidido/a para lograr mis objetivos individuales.</label>
                        <input type="radio" name="res_14" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_14" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_14" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_14" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_15">15. Hay oportunidades en que dejo que otros asuman la responsabilidad para resolver el problema.</label>
                        <input type="radio" name="res_15" value="4" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_15" value="3" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_15" value="2" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_15" value="1" onChange={(e) => {this.handleChange(e)}}/>4 
                        <br></br>
                        <label htmlFor="res_16">16. Intento postponer un problema hasta que he tenido tiempo de pensarlo otra vez.</label>
                        <input type="radio" name="res_16" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_16" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_16" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_16" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_17">17. Prefiero asumir funciones o actividades variadas que no requieren un análisis profundo de la situación.</label>
                        <input type="radio" name="res_17" value="4" onChange={(e) => {this.handleChange(e)}}/>1 
                        <input type="radio" name="res_17" value="3" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_17" value="2" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_17" value="1" onChange={(e) => {this.handleChange(e)}}/>4 
                        <br></br>
                        <label htmlFor="res_18">18. Intento conseguir todo lo que concierne a la solución de un problema, inmediatamente después de que se plantea.</label>
                        <input type="radio" name="res_18" value="1" onChange={(e) => {this.handleChange(e)}}/>1 
                        <input type="radio" name="res_18" value="2" onChange={(e) => {this.handleChange(e)}}/>2 
                        <input type="radio" name="res_18" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_18" value="4" onChange={(e) => {this.handleChange(e)}}/>4 
                        <br></br>
                        <label htmlFor="res_19">19. Suelo instruir a otras personas en mi área de expertise.</label>
                        <input type="radio" name="res_19" value="1" onChange={(e) => {this.handleChange(e)}}/>1
                        <input type="radio" name="res_19" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_19" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_19" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                        <br></br>
                        <label htmlFor="res_20">20.Estoy interesado en ideas abstractas.</label>
                        <input type="radio" name="res_20" value="1" onChange={(e) => {this.handleChange(e)}}/>1 
                        <input type="radio" name="res_20" value="2" onChange={(e) => {this.handleChange(e)}}/>2
                        <input type="radio" name="res_20" value="3" onChange={(e) => {this.handleChange(e)}}/>3
                        <input type="radio" name="res_20" value="4" onChange={(e) => {this.handleChange(e)}}/>4
                    </div>
                        <div><input type="submit" value="Submit" onClick={this.submitHandler}/>Enviar respuesta</div>
                        <div><input type="reset"/></div>
            </React.Fragment>
            
        )
        
    }
}

export default Test;