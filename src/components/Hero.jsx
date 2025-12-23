'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <motion.div initial={{ x: -40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{duration:0.7}}>
        <h1 className="text-4xl lg:text-6xl font-bold neon">Hi, I'm Mudasir Ahmed</h1>
        <p className="mt-4 max-w-xl text-gray-300">
        I build modern, high-performance web applications using Next.js, React, Node.js, and the MERN stack (MongoDB, Express, React, Node.js). I deliver seamless experiences across server-side and client-side rendering, turning ideas into scalable, production-ready applications with clean architecture, accessible design, and exceptional user experience.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="btn-primary">See Projects</a>
          <a href="#contact" className="px-5 py-2 rounded-2xl border border-gray-800">Hire me</a>
        </div>

        <div className="mt-8">
          <div className="text-xs text-gray-400">Core stack</div>
          <div className="mt-2 flex flex-wrap gap-3">
            {['Next.js','React','Node.js','MongoDB','Tailwind CSS','Redux Toolkit'].map(s=> (
              <div key={s} className="px-3 py-1 rounded-full text-xs border text-gray-300">{s}</div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{duration:0.8}} className="relative">
        <div  className="card p-6 rounded-3xl">
          <a target='_blank'  href='https://naturapk.store/' className="w-full h-64 md:h-72 bg-gradient-to-br from-[#021022] to-[#041a2e] rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm text-gray-400">Featured Project</div>
              <div className="text-xl font-semibold neon mt-2">Natura — Next.js E-commerce</div>
              <div className="mt-3b px-2 text-xs text-gray-400">
                A clean, performant shop with Clerk auth and MongoDB — product gallery, cart and checkout flows.
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
