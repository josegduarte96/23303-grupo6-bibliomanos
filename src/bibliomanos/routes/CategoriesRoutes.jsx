import { Route, Routes } from "react-router-dom"
import { Categories } from "../pages/Categories"

export const CategoriesRoutes = () => {
  return (
    <Routes>
      <Route path="science" element={<Categories>Ciencia</Categories>} />
      <Route path="tecnology" element={<Categories>Tecnologia</Categories>} />
      <Route path="cinema" element={<Categories>Cine</Categories>} />
    </Routes>
  )
}
