'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#b7bfce] font-libre-baskerville text-xl bg-gradient-to-br from-blueglow to-cyan flex items-center justify-center text-black font-bold">M</div>
        <div>
          <div className="text-xl font-semibold neon">Mudasir Ahmed</div>
          <div className="text-xs text-gray-400">Fullstack Web Developer</div>
        </div>
      </div>

      <div className="hidden md:flex gap-6 items-center text-sm text-gray-300">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact" className="btn-primary">Contact</Link>
      </div>
    </motion.nav>
  )
}
