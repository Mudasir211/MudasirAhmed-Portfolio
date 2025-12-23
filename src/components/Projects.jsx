'use client'
import { motion } from 'framer-motion'
import PortfolioSection from './PortfolioSection'

const projects = [
  { title: 'Natura (E-commerce)',link: "https://naturapk.store/", desc: 'Next.js, Clerk, MongoDB. Product gallery, cart, checkout UI and admin,A complete fullstack eccomerce website.' },
  { title: 'KiddyLearno',link: "https://www.kiddylearno.online/", desc: 'Educational platform for kids using Next.js, Tailwind and Clerk.' },
  { title: 'MacaroniX',link: "https://macaroni-x.vercel.app/", desc: 'Digital Marketing Agency Website made in Nextjs.' }
  ,{ title: "Bigby's", link: "https://vite-build-bigby-s.vercel.app/", desc: 'Fullstack eccomerce webapp made with react,redux toolkit, expressjs and mongodb.' },
]

export default function Projects() {
  return (
    <section id="projects" className="pt-20">
      <h3 className="text-2xl font-semibold neon">My projects</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {projects.map((p,i)=> (
          <motion.a 
            key={p.title} 
           target='_blank'  href={p.link}
            whileHover={{y:-6}} 
            className="card p-6 rounded-xl block"
          >
            <div className="text-sm text-gray-400">Project</div>
            <div className="text-lg font-semibold neon mt-2">{p.title}</div>
            <div className="mt-3 text-sm text-gray-300">{p.desc}</div>
            <div className="mt-4 text-xs text-gray-400">View repo • Live demo</div>
          </motion.a>
        ))}
      </div>
           
      
    </section>
  )
}
