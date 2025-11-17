import { motion } from 'framer-motion'
import { Signal, Radio, MessageCircle, Mail, Network } from 'lucide-react'

const logos = [
  { icon: Signal, label: 'IoT Sensors' },
  { icon: Network, label: 'HL7 / FHIR' },
  { icon: Radio, label: 'Paging' },
  { icon: MessageCircle, label: 'WhatsApp' },
  { icon: Mail, label: 'Email' },
]

function Integrations() {
  return (
    <section className="relative py-24 bg-[#0a1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Integrations</h2>
          <p className="mt-3 text-white/70">Connect with the systems you already use.</p>
        </div>

        <div className="mt-12 relative">
          <div className="absolute inset-0 mx-auto max-w-3xl h-40 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-indigo-500/10 rounded-full blur-3xl" />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {logos.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl p-6 bg-white/5 border border-white/10 text-white/80 backdrop-blur flex flex-col items-center gap-3"
              >
                <l.icon className="text-cyan-300" />
                <span className="text-sm">{l.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
