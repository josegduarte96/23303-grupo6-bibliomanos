import { useEffect, useState } from "react"
import apiOL from "../../api/apiService"

const LibreriaOnline = () => {
  const [romanceBooks, setRomanceBooks] = useState([])
  const [childrenBooks, setChildrenBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage] = useState(12)

  useEffect(() => {
    getBooks("horror", setRomanceBooks)
    getBooks("juvenile fiction", setChildrenBooks)
  }, [])

  const fetchBooks = (query, callback) => {
    fetch(`https://openlibrary.org/search.json?q=${query}&sort=new&limit=150`)
      .then((response) => response.json())
      .then((data) => {
        if (data.docs) {
          const booksWithCovers = data.docs.filter((book) => book.cover_i)
          callback(booksWithCovers)
        }
      })
      .catch((error) => {
        console.log("Error en el fetching data de Open Library API:", error)
      })
  }

  const getBooks = async (query, callback) => {
    const { data } = await apiOL.get(`search.json?subject=${query}`)
    // if (data.docs) {
    //   const booksWithCovers = data.docs.filter((book) => book.cover_i)
    //   callback(booksWithCovers)
    // }
    console.log(data)
  }

  // const handleSearch = () => {
  //   const sanitizedTerm = encodeURIComponent(searchTerm.trim())
  //   if (sanitizedTerm) {
  //     fetchBooks(sanitizedTerm, setSearchResults)
  //     setCurrentPage(1)
  //   }
  // }

  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = searchResults.slice(indexOfFirstBook, indexOfLastBook)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    //**   <Router>*/
    <div>
      {/* <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por tema, autor o título"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div> */}

      {searchResults.length > 0 && (
        <div className="container search-results">
          <h2 className="mt-2 mb-3">Resultados de búsqueda</h2>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4  ">
            {currentBooks.map((book) => (
              <div className="col" key={book.key}>
                <div className="card">
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
            <button
              className="close-button btn btn-outline-dark my-3 "
              type="button"
              onClick={() => setSearchResults([])}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      <div className="container-fluid">
        <h2 className="mt-2 mb-3">Libros Románticos</h2>
        <div className="row gy-3 justify-content-center">
          {romanceBooks.map((book) => (
            <div className="card col-12 col-sm-2 p-0 mx-1" key={book.key}>
              <img
                src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt="Portada"
                className="card-img-top img-fluid w-100"
                style={{ objectFit: "contain", height: "60%" }}
              />
              <div className="card-body">
                <h6 className="my-2">{book.title}</h6>
                <p className="autor">{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="mt-2 mb-3">Libros Infantiles</h2>
        <div className="row gy-3 justify-content-center">
          {childrenBooks.map((book) => (
            <div className="card col-12 col-sm-2 p-0 mx-1" key={book.key}>
              <img
                src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt="Portada"
                className=" img-fluid w-100"
                style={{ objectFit: "contain", height: "60%" }}
              />
              <div className="card-body">
                <h6 className="my-2">{book.title}</h6>
                <p className="autor">{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LibreriaOnline
