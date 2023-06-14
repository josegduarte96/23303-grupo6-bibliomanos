import Footer from "./components/Footer"
import LibreriaOnline from "./components/LibroGal2"
import MainLayout from "./components/MainLayout"
import Navbar from "./components/Navbar"
import React, {useState} from 'react'
import Login from "./components/Login"

import firebaseApp from './usuariosBD'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(firebaseApp)


function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioEnBd) =>{ 
    if(usuarioEnBd){
      setUsuario(usuarioEnBd)
    }
    else {
      setUsuario(null)
    }
  })

  return (
    <>
      <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
        <Navbar />
        <section className="py-3 d-flex justify-content-center align-items-center main-content">
          <h1 className="text-center">¿Buscando tu próxima lectura?</h1>
        </section>
        <div className="container- fluid overflow-hidden">
          <div>
            {usuario ? <MainLayout correoUsuario = {/*usuario ?*/ usuario.email /*: null*/}/> : <Login/>}
          </div>
          <LibreriaOnline />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
