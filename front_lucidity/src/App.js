import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './containers/Layout';
import Home from './components/Home'
import Login from './components/LoginComponents';
import Register from './components/Register';
import Test from './components/Test';
import ControlPanel from './components/ControlPanel';
import Perfil from './components/Perfil';

class App extends Component {
  // componentDidMount() {
  //   this.props.onMountAutoSignup();
  // }
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/login' exact component={ Login }/>
          <Route path='/register' exact component={ Register }/>
          <Route path='/test' exact component={ Test }/>
          <Route path='/panel' exact component={ ControlPanel }/>
          <Route path='/perfil' exact component={ Perfil }/>
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
