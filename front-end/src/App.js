import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss';
import CreateGraph from './components/CreateGraph';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Navheader from './components/Navheader';

function App() {
  return (


    <BrowserRouter>

      <CssBaseline />
      {/* The rest of your application  */}
      <div className='app'>
        <Navheader />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/create-new" component={CreateGraph} />
          </Switch>
        </div>
      </div>



    </BrowserRouter>

  );
}

export default App;
