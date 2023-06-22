import { createSlice } from "@reduxjs/toolkit"
export const booksSlice = createSlice({
  name: "name",
  initialState: {
    romance: [],
    tecnology: [],
    science: [],
    isSearching: false,
  },
  reducers: {
    setIsSearching(state, action) {
      state.isSearching = action.payload
    },
    setBooks(state, action) {
      const { romance, tecnology, science } = action.payload
      state.romance = romance
      state.tecnology = tecnology
      state.science = science
      state.isSearching = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBooks, setIsSearching } = booksSlice.actions
export default booksSlice.reducer
