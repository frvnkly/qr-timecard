import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';

import firebaseConfig from './config/firebase';

import AdminContext from './context/AdminContext';
import Navbar from './components/Navbar/Navbar';
import Timeclock from './components/Timeclock';
import AddEmployee from './components/AddEmployee';
import Login from './components/Login';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
  const [ admin, setAdmin ] = useState(false);

  useEffect(
    () => {
      firebase.initializeApp(firebaseConfig);
      window.db = firebase.firestore();
    },
    []
  );

  return (
    <HashRouter>
      <div className="App">
        <AdminContext.Provider value={{ admin, setAdmin }}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Timeclock} />
            <Route path='/employees/add' component={AddEmployee} />
            <Route path='/login' component={Login} />
            <Route path='/logout' render={() => <Redirect to='/' />} />
          </Switch>
        </AdminContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
