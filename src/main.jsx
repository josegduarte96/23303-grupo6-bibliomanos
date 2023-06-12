import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store.js"
import Login from "./components/Login.jsx"
import Contacto from "./components/Contacto.jsx"
//Global Styles
import "./styles/styles.scss"

// Router Config
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
])

ReactDOM.createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
