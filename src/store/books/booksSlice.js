import { createSlice } from "@reduxjs/toolkit"
export const booksSlice = createSlice({
  name: "books",
  initialState: {
    romance: [],
    technology: [],
    science: [],
    favorites: [],
    isSearching: false,
    bookSelected: null,
  },
  reducers: {
    setIsSearching(state, action) {
      state.isSearching = action.payload
    },
    setBooks(state, action) {
      const { romance, technology, science } = action.payload
      state.romance = romance
      state.technology = technology
      state.science = science
      state.isSearching = false
    },
    setBookSelected(state, action) {
      state.bookSelected = action.payload
      state.isSearching = false
    },
    setFavorites(state, action) {
      state.favorites = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBooks, setIsSearching, setBookSelected, setFavorites } = booksSlice.actions
export default booksSlice.reducer
