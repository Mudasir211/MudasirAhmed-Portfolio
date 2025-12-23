'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-12">
      <motion.div initial={{ y: 20, opacity:0 }} whileInView={{ y:0, opacity:1 }} transition={{duration:0.6}}>
        <h2 className="text-2xl font-semibold neon">About me</h2>
        <p className="mt-6 text-gray-300 max-w-3xl">
        I’m Mudasir Ahmed, a fullstack web developer passionate about building modern, scalable, and high-performance web applications. I specialize in JavaScript-based technologies, including Next.js, React, Node.js, and the MERN stack, creating solutions that seamlessly combine server-side rendering (SSR) and client-side interactivity.
<br/>
<br/>
I focus on component-driven, maintainable architectures, writing clean and efficient code while delivering accessible, responsive, and user-friendly experiences. I thrive on turning ideas into production-ready applications that not only meet business goals but also provide a smooth developer and user experience.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="card p-4 rounded-xl">
            <div className="text-sm text-gray-400">Experience</div>
            <div className="text-xl font-semibold neon mt-2">3+ years</div>
          </div>
          <div className="card p-4 rounded-xl">
            <div className="text-sm text-gray-400">Location</div>
            <div className="text-xl font-semibold neon mt-2">Pakistan</div>
          </div>
          <div className="card p-4 rounded-xl">
            <div className="text-sm text-gray-400">Open to</div>
            <div className="text-xl font-semibold neon mt-2">Freelance & Full-time</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
