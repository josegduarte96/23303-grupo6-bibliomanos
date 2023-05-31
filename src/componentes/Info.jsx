import React from "react";

const Info = (props) => {
const { book } = props.location.state;
// const Info = ({ book }) => {
  return (
    <div>
      <h2>Información del libro</h2>
      <div>
        <img
          src={`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          alt="Portada"
        />
      </div>
      <div>
        <h3>Título: {book.title}</h3>
        <p>Autor: {book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
        <p>Descripción: {book.description ? book.description.value : "Descripción no disponible"}</p>
        {/* Agregar más detalles del libro aquí */}
      </div>
    </div>
  );
};

export default Info;
