import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { BibliomanosRoutes } from "../bibliomanos/routes/BibliomanosRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<BibliomanosRoutes />} />
    </Routes>
  )
}
