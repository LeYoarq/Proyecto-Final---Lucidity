import React from 'react';
import { Link } from 'react-router-dom';


class ControlPanel extends React.Component {
    render(){
        return(
            <React.Fragment>
                <form action="/panel">
                    <div className="pnlControl">                
                        <h1>Panel de control soy yo yoyopis</h1>
                        <Link to="/test">
                            <button type="button" className="btn btn-outline-info login" >
                                Contestar Test
                            </button>
                        </Link>
                        <Link to="/perfil">
                            <button type="button" className="btn btn-outline-info login" >
                                Mi Perfil
                            </button>
                        </Link>
                    </div> 
                </form>  
            </React.Fragment>  
        )   
    }
}

export default ControlPanel;