import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { BibliomanosRoutes } from "../bibliomanos/routes/BibliomanosRoutes"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <BibliomanosRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}
