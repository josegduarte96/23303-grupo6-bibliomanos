import { collection, doc, setDoc, updateDoc } from "firebase/firestore/lite"
import { db } from "../../firebase/firebaseConfig"
import apiOL from "../../api/apiService"
import { searchByCategory } from "../../helpers/searchBooksByCategory"
import { setBookSelected, setIsSearching, setBooks, setFavorites, setbooksSearched } from "./booksSlice"
import { loadFavoritesBooks } from "../../helpers/loadFavoritesBooks"
import { notify } from "../../components/Notification"
import { searchByTitle } from "../../helpers/searchBookByTitle"

export const getBooks = () => {
  return async (dispatch) => {
    dispatch(setIsSearching(true))

    const [romance, technology, science] = await Promise.all([
      searchByCategory("romance"),
      searchByCategory("javascript"),
      searchByCategory("science"),
    ])
    dispatch(setBooks({ romance, technology, science }))
  }
}

export const getBookByTitle = (inputText) => {
  return async (dispatch) => {
   dispatch(setIsSearching(true))
   const resultados = await searchByTitle(inputText)
   dispatch(setbooksSearched(resultados))
   dispatch(setIsSearching(false))
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

export const addFavorite = () => {
  return async (dispatch, getState) => {
    const { bookSelected, favorites } = getState().books
    const { uid } = getState().auth
    notify("Libro agregado a favoritos")

    // Si ya existe en favoritos no se agrega de nuevo
    if (favorites.filter((fav) => fav.key === bookSelected.key).length > 0) return console.log("Ya existe en favoritos")
    const { title, subject_people, covers, key, subjects: subject } = bookSelected
    const book = { title, author_name: "Autor Desconocido", cover_i: covers[0], key, subject }
    if (subject_people?.length > 0) book.author_name = subject_people[0]

    const bookFavorite = { uid, ...book }
    const newDoc = doc(collection(db, `${uid}/favorites/books`))
    await setDoc(newDoc, bookFavorite)
    dispatch(setFavorites([...favorites, bookFavorite]))
  }
}

//esta seria la funcion eliminar favoritos - falta configurar firebase
/* export const removeFavorite = () => {
  return async (dispatch, getState) => {
    const { bookSelected, favorites } = getState().books
    const { uid } = getState().auth
    notify("Libro eliminado de favoritos")
    
    // Si está eliminado no hace nada, modificar codigo
    if (favorites.filter((fav) => fav.key !== bookSelected.key).length > 0) return console.log("Libro eliminado de favoritos")
    const { title, subject_people, covers, key, subjects: subject } = bookSelected
    const book = { title, author_name: "Autor Desconocido", cover_i: covers[0], key, subject }
    if (subject_people?.length > 0) book.author_name = subject_people[0]

    const bookFavorite = { uid, ...book }
    const newDoc = doc(collection(db, `${uid}/favorites/books`))
    await setDoc(newDoc, bookFavorite)
    dispatch(setFavorites([...favorites, bookFavorite]))
  }
} */

  export const removeFavorite = () => {
    return async (dispatch, getState) => {
      const { bookSelected, favorites } = getState().books;
      const { uid } = getState().auth;
  
      if (!favorites.some((fav) => fav.key === bookSelected.key)) {
        console.log("No existe entre favoritos");
        return;
      }
  
      const updatedFavorites = favorites.filter((fav) => fav.key !== bookSelected.key);
  
      const favoritesFirebase = doc(db, `${uid}/favorites`);
      await updateDoc(favoritesFirebase, { books: updatedFavorites });
  
      dispatch(setFavorites(updatedFavorites));
  
      notify("Libro eliminado de favoritos");
    };
  };
  

export const getFavorites = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const favorites = await loadFavoritesBooks(uid)
    dispatch(setFavorites(favorites))
  }
}
