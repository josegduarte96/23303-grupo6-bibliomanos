import { Link } from "react-router-dom"
import { AuthLayout } from "../layouts/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar sesión">
      <form className="d-flex flex-column">
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
        <a href="#" className="mt-1 text-center">
          ¿Olvidaste tu contraseña?
        </a>
        <Link to="/auth/register" className="mt-1 text-center">
          Quiero Registrarme
        </Link>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
