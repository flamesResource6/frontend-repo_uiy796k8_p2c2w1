import { motion } from 'framer-motion'

const incidents = Array.from({ length: 12 }).map((_, i) => ({
  id: `INC-${1000 + i}`,
  dept: ['ER','ICU','Ward A','Radiology','OR'][i % 5],
  title: ['Power fluctuation','O2 pressure drop','Gas leak detected','Water supply issue','Fire alarm'][i % 5],
  level: ['Low','Medium','High'][i % 3],
  time: `${5 + i}m ago`,
}))

const levelColor = {
  Low: 'bg-emerald-400',
  Medium: 'bg-amber-400',
  High: 'bg-red-500',
}

function LivePreview() {
  return (
    <section id="preview" className="relative py-24 bg-[#0a1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Live Dashboard Preview</h2>
            <p className="mt-3 text-white/70 max-w-xl">A constantly updating stream of hospital incidents with severity indicators, helping teams respond in seconds.</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[{label:'Processed',value:'63,000+'},{label:'Readiness',value:'24/7'},{label:'Faster Response',value:'40%'},{label:'Uptime',value:'99.9%'}].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl p-5 bg-white/5 border border-white/10 text-white/90 backdrop-blur"
                >
                  <p className="text-sm text-white/60">{m.label}</p>
                  <p className="text-2xl font-bold">{m.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -300 }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: 12, ease: 'linear' }}
              className="absolute inset-x-0 top-0"
            >
              {incidents.concat(incidents).map((inc, idx) => (
                <div key={idx} className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full shadow ${levelColor[inc.level]}`}></span>
                    <div>
                      <p className="text-white font-medium">{inc.title}</p>
                      <p className="text-xs text-white/60">{inc.id} • {inc.dept}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[inc.level]} text-black/90`}>{inc.level}</span>
                    <span className="text-xs text-white/60">{inc.time}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LivePreview
