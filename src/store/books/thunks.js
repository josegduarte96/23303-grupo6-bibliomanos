import apiOL from "../../api/apiService"
import { loadBooks } from "../../helpers/loadBooks"
import { setBookSelected } from "./booksSlice"
import { setBooks, setIsSearching } from "./booksSlice"

export const getBooks = () => {
  return async (dispatch) => {
    dispatch(setIsSearching(true))

    const [romance, tecnology, science] = await Promise.all([
      loadBooks("romance"),
      loadBooks("javascript"),
      loadBooks("science"),
    ])
    dispatch(setBooks({ romance, tecnology, science }))
  }
}

export const getBookByKey = (bookKey) => {
  return async (dispatch) => {
    dispatch(setIsSearching(true))
    try {
      const { data } = await apiOL.get(`${bookKey}.json`)
      dispatch(setBookSelected(data))
    } catch (error) {
      console.log(error)
    }
  }
}
