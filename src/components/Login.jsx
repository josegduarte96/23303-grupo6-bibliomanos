import { Link } from "react-router-dom"

function Login() {
  return (
    <>
      <div>
        <p className="h1">Login Page</p>
        {<Link to={"/"}>Volver a inicio..</Link>}
      </div>
    </>
  )
}

export default Login
