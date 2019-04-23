import React from 'react';
import './styles.css';
//import Manager from '../../Assets/img/manager.jpg';


export default () => (
    <React.Fragment>
        <div className="row">
            <div className="col-1-of-4">
                <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1" >
                    </div>
                    <h4 className="card__headding">
                    <span className="card__headding-span card__headding-span--1">Manager</span>
                    </h4>
                    <div className="card__details">
                    <ul>
                        <li>Gestion de Equipo</li>
                        <li>Liderazgo</li>
                        <li>Toma de Desiciones</li>
                        <li>Trabajo en Equipo</li>
                        <li>Capacidad de Comunicación</li>
                    </ul>
                    </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-value">Manager</p>
                        <p className="card__price-only">
        El IT Manager se centra en la administración de los recursos tecnológicos, aportando un profundo  conocimiento técnico específico. Es el proveedor de la  visión tecnológica enfocada al negocio, aportando su conocimiento técnico unido a las competencias administrativas  y de liderazgo.
        </p>                
                    </div>    
                    </div>
                </div>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">
                    &nbsp;
                    </div>
                    <h4 className="card__headding">
                    <span className="card__headding-span card__headding-span--2">Freelance</span>
                    </h4>
                    <div className="card__details">
                    <ul>
                        <li>Orientación al Cliente</li>
                        <li>Negociación</li>
                        <li>Iniciativa</li>
                        <li>Persistencia</li>
                        <li>Flexibilidad</li>
                    </ul>
                    </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-value">Freelance</p>
                        <p className="card__price-only">El Emprendedor diseña, lanza y pone en funcionamiento un negocio o Startup, Los emprendedores actúan como administradores y anticipan el lanzamiento y crecimiento de su compañía.</p>                
                    </div>    
                    </div>
                </div>
                </div>
            </div> 
            <div className="col-1-of-4">
                <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">
                    &nbsp;
                    </div>
                    <h4 className="card__headding">
                    <span className="card__headding-span card__headding-span--3">Tecnólogo</span>
                    </h4>
                    <div className="card__details">
                    <ul>
                        <li>Curiosidad</li>
                        <li>Innovación</li>
                        <li>Flexibilidad</li>
                        <li>Trabajo en Equipo</li>
                        <li>Capacidad de Comunicación</li>
                    </ul>
                    </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-value">Tecnólogo</p>
                        <p className="card__price-only">El Tecnólogo es un profesional altamente capacitado para trabajar en el campo de la tecnología aplicada, combinando la actividad intelectual con la actividad manual. Su trabajo suele centrarse en la mejora del producto, fabricación, construcción, ingeniería y funciones operativas, a través del uso y la optimización de la tecnología.</p>                
                    </div>    
                    </div>
                </div>
                </div>
            </div> 
            <div className="col-1-of-4">
                <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--4">
                    &nbsp;
                    </div>
                    <h4 className="card__headding">
                    <span className="card__headding-span card__headding-span--4">Experto</span>
                    </h4>
                    <div className="card__details">
                    <ul>
                        <li>Resolución de Problemas</li>
                        <li>Atención al Detalle</li>
                        <li>Abstracción</li>
                        <li>Orientación a Resultados</li>
                        <li>Curiosidad</li>
                    </ul>
                    </div>
                </div>
                <div className="card__side card__side--back card__side--back-4">
                    <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-value1">Experto</p>
                        <p className="card__price-only">Un especialista TIC es el profesional encargado de diseñar y mantener sistemas usados para almacenar, procesar y enviar información. El Experto TIC  puede trabajar con el resto del equipo de desarrollo para crear dispositivos específicos e implementarlos.</p>                
                    </div>    
                    </div>
                </div>
                </div>
            </div>     
        </div>
    </React.Fragment>
);