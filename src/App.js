import React, { createContext, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import DentalServices from './Components/DentalServices/DentalServices';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const myHost='http://localhost:3001'
export const UserContext=createContext()
function App() {
  const [user,setUser]=useState({})
  return (
        <UserContext.Provider value={[user,setUser]}>
            <Router>
          
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/dental-services'>
              <DentalServices></DentalServices>
            </Route>

            <Route exact path='/auth'>
              <Auth></Auth>
            </Route>

            <PrivateRoute exact path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>

        </UserContext.Provider>
  );
}

export default App;
