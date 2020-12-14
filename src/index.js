import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { BrowserRouter } from 'react-router-dom';
// firebase
import firebase from 'firebase/app';
import 'firebase/auth'; // get everything from this library
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCW7ozcOqD7Qq-xP-D5XmwyTAxhcR-sS1c",
authDomain: "info340-skius.firebaseapp.com",
projectId: "info340-skius",
storageBucket: "info340-skius.appspot.com",
messagingSenderId: "445934785992",
appId: "1:445934785992:web:044a87a1ea174b00a75cfd",
measurementId: "G-XQXQVSZ7HD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));