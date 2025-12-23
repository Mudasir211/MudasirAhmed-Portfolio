'use client'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML' },{ name: 'CSS' },{ name: 'JavaScript' },{ name: 'Tailwind CSS' },
  { name: 'React' },{ name: 'Next.js' },{ name: 'Node.js' },{ name: 'Redux Toolkit' },
  { name: 'MongoDB' }
]

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h3 className="text-2xl font-semibold neon"> My Core Skills & Expertise</h3>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((s,i)=> (
          <motion.div 
            key={s.name} 
            whileHover={{ scale:1.03 }} 
            initial={{opacity:0, y:6}} 
            animate={{opacity:1, y:0}} 
            transition={{delay: i*0.05}} 
            className="card p-4 rounded-lg flex items-center justify-between"
          >
            <div className="text-sm text-gray-300">{s.name}</div>
            <div className="text-xs text-gray-400">Pro</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
