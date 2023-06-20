import { login, register, logout, checkingCredentials } from "../auth/authSlice"
import {
  logoutFirebase,
  registerNewUserWithEmailAndPassword,
  signInWithGoogle,
  startSignInWithEmailAndPassword,
} from "../../firebase/providers"

export const signIn = (loginForm) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const resp = await startSignInWithEmailAndPassword(loginForm)
    // En caso de error
    if (!resp.ok) return dispatch(logout(resp))
    // Si el resultado es exitoso
    dispatch(login(resp))
  }
}

export const signOut = () => {
  return async (dispatch) => {
    await logoutFirebase()
    dispatch(logout({ errorMessage: null }))
  }
}

export const signInGoogle = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle()
    // En caso de error
    if (!result.ok) return dispatch(logout(result))

    // Si el resultado es exitoso
    dispatch(login(result))
  }
}

export const registerNewUser = ({ nombre: displayName, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const resp = await registerNewUserWithEmailAndPassword({ email, password, displayName })
    if (!resp.ok) return dispatch(logout(resp))

    dispatch(register(resp))
  }
}
