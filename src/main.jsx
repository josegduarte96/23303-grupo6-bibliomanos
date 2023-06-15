import ReactDOM from "react-dom/client"
import BibliomanosApp from "./BibliomanosApp"
import React from "react"
import { Provider } from "react-redux"
import store from "./store/store"
import { BrowserRouter } from "react-router-dom"

//Global Styles
import "./styles/styles.scss"

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BibliomanosApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
