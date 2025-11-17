import { motion } from 'framer-motion'
import { AlarmClock, Activity, BellRing, Users, Cpu, ClipboardCheck, Bot, Map } from 'lucide-react'

const features = [
  { icon: AlarmClock, title: 'Incident Reporting & Classification', desc: 'Standardized intake with severity scoring and smart triage.' },
  { icon: Activity, title: 'Real-Time Monitoring Dashboard', desc: 'Live tiles for ER, ICU, O2, power, water, fire and security.' },
  { icon: BellRing, title: 'Automated Alerts & Escalation', desc: 'Rules-based paging, SMS, WhatsApp, email, and voice.' },
  { icon: Users, title: 'Teams & Crews Management', desc: 'Assign roles, on-call rotations, and mutual-aid coordination.' },
  { icon: Cpu, title: 'IoT Sensor Integration', desc: 'Ingest telemetry: gas, oxygen, power, water, temperature, door sensors.' },
  { icon: ClipboardCheck, title: 'Action Cards & Protocols', desc: 'Pre-built playbooks and ICS/HEICS compliant checklists.' },
  { icon: Bot, title: 'AI-powered Disaster Assistant', desc: 'Suggests classification, root causes, and next best actions.' },
  { icon: Map, title: 'Related Incidents Mapping', desc: 'Spatial and system dependency graphs for cascading failures.' },
]

function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-[#0a1020] to-[#0a1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Key Capabilities</h2>
          <p className="mt-3 text-white/70">Built for hospital resilience and emergency operations.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.03 }}
              className="group relative rounded-2xl p-5 bg-white/5 border border-white/10 text-white/90 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-white/10">
                  <f.icon className="text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
