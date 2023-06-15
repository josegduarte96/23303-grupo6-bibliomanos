import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {
  const userLogged = useSelector((state) => state.auth.user)
  return userLogged ? children : <Navigate to="/auth/login" />
}
