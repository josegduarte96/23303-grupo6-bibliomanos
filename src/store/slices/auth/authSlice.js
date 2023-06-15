import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true
    },
    login: (state, action /* action */) => {
      state.user = action.payload.user
      state.isLoading = action.payload.isLoading
    },
    logout: (state) => {
      state.user = null
    },
    register: (state, action) => {
      state.user = action.payload.user
      state.isLoading = action.payload.isLoading
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, register, setIsLoading } = authSlice.actions

export default authSlice.reducer
