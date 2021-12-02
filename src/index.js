import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2dAwnFgZpZ-UpvVkHHGT4zKu5CypFwsQ",
  authDomain: "cars-fb6e1.firebaseapp.com",
  databaseURL: "https://cars-fb6e1-default-rtdb.firebaseio.com",
  projectId: "cars-fb6e1",
  storageBucket: "cars-fb6e1.appspot.com",
  messagingSenderId: "375996868267",
  appId: "1:375996868267:web:021bcbcc18d67d69e139ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
