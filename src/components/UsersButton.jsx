import { UserIcon } from "@heroicons/react/24/solid"
// eslint-disable-next-line react/prop-types
function UsersButton({ className }) {
  console.log(className)
  return (
    <>
      <div className={"dropstart px-2 ".concat(className)}>
        <button
          type="button"
          className="btn btn-dark rounded-pill"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <UserIcon className="text-white" style={{ width: "20px", height: "25px" }} />
        </button>
        <ul className="dropdown-menu">
          <li className="px-3 fw-semibold">Jose Duarte</li>
          <li className="px-3 fw-semibold">jose.duarte@email.com</li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="px-2">
            <a className="btn btn-danger d-block" href="#">
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default UsersButton
