import { Navigate, Route, Routes } from "react-router-dom"
import Contacto from "../pages/Contacto"
import { Home } from "../pages/Home"
import { CategoriesRoutes } from "./CategoriesRoutes"

export const BibliomanosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/*" element={<CategoriesRoutes />} />
      <Route path="/contact" element={<Contacto />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
