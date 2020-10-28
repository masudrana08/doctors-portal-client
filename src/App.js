import React, { createContext, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Auth from './Components/Auth/Auth';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import Appoinment from './Components/Dashboard/Appoinment/Appoinment';
import Dashboard from './Components/Dashboard/Dashboard';
import Patients from './Components/Dashboard/Patients/Patients';
import Prescription from './Components/Dashboard/Prescription/Prescription';
import Setting from './Components/Dashboard/Setting/Setting';

import DentalServices from './Components/DentalServices/DentalServices';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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

            <PrivateRoute exact path='/dashboard/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard/patients'>
              <Patients></Patients>
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard/prescription'>
              <Prescription></Prescription>
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard/appoinment'>
              <Appoinment></Appoinment>
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard/add-doctor'>
              <AddDoctor></AddDoctor>
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard/setting'>
              <Setting></Setting>
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
