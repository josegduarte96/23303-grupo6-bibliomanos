import Footer from "./components/Footer"
import LibreriaOnline from "./components/LibroGal2"
import MainLayout from "./components/MainLayout"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <section className="py-3 d-flex justify-content-center align-items-center main-content">
          <h1 className="text-center">¿Buscando tu próxima lectura?</h1>
        </section>
        <div className="container-fluid">
          <MainLayout />
        </div>
        <LibreriaOnline />
        <Footer />
      </div>
    </>
  )
}

export default App
