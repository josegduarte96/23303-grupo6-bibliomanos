import { createSlice } from "@reduxjs/toolkit"

export const AUTH_STATUS = {
  NOT_AUTHENTICATED: "not-authenticated",
  CHECKING: "checking",
  AUTHENTICATED: "authenticated",
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: AUTH_STATUS.CHECKING,
    displayName: null,
    uid: null,
    email: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = AUTH_STATUS.AUTHENTICATED
      state.displayName = payload.displayName
      state.uid = payload.uid
      state.email = payload.email
      state.photoURL = payload.photoURL ?? "https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
      state.errorMessage = payload.errorMessage
    },
    logout: (state, { payload }) => {
      state.status = AUTH_STATUS.NOT_AUTHENTICATED
      state.displayName = null
      state.uid = null
      state.email = null
      state.photoURL = null
      state.errorMessage = payload?.errorMessage ?? null
    },
    register: (state, { payload }) => {
      state.status = AUTH_STATUS.AUTHENTICATED
      state.displayName = payload.displayName
      state.uid = payload.uid
      state.email = payload.email
      state.photoURL = payload.photoURL
      state.errorMessage = payload.errorMessage
    },
    checkingCredentials: (state) => {
      state.status = AUTH_STATUS.CHECKING
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, register, checkingCredentials } = authSlice.actions

export default authSlice.reducer
