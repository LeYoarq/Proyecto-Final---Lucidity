import React from 'react';
import './styles.css';

import Banner from '../Banner';
import Perfiles from './Perfiles';

export default () => (
    <React.Fragment>
        <Banner />
        <h1>
            <div className="animated fadeInLeft">NUESTROS</div><div className="animated fadeInRight">PERFILES</div>
        </h1>
        <p className="animated fadeInUp delay-1">Tipo de Expertise</p>
        <Perfiles />
    </React.Fragment>
);



