import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { navLinks } from '../data/projects'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.04] py-12 md:py-16">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12 pb-12 border-b border-white/[0.04]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <a href="#home" className="font-display font-bold text-primary text-lg tracking-tight hover:text-accent transition-colors duration-200 inline-flex gap-1">
              ENG<span className="text-accent text-xl">●</span>SULUB
            </a>
            <p className="text-secondary text-sm mt-4 max-w-xs leading-relaxed">
              Fullstack developer, video editor & motion designer creating digital experiences that captivate.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1"
          >
            <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-4">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-secondary text-sm hover:text-accent transition-colors duration-200 relative inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-4">Connect</p>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:eng.sulub@gmail.com"
                  className="text-secondary text-sm hover:text-accent transition-colors duration-200"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/252634456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-sm hover:text-accent transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-secondary text-sm hover:text-accent transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-4">Social</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-transform duration-200 ease-out hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-transform duration-200 ease-out hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-transform duration-200 ease-out hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-transform duration-200 ease-out hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/252XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-transform duration-200 ease-out hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-secondary/60 text-xs">
            © {currentYear} ENG SULUB. All rights reserved.
          </p>
          <p className="text-secondary/60 text-xs">
            Designed & built with <span className="text-accent">React</span>, <span className="text-accent">Tailwind</span> & <span className="text-accent">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
