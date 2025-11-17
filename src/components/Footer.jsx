function Footer() {
  return (
    <footer id="contact" className="bg-[#0a1020] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-400 to-cyan-300" />
          <span className="text-white/80 text-sm">© {new Date().getFullYear()} DisasterMS</span>
        </div>
        <div className="text-white/60 text-sm">Enterprise-grade disaster management for hospitals.</div>
      </div>
    </footer>
  )
}

export default Footer
