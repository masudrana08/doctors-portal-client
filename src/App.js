import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import DentalServices from './Components/DentalServices/DentalServices';
import Home from './Components/Home/Home';

function App() {
  return (
        <Router>
        
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/dental-services'>
            <DentalServices></DentalServices>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
