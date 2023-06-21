import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth"
import { auth } from "./firebaseConfig"

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const { displayName, email, photoURL, uid } = result.user

    return {
      ok: true,
      //User info
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const startSignInWithEmailAndPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    const { displayName, photoURL, uid } = result.user

    return {
      ok: true,
      //User info
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}
export const registerNewUserWithEmailAndPassword = async ({ email, password, displayName }) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    const { photoURL = "https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg", uid } = result.user

    await updateProfile(auth.currentUser, { displayName, photoURL })

    return {
      ok: true,
      //User info
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const logoutFirebase = async () => {
  return await auth.signOut()
}
