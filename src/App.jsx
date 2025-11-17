import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LivePreview from './components/LivePreview'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import AISection from './components/AISection'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a1020]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LivePreview />
        <HowItWorks />
        <UseCases />
        <AISection />
        <Integrations />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
