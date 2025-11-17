import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Logo from './Logo'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-24 bg-[#0a1020]">
      {/* Watermark logo in the background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
        <Logo size={820} animated={false} />
      </div>

      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 h-[60rem] w-[60rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[50rem] w-[50rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Unified Disaster Management for Hospitals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl"
            >
              Real-time incident tracking, automated alerts, coordinated response workflows, and AI guidance—built for mission-critical hospital operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#demo" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">Request Demo</a>
              <a href="#preview" className="px-5 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/20 backdrop-blur hover:bg-white/15 transition-all">See Live Preview</a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { title: 'Active Incidents', value: '12', tone: 'from-blue-500/30 to-blue-400/10' },
                { title: 'Avg. Response Time', value: '3m 42s', tone: 'from-cyan-400/30 to-cyan-300/10' },
                { title: 'Hospitals Connected', value: '58', tone: 'from-indigo-500/30 to-indigo-400/10' },
                { title: 'Uptime', value: '99.9%', tone: 'from-emerald-400/30 to-emerald-300/10' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className={`rounded-xl p-4 bg-gradient-to-br ${card.tone} border border-white/10 text-white/90 backdrop-blur shadow-xl/30`}
                >
                  <p className="text-xs uppercase tracking-wide text-white/60">{card.title}</p>
                  <p className="text-2xl font-bold mt-1">{card.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[560px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
          >
            {/* Center animated logo above Spline as a hero focal element */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <Logo size={340} animated />
            </div>
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a1020] via-transparent to-transparent opacity-60" />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-4 left-4 right-4 grid sm:grid-cols-3 gap-3"
            >
              {[
                { label: 'ER Fire Alert', value: 'High', color: 'bg-red-500' },
                { label: 'O2 Pressure', value: '68 psi', color: 'bg-cyan-400' },
                { label: 'Power Load', value: '73%', color: 'bg-amber-400' },
              ].map((k, idx) => (
                <div key={idx} className="rounded-xl bg-white/10 border border-white/10 p-3 text-white/90">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{k.label}</span>
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${k.color} text-black/90 font-semibold`}>{k.value}</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className={`h-full ${k.color} w-3/4`} />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
