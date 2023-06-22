import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/authSlice"
import booksReducer from "./books/booksSlice"

export default configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
  },
})
