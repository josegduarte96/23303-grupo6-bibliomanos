import Glider from "react-glider"
import "glider-js/glider.min.css"
import { useMemo } from "react"
import { Book } from "./Book"
import { useSelector } from "react-redux"
import { Loading } from "./Loading"

const CarouselBooks = ({ books }) => {
  const { isSearching } = useSelector((state) => state.books)
  const loading = useMemo(() => isSearching, [isSearching])

  const sm = {
    breakpoint: 775,
    settings: {
      slidesToShow: "3",
      slidesToScroll: "auto",
      itemWidth: 105,
      duration: 0.25,
    },
  }
  const md = {
    breakpoint: 1120,
    settings: {
      slidesToShow: "5",
      slidesToScroll: "auto",
      itemWidth: 150,
      duration: 0.25,
    },
  }
  const responsiveSlides = [sm, md]
  // const button = useRef()
  // const buttonNext = useRef()

  if (loading) return <Loading />
  return (
    <div className="d-flex justify-content-center p-4">
      {/* <i
        ref={button}
        style={{ fontSize: "40px" }}
        className="fa-solid fa-angle-left text-warning align-self-center mx-1 pointer"
      /> */}
      <Glider hasArrows hasDots draggable slidesToShow={1} slidesToScroll={"auto"} responsive={responsiveSlides}>
        {books.map((book) => (
          <Book
            key={book.key}
            bookKey={book.key}
            author={book.author_name}
            cover_i={book.cover_i}
            publisher={book.publisher?.join(", ")}
            subject={book.subject.join(", ")}
            title={book.title}
          />
        ))}
      </Glider>
      {/* <i
        ref={buttonNext}
        style={{ fontSize: "40px" }}
        className="fa-solid fa-angle-right text-warning align-self-center mx-1 pointer"
      /> */}
    </div>
  )
}

export default CarouselBooks
