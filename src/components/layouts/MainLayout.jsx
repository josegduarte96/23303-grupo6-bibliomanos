import Footer from "../Footer"
import Navbar from "../Navbar"

function MainLayout({ children }) {
  return (
    <>
      <div className="" style={{ maxWidth: "100vw", minHeight: "100vh", height: "100%", overflow: "hidden" }}>
        <Navbar />
        <div className="d-flex flex-column animate__animated animate__fadeInRight animate__faster h-100">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
