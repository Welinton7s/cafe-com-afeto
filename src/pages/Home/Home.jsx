import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/CampCarousel/CampCarousel'
import heroImage from '../../assets/images/hero.jpg'
import './Home.css'



function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
            <div className="hero-container">

                <div className="hero-text">
                    <h1>Sua doação transforma vidas.</h1>

                    <p>
                        Um gesto de solidariedade pode levar alimento,
                        esperança e dignidade a quem mais precisa.
                    </p>
                    <div className='hero-escolha'>
                        <button className='doar'>Fazer Doação</button>
                        <button className='volun'>Ser Voluntario</button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Ação solidária" />
                </div>

            </div>
        </section>
        <Carousel/>
      </main>
      <Footer/>
    </>
  )
}

export default Home
