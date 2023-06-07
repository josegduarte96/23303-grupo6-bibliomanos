import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import { BrowserRouter as Router, Link } from "react-router-dom";
//import { Link } from "react-router-dom";


import "slick-carousel/slick/slick-theme.css";
//import Info from "./Info";
import "./styles.css";

const LibreriaOnline = () => {

  const [romanceBooks, setRomanceBooks] = useState([]);
  const [childrenBooks, setChildrenBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(12);
 

 

  useEffect(() => {
    fetchBooks("romance", setRomanceBooks);
    fetchBooks("juvenile fiction", setChildrenBooks);

    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchBooks = (query, callback) => {
    fetch(`https://openlibrary.org/search.json?q=${query}&sort=new&limit=150`)
      .then((response) => response.json())
      .then((data) => {
        if (data.docs) {
          const booksWithCovers = data.docs.filter((book) => book.cover_i);
          callback(booksWithCovers);
        }
      })
      .catch((error) => {
        console.log("Error en el fetching data de Open Library API:", error);
      });
  };

  const handleSearch = () => {
    const sanitizedTerm = encodeURIComponent(searchTerm.trim());
    if (sanitizedTerm) {
      fetchBooks(sanitizedTerm, setSearchResults);
      setCurrentPage(1);
    }
  };

  function getSlidesToShow() {
    const windowWidth = window.innerWidth;
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

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = searchResults.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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

        {searchResults.length > 0 && (
            <div className="container search-results">
            <h2 className="mt-2 mb-3">Resultados de búsqueda</h2>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4  ">
                {currentBooks.map((book) => (
                <div className="col" key={book.key}>
                    <div className="card tarjeta  h-100">
                        <img
                            src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                            alt="Portada"
                            className="card-img-top w-100"
                        />
                        <div className="card-body">
                            <h6 className="my-2">{book.title}</h6>
                            <p className="autor">{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
                           {/**  <button onClick={() => Info({ book })}>Info</button>*/}
                            

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
                    </div>
                </div>
                ))}
            </Slider>
            </div>
        </div>
        </div>
   //**  </Router>*/
  );
};

export default LibreriaOnline;
