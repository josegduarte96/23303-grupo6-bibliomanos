import { Navigate, Route, Routes } from "react-router-dom"

import { CategoriesRoutes } from "./CategoriesRoutes"
import { Home } from "../../components/Home"
import { DetalleLibro } from "../components/DetalleLibro"
import { Contacto } from "../pages/Contacto"

export const BibliomanosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/*" element={<CategoriesRoutes />} />
      <Route path="/book-details" element={<DetalleLibro />} />
      <Route path="/contact" element={<Contacto />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
