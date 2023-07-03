import Footer from "../Footer"
import Navbar from "../Navbar"

function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1, maxWidth: "100vw", overflow: "hidden", marginTop: "70px" }}>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
