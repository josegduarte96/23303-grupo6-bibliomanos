import apiOL from "../../api/apiService"
import { loadBooks } from "../../helpers/loadBooks"
import { setBooks, setIsSearching } from "./booksSlice"

export const getBooks = () => {
  return async (dispatch, getState) => {
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
  return async (dispatch, getState) => {
    const data = await apiOL.get(`${bookKey}.json`)
    console.log(data)
  }
}
