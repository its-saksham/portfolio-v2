'use client'
import { ArrowUpRight, TerminalWindow } from '@phosphor-icons/react/dist/ssr'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { TechStackCard } from '@/components/bento/TechStackCard'
import { ExperienceCard } from '@/components/bento/ExperienceCard'
import { ConsultingCard } from '@/components/bento/ConsultingCard'
import { BackgroundWrapper } from '@/components/canvas/BackgroundWrapper'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-white">
      <BackgroundWrapper />
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-24 md:py-32 flex flex-col gap-40">
        
        {/* Section 1: Hero */}
        <section className="flex flex-col items-start min-h-[75vh] justify-center pt-20">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
            <TerminalWindow className="text-4xl text-accent" />
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.9] mb-8 text-white mix-blend-difference">
            Saksham <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Vashisht.</span>
          </h1>
          <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-[55ch] mb-12 font-sans">
            Software Engineer bridging the gap between complex machine learning models, embedded hardware systems, and high-level quantitative strategy.
          </p>
          <MagneticButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>Initiate Contact</span>
            <ArrowUpRight weight="bold" />
          </MagneticButton>
        </section>

        {/* Section 2: Experience & Quant */}
        <section>
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter text-white">Experience.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
            <ExperienceCard />
            <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-sans mb-4 text-white">Quantitative Analysis</h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-[45ch]">
                  Extensive background in financial derivatives, credit analysis, and algorithm development. Applying rigorous mathematical modeling to real-world scenarios.
                </p>
              </div>
              <div className="mt-8 flex h-24 w-24 rounded-full bg-white/5 items-center justify-center border border-white/10 shrink-0 self-end">
                <span className="font-mono text-accent text-4xl">Σ</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Technical & Consulting */}
        <section>
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter text-white">Capabilities.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px]">
            <TechStackCard />
            <ConsultingCard />
          </div>
        </section>

        {/* Section 4: Contact */}
        <section id="contact" className="min-h-[60vh] flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter text-white">Initiate Contact.</h2>
          
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column: Typography / Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Let's build <br/> <span className="text-accent">something exceptional.</span>
                </h3>
                <p className="text-zinc-400 font-sans max-w-md leading-relaxed">
                  Whether you have a specific project in mind, need quantitative analysis, or want to build robust embedded systems, I'm always open to discussing new opportunities.
                </p>
              </div>
              
              <div className="mt-12">
                <p className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-wider">Direct lines</p>
                <div className="flex flex-col gap-3">
                  <a href="mailto:vashishtsaksham221@gmail.com" className="text-white hover:text-accent font-medium transition-colors text-lg">vashishtsaksham221@gmail.com</a>
                  <a href="https://www.linkedin.com/in/saksham-vashisht-142b34228/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent font-medium transition-colors text-lg">
                    LinkedIn Profile ↗
                  </a>
                  <a href="https://github.com/its-saksham" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent font-medium transition-colors text-lg">
                    GitHub Profile ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Form submission goes here!"); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-mono text-zinc-400">Name</label>
                  <input type="text" id="name" className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors shadow-inner" placeholder="Your Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-mono text-zinc-400">Email</label>
                  <input type="email" id="email" className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors shadow-inner" placeholder="you@domain.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-zinc-400">Message</label>
                <textarea id="message" rows={5} className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none shadow-inner" placeholder="How can we work together?"></textarea>
              </div>
              <button type="submit" className="mt-2 bg-white text-black hover:bg-zinc-200 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 w-full text-lg">
                Send Message
                <ArrowUpRight weight="bold" />
              </button>
            </form>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>© 2026 Saksham Vashisht. All rights reserved.</p>
          <div className="flex gap-6 font-mono">
            <a href="https://www.linkedin.com/in/saksham-vashisht-142b34228/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://github.com/its-saksham" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href="#" className="hover:text-accent transition-colors">Resume</a>
          </div>
        </footer>

      </div>
    </main>
  )
}
