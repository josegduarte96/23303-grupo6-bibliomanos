import { Link } from "react-router-dom"
import { AuthLayout } from "../layouts/AuthLayout"
import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import { registerNewUser } from "../../store/slices/auth/thunks"
import { Loading } from "../../components/Loading"

const RegisterPage = () => {
  const email = useRef()
  const password = useRef()
  const nombre = useRef()

  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.auth.isLoading)

  const onSubmit = (event) => {
    event.preventDefault()
    if (password.current.value.length < 6) return
    dispatch(
      registerNewUser({ email: email.current.value, password: password.current.value, nombre: nombre.current.value })
    )
  }

  return (
    <AuthLayout title={isLoading ? "Aguarde un momento.." : "Registrar un usuario"}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <form onSubmit={onSubmit} className="d-flex flex-column">
            <div className="mb-1">
              <label htmlFor="inputName" className="form-label mb-0">
                Nombre
              </label>
              <input
                ref={nombre}
                required
                type="text"
                className="form-control"
                id="inputName"
                aria-describedby="inputName"
              />
            </div>
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
              <input
                min="6"
                ref={password}
                required
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary my-1">
              Registrarse
            </button>
          </form>

          <div className="form-group d-flex flex-column">
            <span className="mt-1 text-center">¿Ya tienes una cuenta?</span>
            <Link to="auth/login" className="mt-1 text-center">
              Inicia sesión
            </Link>
          </div>
        </>
      )}
    </AuthLayout>
  )
}

export default RegisterPage
