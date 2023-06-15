import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {
  const userLogged = useSelector((state) => state.auth.user)
  return userLogged ? <Navigate to="/" /> : children
}
