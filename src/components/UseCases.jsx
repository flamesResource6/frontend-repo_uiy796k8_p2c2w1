import { motion } from 'framer-motion'

const cases = [
  'Gas leaks','Power failures','Oxygen drops','Fire alerts','Water supply issues','Medical equipment failures','Mass casualty events'
]

function UseCases() {
  return (
    <section className="relative py-24 bg-[#0b132b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Hospital Use-Cases</h2>
          <p className="mt-3 text-white/70">Critical events we handle out of the box.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl p-5 bg-white/5 border border-white/10 text-white/90 backdrop-blur"
            >
              <p className="font-medium">{c}</p>
              <p className="text-sm text-white/60 mt-1">Configured protocols, playbooks and alerting rules.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
