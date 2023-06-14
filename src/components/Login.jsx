import { useState } from "react"
// import { Link } from 'react-router-dom';
import firebaseApp from '../usuariosBD'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(firebaseApp)

const Login = () => {
  const [usuario, setUsuario] = useState(false)

  const handlerSubmit = async(e) => {
    e.preventDefault()
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if(usuario) {
      await createUserWithEmailAndPassword(auth, correo, contraseña)
    }
    else {
      await signInWithEmailAndPassword(auth, correo, contraseña)
    }
  }

  return (
    <div>
      {/* Creo el formulario de identificacion */}

      <h1>{usuario ? "Regístrate" : "Inicia sesión"}</h1>
      <form onSubmit= {handlerSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="Ingresar email" id="email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" placeholder="Ingresar Contraseña" id="password" required/>
        </div>
    
        <button className="btn btn-primary" type="submit" to>
          {usuario ? "Regístrate" : "Inicia sesión"}
        </button>
     
      </form>

      <div className="form-group">
        <button className="btn btn-secondary mt-4 form-control" onClick={() => setUsuario(!usuario)}>
          {/*este boton lo dejaria sin el condicional*/}
          {usuario ? "ya tienes una cuenta? Inicia Sesion" : "Olvidaste tu contraseña"}
        </button>
        <button className="btn btn-secondary mt-4 form-control" onClick={() => setUsuario(!usuario)}>
          {usuario ? "ya tienes una cuenta? Inicia Sesion" : "Quiero Registrarme"}
        </button>
      </div>
    </div>
  )
}

export default Login
