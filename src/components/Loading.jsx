export const Loading = ({ style = {}, spinnerStyle = { width: "3rem", height: "3rem" } }) => {
  return (
    <div style={style} className="container-fluid d-flex justify-content-center align-content-center">
      <div className="align-self-center d-flex flex-column align-content-center">
        <div style={spinnerStyle} className="spinner-border text-primary align-self-center" role="status"></div>
        {/* <p className="">Loading</p> */}
      </div>
    </div>
  )
}
