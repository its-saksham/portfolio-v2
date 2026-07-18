'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Graph } from '@phosphor-icons/react/dist/ssr'

const strategySkills = [
  'Embedded Systems & IoT',
  'Financial Modeling & Valuation',
  'Raspberry Pi Integration',
  'Quantitative Risk Analysis',
  'Hardware-Software Bridging',
  'Investment Banking Strategy',
  'Stakeholder Management'
]

export function ConsultingCard() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentSkill = strategySkills[index]
    let timer: NodeJS.Timeout

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex(charIndex - 1), 30)
      } else {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % strategySkills.length)
      }
    } else {
      if (charIndex < currentSkill.length) {
        timer = setTimeout(() => setCharIndex(charIndex + 1), 60)
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000)
      }
    }

    setText(currentSkill.substring(0, charIndex))
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, index])

  return (
    <div className="glass-panel rounded-[2.5rem] p-8 h-full flex flex-col justify-between">
      <div>
        <Graph className="text-3xl text-zinc-400 mb-6" />
        <h3 className="text-xl font-bold font-sans mb-2 text-white">Strategic Integration</h3>
        <p className="text-sm text-zinc-400">Bridging the gap between software engineering, embedded hardware, and quantitative finance.</p>
      </div>
      
      <div className="mt-8 bg-black/40 border border-white/10 p-4 rounded-2xl font-mono text-sm h-14 flex items-center shadow-inner">
        <span className="text-accent mr-2">&gt;</span>
        <span className="text-zinc-300">{text}</span>
        <motion.span 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-accent ml-1"
        />
      </div>
    </div>
  )
}
