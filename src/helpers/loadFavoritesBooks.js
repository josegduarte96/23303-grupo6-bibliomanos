import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../firebase/firebaseConfig"

export const loadFavoritesBooks = async (uid) => {
  if (!uid) throw new Error("uid is required")
  const collectionRef = collection(db, `${uid}/favorites/books`)
  const docs = await getDocs(collectionRef)
  const favorites = []
  docs.forEach((doc) => {
    favorites.push({ id: doc.id, ...doc.data() })
  })
  return favorites
}
