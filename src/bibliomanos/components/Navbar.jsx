import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import UsersButton from "./UsersButton"
import logo from "../../assets/logoempty.png"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md fs-5 navbar-dark bg-primary"
      style={{ boxShadow: "3px 3px 5px rgba(0, 0, 0, .4)" }}>
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <img className="img-fluid" src={logo} style={{ width: "50px", height: "45px" }} />
          <p className="text-center m-0 mx-1 title text-secondary">Bibliomanos</p>
        </div>
        {/* Navbar Content */}
        <div className="collapse navbar-collapse justify-content-end px-3 py-3" id="navbarSupportedContent">
          <ul className="navbar-nav flex-grow-1 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/categories/science">
                    Ciencia
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/tecnology">
                    Tecnología
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/cinema">
                    Cine
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="#">
                Contacto
              </a> */}
              {
                <Link className="nav-link" to={"/contact"}>
                  Contacto
                </Link>
              }
            </li>
          </ul>
          <form className="d-flex mx-1" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar un libro" aria-label="Search" />
            <button className="btn btn-outline-warning" type="submit">
              <MagnifyingGlassIcon className="text-white" style={{ width: "20px", height: "25px" }} />
            </button>
          </form>
        </div>
        {/* Btn menu mobile */}
        <div className="d-inline-flex">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <UsersButton className={"d-inline"} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
