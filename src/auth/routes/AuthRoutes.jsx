import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import { Home } from "../../components/Home"

export const AuthRoutes = () => {
  return (
    <Routes>
      {/* Ruta Home para users no autenticados */}
      <Route path="" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
