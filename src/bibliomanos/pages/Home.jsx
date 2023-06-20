import MainLayout from "../layouts/MainLayout"
import HeroSection from "../components/HeroSection"

export const Home = () => {
  return (
    <MainLayout>
      <section className="py-3 d-flex justify-content-center align-items-center main-content">
        <h1 className="text-center">¿Buscando tu próxima lectura?</h1>
      </section>
      <div className="container-sm">
        <HeroSection />
      </div>
    </MainLayout>
  )
}
