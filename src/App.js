import React, { useEffect } from 'react';
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
    <div className="App">
      <Navbar />
      <Timeclock />
    </div>
  );
}

export default App;
