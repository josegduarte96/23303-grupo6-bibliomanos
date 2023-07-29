import { Link } from "react-router-dom"
import { AuthLayout } from "../layouts/AuthLayout"
import { useDispatch, useSelector } from "react-redux"
import { registerNewUser } from "../../store/auth/thunks"
import { useForm } from "../../hooks/useForm"
import { useMemo } from "react"
import { AUTH_STATUS } from "../../store/auth/authSlice"

const RegisterPage = () => {
  const { onInputChange, nombre, email, password } = useForm({
    nombre: "",
    email: "",
    password: "",
  })
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state) => state.auth)
  const isRegisteringUser = useMemo(() => status == AUTH_STATUS.CHECKING, [status])

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(registerNewUser({ email, password, nombre }))
  }

  return (
    <AuthLayout title={"Registrar un usuario"}>
      <form onSubmit={onSubmit} className="d-flex flex-column animate__animated animate__fadeIn">
        <div className="mb-1">
          <label htmlFor="inputName" className="form-label mb-0">
            Nombre
          </label>
          <input
            name="nombre"
            value={nombre}
            onChange={onInputChange}
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
            min="6"
            name="password"
            value={password}
            onChange={onInputChange}
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button disabled={isRegisteringUser} type="submit" className="btn btn-primary my-1">
          Registrarse
        </button>
      </form>
      {errorMessage ? <p className="text-danger fw-bold text-center">{errorMessage}</p> : null}
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
