import { useDispatch } from "react-redux"
import { getBookByKey } from "../store/books/thunks"
import { useNavigate } from "react-router"

export const Book = ({ title, bookKey, author, publisher, subject, cover_i }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const findBook = () => {
    dispatch(getBookByKey(bookKey))
    navigate("/book-details")
  }

  return (
    <img
      src={`http://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}
      className="card-img-top img-fluid mx-1 rounded pointer book-cover"
      alt="book cover"
      loading="lazy"
      style={{ objectFit: "fill", height: "300px" }}
      onClick={findBook}
    />
    // <div className="card mx-1">
    //   <div className="card-body">
    //     <h5 className="card-title">{title}</h5>
    //     <p className="card-text">{author ? author : "Autor desconocido"}</p>
    //     <p className="card-text">{publisher}</p>
    //     <p className="card-text">{subject}</p>
    //   </div>
    // </div>
  )
}
