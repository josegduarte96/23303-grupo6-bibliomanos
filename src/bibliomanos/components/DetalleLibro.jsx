import { useSelector } from "react-redux"
import MainLayout from "../../components/layouts/MainLayout"
import { useState } from "react"

export const DetalleLibro = () => {
  const { bookSelected, isSearching } = useSelector((state) => state.books)
  const dateOptions = { year: "numeric", month: "long", day: "numeric" }
  const dateCreated =
    bookSelected?.created.value && new Date(bookSelected.created.value).toLocaleDateString(undefined, dateOptions)
  const dateModified =
    bookSelected?.last_modified.value &&
    new Date(bookSelected.last_modified.value).toLocaleDateString(undefined, dateOptions)
  const [buttonExpanded, setButtonExpanded] = useState(false)
  const likeBook = () => {
    setButtonExpanded(true)
    setTimeout(() => {
      setButtonExpanded(false)
    }, 500)
  }
  if (isSearching) return <MainLayout>Buscando...</MainLayout>
  return (
    <MainLayout>
      <div className="row p-3">
        <div className="col-12 col-md-4 d-flex flex-column">
          <img
            className="rounded w-75 h-100 align-self-center"
            style={{ objectFit: "fill" }}
            src={`https://covers.openlibrary.org/b/id/${bookSelected.covers?.[0]}-L.jpg`}
            alt=""
          />
          <div style={{ fontSize: "25px" }} className="d-flex p-3 justify-content-evenly w-100">
            <i
              onClick={likeBook}
              className={`heart fa-solid fa-heart text-danger pointer ${buttonExpanded ? "expanded" : ""}`}></i>
            <i className="fa-solid fa-trash"></i>
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
