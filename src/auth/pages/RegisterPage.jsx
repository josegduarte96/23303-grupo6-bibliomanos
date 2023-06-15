import { Link } from "react-router-dom"
import { AuthLayout } from "../layouts/AuthLayout"

const RegisterPage = () => {
  return (
    <AuthLayout title="Registro de usuario">
      <form className="d-flex flex-column">
        <div className="mb-1">
          <label htmlFor="inputName" className="form-label mb-0">
            Nombre
          </label>
          <input type="text" className="form-control" id="inputName" aria-describedby="inputName" />
        </div>
        <div className="mb-1">
          <label htmlFor="exampleInputEmail1" className="form-label mb-0">
            Email
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-1">
          <label htmlFor="exampleInputPassword1" className="form-label  mb-0">
            Contraseña
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary my-1">
          Ingresar
        </button>
      </form>

      <div className="form-group d-flex flex-column">
        <span className="mt-1 text-center">¿Ya tienes una cuenta?</span>
        <Link to="auth/login" className="mt-1 text-center">
          Inicia sesión
        </Link>
      </div>
    </AuthLayout>
  )
}

export default RegisterPage
