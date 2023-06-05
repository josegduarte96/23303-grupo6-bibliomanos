//import { Router } from 'react-router-dom';
import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LibreriaOnline from './componentes/LibroGal2';
//import Info from './componentes/Info';
//import "./componentes/styles.css";
import {Routes, Route, Link} from 'react-router-dom';
import DetalleLibro from './componentes/DetalleLibro';
import LibroGal2 from './componentes/LibroGal2';



 
function App() {
  return (
    <div className="App">
      
     <LibreriaOnline /> 
      

{/*       <Routes>
        <Route path="/LibroGal2" element={<LibroGal2 />} />
        <Route path="/DetalleLibro" element={<DetalleLibro />} />
      </Routes> */}

    </div>

   
  
  );
}

export default App;
