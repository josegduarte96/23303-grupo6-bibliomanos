import { useEffect, useMemo } from "react"
import CarouselBooks from "./CarouselBooks"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "../store/books/thunks"
import { AUTH_STATUS } from "../store/auth/authSlice"

function HeroSection() {
  const dispatch = useDispatch()
  const { technology, romance, science, favorites, isSearching } = useSelector((state) => state.books)
  const { status } = useSelector((state) => state.auth)
  useEffect(() => {
    const isValidData = technology.length && romance.length && science.length && favorites.length
    if (!isValidData) {
      dispatch(getBooks())
    }
  }, [])
  const isLogged = useMemo(() => status === AUTH_STATUS.AUTHENTICATED, [status])
  const isLoading = useMemo(() => isSearching, [isSearching])

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {isLogged && (
          <div className="col-12 col-sm-8">
            <section className="py-3">
              {favorites.length > 0 ? (
                <>
                  <h2>Tus Libros favoritos</h2>
                  <CarouselBooks books={favorites} />
                </>
              ) : (
                
                  isLoading ? 
                  <h1>
                    Cargando...
                  </h1>
                  : <h3 className="text-center">Aún no tienes libros favoritos😟</h3>  
                                
              )}
            </section>
          </div>
        )}
        <div className="col-12 col-sm-8 border-top">
          <section className="py-3">
            <h2>Tecnología</h2>
            <CarouselBooks books={technology} />
          </section>
        </div>
        <div className="col-12 col-sm-8 border-top">
          <section className="py-3">
            <h2>Romance</h2>
            <CarouselBooks books={romance} />
          </section>
        </div>
        <div className="col-12 col-sm-8 border-top">
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
