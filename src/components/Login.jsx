import { useState } from "react"

const Login = () => {
  const [usuario, setUsuario] = useState(false)

  return (
    <div>
      {/* Creo el formulario de identificacion */}

      <h1>{usuario ? "registrate" : "Inicia Sesion"}</h1>
      <form>
        <div className="px-5 mb-3">
          <label className="form-label">Usuario o correo electronico </label>
          <input type="email" className="form-control" placeholder="Ingresar email" id="email" />
        </div>

        <div className="px-5 mb-3">
          <label className="form-label">Contraseña</label>
          <input type="email" className="form-control" placeholder="Ingresar Contraseña" id="password" />
        </div>

        <button className="btn btn-primary" type="submit">
          {usuario ? "registrate" : "inicia sesion"}
        </button>
      </form>

      <div className="p-5 form-group" >
        <button className="btn btn-secondary mt-4 form-control" onClick={() => setUsuario(!usuario)}>
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
