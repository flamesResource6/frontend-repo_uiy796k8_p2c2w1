import { motion } from 'framer-motion'
import { Bot, Send } from 'lucide-react'

function AISection() {
  return (
    <section className="relative py-24 bg-[#0b132b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Your Intelligent Emergency Assistant</h2>
            <p className="mt-3 text-white/70">Helps classify incidents, detect triggers, and guide response operations with context-aware suggestions.</p>
            <ul className="mt-6 space-y-2 text-white/70 list-disc list-inside">
              <li>Natural language incident intake</li>
              <li>Root-cause hypotheses and mitigation steps</li>
              <li>Protocol-aware, HEICS-aligned guidance</li>
            </ul>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
              <Bot className="text-cyan-300" />
              <p className="text-white/80 text-sm">Disaster Assistant</p>
            </div>
            <div className="h-72 overflow-y-auto space-y-3 p-3">
              {[{
                role: 'assistant', text: 'Detected abnormal O2 pressure trend in ICU. Possible regulator issue.'
              }, { role: 'user', text: 'Create incident and alert respiratory team.' }, { role: 'assistant', text: 'Incident INC-4821 created. Paging on-call respiratory lead and ICU charge nurse.' }].map((m, i) => (
                <div key={i} className={`max-w-[85%] rounded-xl p-3 ${m.role==='assistant' ? 'bg-cyan-400/10 border border-cyan-300/20 text-white' : 'bg-white/10 border border-white/10 text-white/90 ml-auto'}`}>
                  <p className="text-sm">{m.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none" placeholder="Ask the assistant..." />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold inline-flex items-center gap-2"><Send size={16}/> Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISection
