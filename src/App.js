import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';

import firebaseConfig from './config/firebase';

import Navbar from './components/Navbar/Navbar';
import Timeclock from './components/Timeclock';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
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
        <Navbar />
        <Switch>
          <Route exact path='/' component={Timeclock} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
