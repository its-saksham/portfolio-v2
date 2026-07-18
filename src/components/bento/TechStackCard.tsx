'use client'
import { motion } from 'framer-motion'

const allSkills = [
  'Python', 'Next.js', 'PyTorch', 'LLMs', 'RAG', 'NLP', 
  'PostgreSQL', 'Java', 'FastAPI', 'React', 'TypeScript', 
  'Docker', 'Linux', 'Git', 'Raspberry Pi', 'Embedded C', 
  'IoT Architecture', 'Financial Modeling', 'Derivatives Pricing', 
  'Quantitative Risk', 'AWS', 'Node.js', 'Pandas'
]

export function TechStackCard() {
  return (
    <div className="glass-panel rounded-[2.5rem] p-8 flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-xl font-bold font-sans text-white">Capabilities</h3>
        <p className="text-sm text-zinc-400 font-mono mt-2">Comprehensive technical & analytical toolset</p>
      </div>
      
      <div className="flex-1 flex flex-wrap content-start gap-3 pt-2">
        {allSkills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, backgroundColor: '#3b82f6', color: '#ffffff', borderColor: '#3b82f6' }}
            className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-zinc-300 cursor-pointer transition-colors duration-200"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
