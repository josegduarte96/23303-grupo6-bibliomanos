import React, { useEffect, useState } from "react"; //cambio
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import { BrowserRouter as Router, Link } from "react-router-dom";
//import { Link } from "react-router-dom";


import "slick-carousel/slick/slick-theme.css";
import Info from "./Info";                                   //cambio
import "./styles.css";

const LibreriaOnline = () => {
  const [romanceBooks, setRomanceBooks] = useState([]);
  const [childrenBooks, setChildrenBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(12);
  const [selectedBook, setSelectedBook] = useState(null);

 

  useEffect(() => {
    fetchBooks("romance", setRomanceBooks);  // Carga inicial de libros de romance de la API
    fetchBooks("infantil", setChildrenBooks);  // Carga inicial de libros de infantiles de la API

    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());  // Actualización de la cantidad de diapositivas a mostrar según tamaño de pantalla
    };

    window.addEventListener("resize", handleResize); // Agrega EventListener para el evento de redimensionamiento de la pantalla
    return () => {
      window.removeEventListener("resize", handleResize);  // Elimina EventListener 
    };
  }, []);

  const fetchBooks = (query, callback) => {
    fetch(`https://openlibrary.org/search.json?q=${query}&sort=new&limit=250`)
      .then((response) => response.json())
      .then((data) => {
        if (data.docs) {
          const booksWithCovers = data.docs.filter((book) => book.cover_i); // Se filtran los libros que tienen una imagen de portada
          callback(booksWithCovers);  // Se llama a la función  con los libros filtrados
        }
      })
      .catch((error) => {
        console.log("Error en el fetching data de Open Library API:", error);
      });
  };

  

  const handleSearch = () => {
    const sanitizedTerm = encodeURIComponent(searchTerm.trim()); //se encarga de eliminar espacios en blanco innecesarios antes de utilizarlo en la URL de la consulta
    if (sanitizedTerm) {
      fetchBooks(sanitizedTerm, setSearchResults);
      setCurrentPage(1);  // Restablece la página actual a 1 después de la búsqueda
    }
  };

  function getSlidesToShow() {
    const windowWidth = window.innerWidth; // Se obtiene el ancho de la ventana
    if (windowWidth >= 1200) {
      return 6;
    } else if (windowWidth >= 992) {
      return 5;
    } else if (windowWidth >= 768) {
      return 4;
    } else if (windowWidth >= 522) {
      return 3;
    } else if (windowWidth >= 420) {
      return 2;
    } else {
      return 1;
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: (
      <button type="button" className="slick-next slick-arrow derecha" aria-label="Next">
        Next
      </button>
    ),
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow" aria-label="Previous">
        Prev
      </button>
    ),
    focusOnSelect: true,
  };

  const indexOfLastBook = currentPage * booksPerPage;  //para la paginación
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = searchResults.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);   //el estado actual de 'selectedBook' es el libro seleccionado
  };

  const handleBack = () => {
    setSelectedBook(null);  // restablece el estado de 'selectedBook' a null para volver
  };


  const fetchBookDetails = async (book) => {
    const workIdentifier = book.key.replace("/works/", "");  // extrae el identificador de work del objeto 'book'
    const worksResponse = await fetch(`https://openlibrary.org/works/${workIdentifier}.json`);  // solicitud a la API para obtener los detalles del libro
    const worksData = await worksResponse.json(); //a la respuesta la convierte en JSON


    setSelectedBook({
      ...book,
      description: worksData.description ? worksData.description : "Descripción no disponible",  // trae la descripción del libro de la API
      subjects: worksData.subjects || [],                                                        // trae los temas del libro de la API
   //   publishers: bookData.publishers ? bookData.publishers.map((publisher) => publisher.name) : []
      
  });
  };
 
  return (
  //**   <Router>*/
        <div>
            <div className="border-bottom border-warning-subtle my-2">
                <h1>Librería Online</h1>
            </div>

            <div className="search-container">
                <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por tema, autor o título"
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
            {selectedBook ? (
              <Info selectedBook={selectedBook} handleBack={handleBack} />
            ) : (
              <div>
                <div>
                  {searchResults.length > 0 && (
                      <div className="container search-results">
                      <h2 className="mt-2 mb-3">Resultados de búsqueda</h2>
                      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4  ">
                          {currentBooks.map((book) => (
                          <div className="col" key={book.key}>
                              <div className="card tarjeta  h-100" onClick={() => handleBookSelect(book)}>
                                  <img
                                      src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                      alt="Portada"
                                      className="card-img-top w-100"
                                  />
                                  <div className="card-body">
                                      <h6 className="my-2">{book.title}</h6>
                                      <p className="autor">{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
                                    {/**  <button onClick={() => Info({ book })}>Info</button>*/}
                                    <button
                                      className="btn btn-primary"
                                      onClick={() => fetchBookDetails(book)}
                                    >
                                      Más info
                                    </button>

                                  </div>
                              </div>
                          </div>
                          ))}
                      </div>
                      <div className="pagination d-inline-flex">
                          {searchResults.length > booksPerPage && (
                          <ul className="pagination-list list-group list-group-horizontal">
                              {Array.from({ length: Math.ceil(searchResults.length / booksPerPage) }).map((_, index) => (
                              <li key={index} className={` pagination-item ${currentPage === index + 1 ? "active" : ""}`}>
                                  <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                              </li>
                              ))}
                          </ul>
                          )}
                          <button className="close-button btn btn-outline-dark my-3 " type="button" onClick={() => setSearchResults([])}>
                          Cerrar
                          </button>
                      </div>
                      </div>
                  )}
                </div>
            
                <div className="eslide">
                    <h2 className="mt-2 mb-3">Libros Románticos</h2>
                    <div className="mx-5">
                    <Slider {...settings}>
                        {romanceBooks.map((book) => (
                        <div className="card tarjeta m-2 w-75" key={book.key}>
                            <img
                            src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                            alt="Portada"
                            className="card-img-top w-100"
                            />
                            <div className="card-body">
                              <h6 className="my-2">{book.title}</h6>
                              <p className="autor">{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
                              <button
                                className="btn btn-primary"
                                onClick={() => fetchBookDetails(book)}
                              >
                                Más info
                              </button>  
                            </div>
                        </div>
                        ))}
                    </Slider>
                    </div>
                </div>

                <div className="eslide">
                    <h2 className="mt-2 mb-3">Libros Infantiles</h2>
                    <div className="mx-5">
                    <Slider {...settings}>
                        
                       {childrenBooks.map((book) => ( 
                        
                        <div className="card tarjeta m-2 w-75" key={book.key}>
                            <img
                            src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                            alt="Portada"
                            className="w-100"
                            />
                            <div className="card-body">
                              <h6 className="my-2">{book.title}</h6>
                              <p className="autor">{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
                              <button
                                className="btn btn-primary"
                                onClick={() => fetchBookDetails(book)}
                              >
                                Más info
                              </button>  
                            </div>
                        </div>
                        ))}
                    </Slider>
                    </div>
                </div>
              </div>
            )}
        </div>
   //**  </Router>*/
  );
};

export default LibreriaOnline;
