import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import WhyChooseUs from './components/WhyChooseUs'
import Platforms from './components/Platforms'
import Testimonials from './components/Testimonials'
import Locations from './components/Locations'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Pricing />
        <WhyChooseUs />
        <Platforms />
        <Testimonials />
        <Locations />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
