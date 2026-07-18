'use client'
import { motion } from 'framer-motion'

export function ExperienceCard() {
  return (
    <div className="glass-panel rounded-[2.5rem] p-8 h-full flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <h3 className="text-xl font-bold font-sans text-white">Experience</h3>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-accent"
        />
      </div>

      <div className="space-y-8 flex-1">
        <div className="relative pl-6 border-l border-zinc-800">
          <div className="absolute w-3 h-3 bg-zinc-950 border-2 border-accent rounded-full -left-[6.5px] top-1"></div>
          <h4 className="font-bold text-lg text-white">DAZN</h4>
          
          <div className="mt-2">
            <p className="text-accent text-sm font-mono mb-1">Associate Software Engineer</p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">Driving engineering strategy and implementation in a fast-paced environment. Transitioned from intern to full-time.</p>
          </div>
          
          <div className="relative mt-4">
            <div className="absolute w-2 h-2 bg-zinc-700 rounded-full -left-[27.5px] top-1.5"></div>
            <p className="text-zinc-300 text-sm font-mono mb-1">Software Developer Intern <span className="text-zinc-600 text-xs ml-2"></span></p>
            <p className="text-sm text-zinc-400 leading-relaxed">Built foundational systems and optimized existing pipelines, collaborating closely with senior engineering teams.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
