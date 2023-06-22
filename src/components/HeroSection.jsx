import { useEffect } from "react"
import CarouselBooks from "./CarouselBooks"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "../store/books/thunks"

function HeroSection() {
  const dispatch = useDispatch()
  const { tecnology, romance, science } = useSelector((state) => state.books)
  useEffect(() => {
    dispatch(getBooks())
  }, [])

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8">
          <section className="py-3">
            <h2>Tecnología</h2>
            <CarouselBooks books={tecnology} />
          </section>
        </div>
        <div className="col-12 col-sm-8">
          <section className="py-3">
            <h2>Romance</h2>
            <CarouselBooks books={romance} />
          </section>
        </div>
        <div className="col-12 col-sm-8">
          <section className="py-3">
            <h2>Ciencia</h2>
            <CarouselBooks books={science} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
