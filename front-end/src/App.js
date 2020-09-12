import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Redirect, BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss';
import CreateGraph from './components/CreateGraph';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Navheader from './components/Navheader';
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

import { setsnack } from './redux/actions'



function App({ dispatch }) {
 
  const state = useSelector(state => state)
  const handleClose = async (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setsnack({ open: false, type: "success", message: "success" }))
   
  };


  return (


    <BrowserRouter>

      <CssBaseline />
      {/* The rest of your application  */}
      <div className='app'>
        <Navheader />
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={state.snakbar.open}
          autoHideDuration={6000}
          onClose={handleClose}>
          <Alert onClose={handleClose} severity={state.snakbar.type}>
            {state.snakbar.message}
          </Alert>
        </Snackbar>
        <div className="wrapper">
          <Switch>
            {!state.token && <Redirect from="/dashboard"  to="/signin"/>}
            {state.token && <Redirect from="/signin"  to="/dashboard"/>}
            {state.token && <Redirect from="/signup"  to="/dashboard"/>}
           
            <Route exact path="/" component={Landing} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
        
          </Switch>
        </div>
      </div>



    </BrowserRouter>

  );
}

App = connect()(App)

export default App;
