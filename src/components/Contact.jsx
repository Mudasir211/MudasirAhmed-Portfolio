'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaPhoneAlt, FaGithub } from 'react-icons/fa'
import { SiFiverr, SiUpwork, SiFreelancer } from 'react-icons/si'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError('')

    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed')

      setSuccess(true)
      form.reset()
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12 neon"
      >
        Get in Touch
      </motion.h2>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border border-blue-500/30 bg-black/40 backdrop-blur-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Let’s Collaborate</h3>
          <p className="text-gray-300 text-sm mb-6">
            Have a project in mind or want to work together? Reach out through any platform below.
          </p>

          <div className="space-y-4 text-gray-300">
            <div>
              <div className="text-sm text-gray-400">Email</div>
              <div className="text-lg font-semibold neon">
                mudasir8482289@gmail.com
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-400">Phone / WhatsApp</div>
              <div className="flex items-center gap-2 text-lg font-semibold">
                <FaPhoneAlt className="text-blue-400" />
                <span>+92 322 3173020</span>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-8">
            <div className="text-sm text-gray-400 mb-3">Connect with me</div>
            <div className="flex flex-wrap gap-4 text-2xl">
              {/* <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a> */}
              <a href="https://wa.me/923223173020" target="_blank" rel="noreferrer" className="hover:text-green-500 transition"><FaWhatsapp /></a>
              <a href="https://github.com/Mudasir211" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mudasir-ahmed-22648b38a/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaLinkedin /></a>
              <a href="https://www.fiverr.com/s/5rZpjj7" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition"><SiFiverr /></a>
              <a href="https://www.upwork.com/freelancers/~019c2a3627f2d829f0?mp_source=share" target="_blank" rel="noreferrer" className="hover:text-green-400 transition"><SiUpwork /></a>
              {/* <a href="https://freelancer.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition"><SiFreelancer /></a> */}
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl border border-blue-500/30 bg-black/40 backdrop-blur-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-lg mb-3 bg-transparent border border-gray-700 focus:border-blue-500 outline-none text-sm"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-lg mb-3 bg-transparent border border-gray-700 focus:border-blue-500 outline-none text-sm"
          />

          <input
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-lg mb-3 bg-transparent border border-gray-700 focus:border-blue-500 outline-none text-sm"
          />

          <textarea
            name="message"
            required
            placeholder="Message"
            className="w-full p-3 rounded-lg mb-4 bg-transparent border border-gray-700 focus:border-blue-500 outline-none text-sm h-32"
          />

          <button disabled={loading} className="btn-primary w-full py-2">
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {success && (
            <p className="mt-4 text-green-400 text-sm">
              ✅ Message sent successfully. I’ll get back to you soon!
            </p>
          )}

          {error && (
            <p className="mt-4 text-red-400 text-sm">
              ❌ {error}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
