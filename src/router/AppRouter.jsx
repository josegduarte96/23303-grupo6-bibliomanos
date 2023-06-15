import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { BibliomanosRoutes } from "../bibliomanos/routes/BibliomanosRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <BibliomanosRoutes />
          </PrivateRoute>
        }
      />

      <Route
        path="/auth/*"
        element={
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        }
      />
    </Routes>
  )
}
