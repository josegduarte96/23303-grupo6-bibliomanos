//Realiza el detalle de un libro seleccionado

const Info = ({ selectedBook, handleBack }) => {
  return (
    <div>
      <h3>{selectedBook.title}</h3>
      <img src={`https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-L.jpg`} alt="Portada" className="w-25" />
      <p>Autor: {selectedBook.author_name ? selectedBook.author_name.join(", ") : "Autor Desconocido"}</p>
      <p>Fecha de Publicación: {selectedBook.first_publish_year}</p>
      <p>Descripción: {selectedBook.description}</p>
      {selectedBook.subjects && <p>Temas: {selectedBook.subjects.join(", ")}</p>}
      {/**    {selectedBook.publishers && <p>Editorial: {selectedBook.publishers.join(", ")}</p>}*/}
      <button onClick={handleBack}>Volver</button>
    </div>
  )
}

export default Info

{
  /** //App.js
import React from 'react';
import './App.css';
import LibreriaOnline from './componentes/LibroGal1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>mensaje de prueba arriba</h2>
      <Router>
        <Routes>
          <Route path="/" element={<LibreriaOnline />} />
        </Routes>
      </Router>
      <h3>mensaje de prueba abajo</h3>
    </div>
  );
}
export default App;
*/
}
