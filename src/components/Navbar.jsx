import { Menu, PhoneCall } from 'lucide-react'
import Logo from './Logo'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl/80 bg-[#0a1020]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 grid place-items-center">
            <Logo size={28} animated={false} />
          </div>
          <span className="text-white font-semibold tracking-tight">DisasterMS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#preview">Live Preview</a>
          <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-white transition-colors" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#demo" className="hidden sm:flex items-center gap-2 text-xs font-medium text-white/90 px-3 py-1.5 rounded-md border border-white/15 hover:border-white/25 transition-colors">
            <PhoneCall size={16} /> Request Demo
          </a>
          <button className="md:hidden text-white/80 hover:text-white" aria-label="Menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
