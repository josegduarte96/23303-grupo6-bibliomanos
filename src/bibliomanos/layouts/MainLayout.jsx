import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function MainLayout({ children }) {
  return (
    <>
      <div className="" style={{ maxWidth: "100vw", minHeight: "100vh", height: "100%", overflow: "hidden" }}>
        <Navbar />
        <div className="d-flex flex-column animate__animated animate__fadeInDown animate__faster">{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
