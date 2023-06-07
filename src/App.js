//import { Router } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import LibreriaOnline from './componentes/LibroGal2';
//import Info from './componentes/Info';
//import "./componentes/styles.css";

 
function App() {

  

  return (
    <div className="App">

      <Login/>
      <LibreriaOnline/>
    </div>

   
  
  );
}

export default App;
