import React, { useEffect } from 'react';
import firebase from 'firebase';

import firebaseConfig from './config/firebase';

import AwaitScan from './components/AwaitScan';
import 'bulma/css/bulma.css';
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
        <AwaitScan />
    </div>
  );
}

export default App;
