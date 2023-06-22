import MainLayout from "../../components/layouts/MainLayout"

export const AuthLayout = ({ children, title }) => {
  return (
    <MainLayout>
      <div className="row me-0 justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="card shadow-lg p-3 col-10 col-sm-6 col-md-4">
          <h1 className="text-center">{title}</h1>
          {children}
        </div>
      </div>
    </MainLayout>
  )
}
