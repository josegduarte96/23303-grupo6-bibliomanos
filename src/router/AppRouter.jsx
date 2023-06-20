import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { BibliomanosRoutes } from "../bibliomanos/routes/BibliomanosRoutes"
import { useDispatch, useSelector } from "react-redux"
import { AUTH_STATUS, login, logout } from "../store/auth/authSlice"
import { CheckingAuth } from "../components/CheckingAuth"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch(logout())
      const { displayName, email, uid, photoURL } = user
      dispatch(login({ displayName, email, uid, photoURL }))
    })
  }, [])

  if (status == AUTH_STATUS.CHECKING) return <CheckingAuth />

  return (
    <Routes>
      {status == AUTH_STATUS.AUTHENTICATED ? (
        <Route path="/*" element={<BibliomanosRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      {/* /Rutas no definidas */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
