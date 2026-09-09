import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motion'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding border-t border-white/[0.04] bg-surface/30">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div {...fadeInUp}>
            <p className="section-label">Contact</p>
            <h2 className="section-title mb-6">Let&apos;s work together.</h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-12 max-w-md">
              Have a project in mind? Whether it&apos;s a web app, video edit, or motion design — I&apos;d love to hear about it.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-12">
              <motion.a
                href="mailto:eng.sulub@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 group"
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-semibold group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  @
                </motion.div>
                <div>
                  <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-0.5">Email</p>
                  <p className="text-primary text-sm font-medium">eng.sulub@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/252634456789"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 group"
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-semibold group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  W
                </motion.div>
                <div>
                  <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-0.5">WhatsApp</p>
                  <p className="text-primary text-sm font-medium">+252 (61) 4121143</p>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/[0.06]">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-4">Follow me</p>
              <div className="flex gap-3">
                {[
                  { name: 'LinkedIn', url: '#', icon: 'in' },
                  { name: 'GitHub', url: '#', icon: 'gh' },
                  { name: 'Instagram', url: '#', icon: 'ig' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg border border-white/[0.06] flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="card-surface p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field 
                  label="Name" 
                  name="name" 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
                <Field 
                  label="Email" 
                  name="email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <Field 
                label="Subject" 
                name="subject" 
                type="text" 
                required 
                value={formData.subject}
                onChange={handleChange}
              />
              <Field 
                label="Message" 
                name="message" 
                type="textarea" 
                required 
                value={formData.message}
                onChange={handleChange}
              />

              {/* Success Message */}
              {success && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-accent bg-accent/10 border border-accent/30 rounded-lg px-4 py-3 font-medium"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {/* Submit Button */}
              <motion.button 
                type="submit" 
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                    ⟳
                  </motion.span>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              <p className="text-xs text-secondary text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, required, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      {type === 'textarea' ? (
        <motion.textarea 
          id={name} 
          name={name} 
          rows={4} 
          required={required}
          value={value}
          onChange={onChange}
          className="form-input resize-none"
          whileFocus={{ borderColor: 'rgb(59, 130, 246)' }}
        />
      ) : (
        <motion.input 
          id={name} 
          name={name} 
          type={type} 
          required={required}
          value={value}
          onChange={onChange}
          className="form-input"
          whileFocus={{ borderColor: 'rgb(59, 130, 246)' }}
        />
      )}
    </div>
  )
}
