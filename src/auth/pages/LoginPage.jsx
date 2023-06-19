import { useMemo } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AuthLayout } from "../layouts/AuthLayout"
import { signIn, signInGoogle } from "../../store/auth/thunks"
import { useForm } from "../../hooks/useForm"
import { AUTH_STATUS } from "../../store/auth/authSlice"

const LoginPage = () => {
  const { onInputChange, email, password } = useForm({
    email: "jose@gmail.com",
    password: "123456",
  })

  const { status, errorMessage } = useSelector((state) => state.auth)
  const isAuthenticating = useMemo(() => status == AUTH_STATUS.CHECKING, [status])

  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(signIn({ email, password }))
  }

  const startGoogleSignIn = () => {
    dispatch(signInGoogle())
  }

  return (
    <AuthLayout title={"Inicia sesión"}>
      <form onSubmit={onSubmit} className="d-flex flex-column">
        <div className="mb-1">
          <label htmlFor="exampleInputEmail1" className="form-label mb-0">
            Email
          </label>
          <input
            name="email"
            value={email}
            onChange={onInputChange}
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
            required
            name="password"
            value={password}
            onChange={onInputChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button disabled={isAuthenticating} type="submit" className="btn btn-primary my-1">
          Ingresar
        </button>
      </form>
      <button
        disabled={isAuthenticating}
        onClick={() => startGoogleSignIn()}
        className="btn btn-outline-secondary text-black my-1">
        <span className="mx-2">Ingresar con Google</span>
        <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
      </button>
      {errorMessage ? <p className="text-danger fw-bold text-center">{errorMessage}</p> : null}
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
