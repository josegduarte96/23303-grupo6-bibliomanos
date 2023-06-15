import { Link } from "react-router-dom"
import { AuthLayout } from "../layouts/AuthLayout"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../../store/slices/auth/thunks"
import { Loading } from "../../components/Loading"

const LoginPage = () => {
  const email = useRef()
  const password = useRef()

  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.auth.isLoading)

  const onSubmit = (event) => {
    event.preventDefault()
    console.log()
    dispatch(signIn({ email: email.current.value, password: password.current.value }))
  }

  return (
    <AuthLayout title={isLoading ? "Iniciando sesión" : "Inicia sesión"}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <form onSubmit={onSubmit} className="d-flex flex-column">
            <div className="mb-1">
              <label htmlFor="exampleInputEmail1" className="form-label mb-0">
                Email
              </label>
              <input
                ref={email}
                required
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="exampleInputPassword1" className="form-label  mb-0">
                Contraseña
              </label>
              <input required ref={password} type="password" className="form-control" id="exampleInputPassword1" />
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
        </>
      )}
    </AuthLayout>
  )
}

export default LoginPage
