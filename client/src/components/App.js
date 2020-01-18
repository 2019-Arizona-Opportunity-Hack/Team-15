import React from 'react';
import '../style/App.css';
import CreateUserPage from '../pages/CreateUserPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerSplashScreen from '../pages/CustomerSplashScreen';
import CustomerViewPage from '../pages/CustomerViewPage';
import FourOrFourError from '../pages/FourOrFourError';
import CustomerLoginPage from '../pages/CustomerLoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CustomerSplashScreen} />
        <Route exact path="/user/:username" component={CustomerViewPage} />
        <Route path="/newuser" component={CreateUserPage} />
        <Route path="/login" component={CustomerLoginPage} />
        <Route component={FourOrFourError} />
      </Switch>
    </Router>
  );
}

export default App;
