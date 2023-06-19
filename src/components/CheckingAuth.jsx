export const CheckingAuth = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="container-fluid d-flex justify-content-center align-content-center">
      <div className="align-self-center d-flex flex-column align-content-center">
        <div style={{ width: "3rem", height: "3rem" }} className="spinner-border text-primary" role="status"></div>
        <p className="">Loading</p>
      </div>
    </div>
  )
}
