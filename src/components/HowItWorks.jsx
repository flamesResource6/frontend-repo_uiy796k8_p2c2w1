import { motion } from 'framer-motion'

const steps = [
  { id: 1, title: 'Detect', desc: 'Ingest signals from IoT, systems, and human reports.' },
  { id: 2, title: 'Classify', desc: 'Smart categorization and severity scoring.' },
  { id: 3, title: 'Alert', desc: 'Automated multi-channel notifications and escalation.' },
  { id: 4, title: 'Respond', desc: 'Assign crews, run protocols, and track SLAs in real time.' },
  { id: 5, title: 'Resolve', desc: 'Close loop with root-cause analysis and reporting.' },
]

function HowItWorks() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a1020] to-[#0b132b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-3 text-white/70">From signal to action in seconds.</p>
        </div>

        <ol className="mt-12 relative border-l border-white/10 pl-6 space-y-8">
          {steps.map((s, i) => (
            <motion.li
              key={s.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" />
              <div className="rounded-xl p-6 bg-white/5 border border-white/10 text-white/90 backdrop-blur">
                <p className="text-sm text-white/60">Step {s.id}</p>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-1 text-white/70">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
