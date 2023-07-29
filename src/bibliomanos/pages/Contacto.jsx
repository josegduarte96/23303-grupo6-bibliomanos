import { useState } from "react"
import MainLayout from "../../components/layouts/MainLayout"

export function Contacto() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes realizar el envío del formulario o realizar otras acciones con los datos
    console.log("Nombre:", name)
    console.log("Email:", email)
    console.log("Mensaje:", message)
    // Luego puedes restablecer los valores del formulario
    setName("")
    setEmail("")
    setMessage("")
  }
  return (
    <MainLayout>
      <div className="container-fluid row align-items-center justify-content-center" style={{ height: "60vh" }}>
        <form onSubmit={handleSubmit} className="col-12 col-md-6 shadow-sm rounded p-3">
          <h4 className="text-center">¡Dejanos tu mensaje!</h4>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Escribe aca tu mensaje
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </MainLayout>
  )
}
