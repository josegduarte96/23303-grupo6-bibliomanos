import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../components/layouts/MainLayout"
import { useState } from "react"
import { addFavorite, removeFavorite } from "../../store/books/thunks"
import { notify } from "../../components/Notification"
import { Loading } from "../../components/Loading"
import { Link } from "react-router-dom"

export const DetalleLibro = () => {
  const { bookSelected, isSearching, favorites } = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const dateOptions = { year: "numeric", month: "long", day: "numeric" }
  const dateFormatter = new Intl.DateTimeFormat(undefined, dateOptions)
  const dateCreated = bookSelected?.created?.value && dateFormatter.format(new Date(bookSelected.created.value))
  const dateModified =
    bookSelected?.last_modified?.value && dateFormatter.format(new Date(bookSelected.last_modified.value))

  const [buttonExpanded, setButtonExpanded] = useState(false)

  const likeBook = () => {
    if (favorites.filter((fav) => fav.key === bookSelected.key).length > 0)
      return notify("Este libro ya está en tus favoritos", "linear-gradient(90deg, #F9DE70, #FFFBAB)")

    setButtonExpanded(true)
    setTimeout(() => {
      setButtonExpanded(false)
    }, 500)
    dispatch(addFavorite())
  }

  const unLikeBook = () => {
    dispatch(removeFavorite())
  }

  const loading = <Loading spinnerStyle={{ width: "1.2rem", height: "1.2rem" }} />

  // Si se está buscando un libro, se muestra un spinner
  if (isSearching && bookSelected === null)
    return (
      <div className="d-flex flex-column justify-content-center" style={{ height: "100vh" }}>
        {loading}
      </div>
    )
  else if (bookSelected === null)
    // si no hay ningun libro seleccionado
    return (
      <MainLayout>
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "70vh" }}>
          <h4>Selecciona un libro antes para ver más Información.. </h4>
          <div>
            <Link to="/" className="btn btn-outline-primary">
              Ir al inicio
            </Link>
          </div>
        </div>
      </MainLayout>
    )
  // Si todo esta OK reenderiza el libro encontrado
  else
    return (
      <MainLayout>
        <div className="row p-3">
          <div className="col-12 col-md-4 d-flex flex-column">
            <img
              className="rounded w-75 h-100 align-self-center"
              style={{ objectFit: "fill" }}
              src={`https://covers.openlibrary.org/b/id/${bookSelected.covers?.[0]}-L.jpg`}
              alt=""
              loading="lazy"
            />
            <div style={{ fontSize: "25px" }} className="d-flex p-3 justify-content-evenly w-100">
              {isSearching ? (
                loading
              ) : (
                <>
                  <i
                    onClick={likeBook}
                    className={`heart fa-solid fa-heart text-danger pointer ${buttonExpanded ? "expanded" : ""}`}></i>
                  <i onClick={unLikeBook} className={`trash fa-solid fa-trash text-dark pointer`}></i>
                </>
              )}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column my-2 flex-sm-row">
              <h1 className="fst-italic mx-3">{bookSelected?.title}</h1>
              <cite>{bookSelected?.subject_people?.[0] ?? "Autor desconocido"}</cite>
            </div>
            <p className="fs-5">{bookSelected?.description?.value.split(". ")[0] ?? "Sin descripción"}</p>
            <div className="p-1">
              <h4>Información del Libro</h4>
              {bookSelected?.subjects.map((subject, i) => (
                <span
                  key={subject}
                  className={`badge text-capitalize me-1 mb-2 ${i % 2 == 0 ? "text-bg-primary" : "text-bg-secondary"}`}>
                  {subject}
                </span>
              ))}
              <p>Fecha de publicación: {dateCreated ?? "Desconocido"}</p>
              <p>Fecha de modificación: {dateModified ?? "Desconocido"}</p>
            </div>
          </div>
        </div>
      </MainLayout>
    )
}
