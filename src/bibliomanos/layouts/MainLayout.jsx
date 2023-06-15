import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function MainLayout({ children }) {
  return (
    <>
      <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
