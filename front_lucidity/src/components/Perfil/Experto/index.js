import React from 'react';

import './styles.css';

class Experto extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid blue-bg">
                    <div className="container">
                        <h1 className="pb-3 pt-2">FEEDBACK EXPERTO</h1>
                        {/* <!--first section--> */}
                        <div className="row align-items-center how-it-works">
                        <div className="col-2 text-center bottom">
                            <div className="circle">1</div>
                        </div>
                        <div className="col-6">
                            <h1>Nicho De Mercado</h1>
                            <p>estos perfiles profesionales son altamente demandados en empresas de diverso tamaño o sector, que cuenten con un departamento de tecnología:</p>  <p>- Startup</p> <p>- Pymes</p> <p>- Gran Empresa</p>
                                {/* <ul>
                                    <li>Startup</li>
                                    <li>Pymes</li>
                                    <li>Gran Empresa</li>
                                </ul> */}
                         </div>
                        </div> 
                        {/* <!--path between 1-2--> */}
                        <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr/>
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                        </div> 
                        {/* <!--second section--> */}
                        <div className="row align-items-center justify-content-end how-it-works">
                        <div className="col-6 text-right">
                            <h1>Oferta Laboral</h1>
                            <p>estos perfiles profesionales pueden ser valiosos en posiciones como:</p> <p>- Product Manager</p> <p>- Project Manager / Digital Transformation</p> <p>- Business Analyst</p> <p>- Solution Architect</p> <p>- CTO</p>
                                {/* <ul>
                                    <li>Product Manager</li>
                                    <li>Project Manager / Digital Transformation</li>
                                    <li>Business Analyst</li>
                                    <li>Solution Architect</li>
                                    <li>CTO</li>
                                </ul> */}   
                        </div>
                        <div className="col-2 text-center full">
                            <div className="circle">2</div>
                        </div>
                        </div> 
                        {/* <!--path between 2-3--> */}
                        <div className="row timeline">
                        <div className="col-2">
                            <div className="corner right-bottom"></div>
                        </div>
                        <div className="col-8">
                            <hr/>
                        </div>
                        <div className="col-2">
                            <div className="corner top-left"></div>
                        </div>
                        </div> 
                        {/* <!--third section--> */}
                        <div className="row align-items-center how-it-works">
                        <div className="col-2 text-center top">
                            <div className="circle">3</div>
                        </div>
                        <div className="col-6">
                            <h1>Contenido de utilidad / Formación recomendada</h1>
                            <p>Cómo redactar un CV / Portfolio para el sector IT</p>
                            <p>- Cómo elegir una Start-up que acaba de conseguir financiación</p>
                            <p>- Creatividad, Diseño e Innovación</p>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Experto;