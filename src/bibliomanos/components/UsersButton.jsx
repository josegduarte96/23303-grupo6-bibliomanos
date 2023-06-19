import { useDispatch, useSelector } from "react-redux"
import { signOut } from "../../store/auth/thunks"

// eslint-disable-next-line react/prop-types
function UsersButton({ className }) {
  const { displayName, email, photoURL } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  return (
    <>
      <div className={"dropstart user-photo ".concat(className)}>
        {/* <button type="button" className="btn btn-dark rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
          <UserIcon className="text-white" style={{ width: "20px", height: "25px" }} />
        </button> */}
        <img
          data-bs-toggle="dropdown"
          aria-expanded="false"
          src={photoURL}
          className="rounded-circle pointer"
          alt="photo-user"
          style={{ width: "auto", height: "45px", fontSize: "10px" }}
        />
        <ul className="dropdown-menu">
          <li className="px-3 fw-semibold">{displayName}</li>
          <li className="px-3 fw-semibold">{email}</li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="px-2">
            <a onClick={() => dispatch(signOut())} className="btn btn-danger d-block" href="#">
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default UsersButton
