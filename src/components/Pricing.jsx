import { motion } from 'framer-motion'

function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-[#0b132b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that fits your hospital or health system.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white/90 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">Hospital</h3>
            <p className="text-white/70">All core features for a single facility.</p>
            <p className="mt-4 text-4xl font-extrabold">$2,499<span className="text-base font-medium text-white/60">/mo</span></p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Unlimited incidents</li>
              <li>Up to 1,000 devices</li>
              <li>On-call scheduling</li>
              <li>AI assistant</li>
            </ul>
            <a href="#demo" className="mt-6 inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold">Request Demo</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-6 bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-white/10 text-white/90 backdrop-blur"
          >
            <div className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full bg-white/10 border border-white/10">Most Popular</div>
            <h3 className="text-xl font-semibold">Cluster</h3>
            <p className="text-white/80">Multi-hospital coordination and shared protocols.</p>
            <p className="mt-4 text-4xl font-extrabold">$6,999<span className="text-base font-medium text-white/60">/mo</span></p>
            <ul className="mt-4 space-y-2 text-white">
              <li>Everything in Hospital</li>
              <li>Unlimited devices</li>
              <li>Inter-facility escalation</li>
              <li>Advanced analytics</li>
            </ul>
            <a href="#demo" className="mt-6 inline-block px-5 py-3 rounded-lg bg-white/10 border border-white/10 text-white font-semibold">Talk to Sales</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
