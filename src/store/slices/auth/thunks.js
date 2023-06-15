import {
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../../../api/firebaseConfig"
import { login, register, setIsLoading } from "./authSlice"

export const signIn = (loginForm) => {
  return async (dispatch, getState) => {
    if (!loginForm) return
    dispatch(setIsLoading())
    const { email, password } = loginForm
    const data = await signInWithEmailAndPassword(auth, email, password)
    const { refreshToken, displayName } = data.user
    const user = { email, refreshToken, displayName }
    dispatch(login({ user, isLoading: false }))
  }
}

export const signOut = () => {
  return async (dispatch, getState) => {
    dispatch(logout())
    await signOutFirebase(auth)
  }
}

export const registerNewUser = (registerForm) => {
  return async (dispatch, getState) => {
    const { nombre, email, password } = registerForm
    dispatch(setIsLoading())
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, { displayName: nombre })
      const { refreshToken } = data.user
      const user = { displayName: nombre, refreshToken, email }
      dispatch(register({ user, isLoading: false }))
    } catch (error) {
      throw new Error(error)
    } finally {
    }
  }
}

export const getCurrentUser = () => {
  return async (dispatch, getState) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { refreshToken, email, displayName } = user
        const userPayload = { email, refreshToken, displayName }
        // dispatch(login({ user: userPayload, isLoading: false }))
      } else {
        console.log("No logueado")
      }
    })
  }
}
