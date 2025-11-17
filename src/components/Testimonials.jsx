import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Dr. Elaine Park',
    role: 'Chief Medical Officer, St. Helena',
    quote: 'DisasterMS reduced our incident response time by nearly half. The visibility is game-changing.'
  },
  {
    name: 'Marcus Nguyen',
    role: 'Emergency Preparedness Director, MercyHealth',
    quote: 'Our mass casualty drills are smoother and more coordinated than ever.'
  },
  {
    name: 'Aisha Patel',
    role: 'Operations Manager, Northside Hospital',
    quote: 'Automated alerting and IoT integration gave us confidence during real outages.'
  }
]

function Testimonials() {
  return (
    <section className="relative py-24 bg-[#0a1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Trusted by Healthcare Leaders</h2>
          <p className="mt-3 text-white/70">Real results from real operations teams.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white/90 backdrop-blur"
            >
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-white/60">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
