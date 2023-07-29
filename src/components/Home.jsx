import MensajeBienvenida from "./MensajeBienvenida"
import HeroSection from "./HeroSection"
import MainLayout from "./layouts/MainLayout"

export const Home = () => {
  return (
    <MainLayout>
      <section className="py-3 d-flex justify-content-center align-items-center main-content">
        <h1 className="text-center">¿Buscando tu próxima lectura?</h1>
      </section>
      <div className="container-fluid">
        <HeroSection />
        <MensajeBienvenida />
      </div>
    </MainLayout>
  )
}
