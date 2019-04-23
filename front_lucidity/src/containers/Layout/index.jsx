    
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Layout(props) {
  return (
    <div>
      <Header />
        {/* <h1>{props.title}</h1> Me sale un borde en el video */} 
        {props.children}
      <Footer />
    </div>
  );
}
export default Layout;