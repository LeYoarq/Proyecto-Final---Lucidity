import React from 'react';
import logo from '../../assets/Logo_sin.png';
import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/">
        <section className="wrapper">
          <img style={{ width: 60, height: 40 }} src={ logo } alt="img"/>
        </section>
    </Link>    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <Link to="/login">
              <button type="button" className="btn btn-outline-info login mr-sm-2" >
                Entrar 
              </button>
        </Link>
        <Link to="/register">
              <button type="button" className="btn btn-outline-warning register">
                Registro 
              </button>
        </Link>
      </form>
    </div>
  </nav>
</React.Fragment>
  );
}

export default Navbar;