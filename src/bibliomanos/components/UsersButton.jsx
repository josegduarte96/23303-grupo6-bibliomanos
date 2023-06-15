import { UserIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/slices/auth/authSlice"
// eslint-disable-next-line react/prop-types
function UsersButton({ className }) {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  return (
    <>
      <div className={"dropstart px-2 ".concat(className)}>
        <button type="button" className="btn btn-dark rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
          <UserIcon className="text-white" style={{ width: "20px", height: "25px" }} />
        </button>
        <ul style={{ width: "290px" }} className="dropdown-menu">
          <li className="px-3 fw-semibold">{user.displayName}</li>
          <li className="px-3 fw-semibold">{user.email}</li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="px-2">
            <a onClick={() => dispatch(logout())} className="btn btn-danger d-block" href="#">
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default UsersButton
