import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, serviceCardVariants } from '../utils/motion'
import { services } from '../data/projects'

export default function Services() {
  return (
    <section id="services" className="section-padding border-t border-white/[0.04]">
      <div className="container-content">
        {/* Header */}
        <motion.div {...fadeInUp} className="max-w-3xl mb-16 md:mb-20">
          <p className="section-label">Services</p>
          <h2 className="section-title mb-6">What I can help you build.</h2>
          <p className="text-secondary text-lg md:text-lg leading-relaxed">
            From concept to launch, I provide comprehensive services to bring your vision to life with precision, creativity, and modern technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              whileHover="hover"
              className="card-surface p-8 flex flex-col group hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
            >
              {/* Number Badge */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300" />
              
              <motion.span 
                className="text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-300 font-display mb-4 relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                {service.number}
              </motion.span>

              <h3 className="font-display font-bold text-primary text-xl mb-6 tracking-tight group-hover:text-accent transition-colors duration-300 relative z-10">
                {service.title}
              </h3>

              {/* Service Items */}
              <ul className="space-y-3 mb-8 flex-1 relative z-10">
                {service.items.map((item) => (
                  <motion.li 
                    key={item} 
                    className="flex items-start gap-3 text-secondary text-sm leading-relaxed group-hover:text-primary/80 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <motion.span 
                      className="text-accent font-bold mt-0.5 shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a 
                href="#contact" 
                className="btn-secondary w-full text-center !text-sm relative z-10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>

              {/* Background Accent */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          {...fadeInUp}
          className="mt-20 pt-12 border-t border-white/[0.04]"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-bold text-primary text-lg mb-4">Why work with me?</h3>
              <ul className="space-y-3 text-secondary text-sm">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Dedicated project manager throughout development</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Production-ready, performant code</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Transparent communication & regular updates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Post-launch support & maintenance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-primary text-lg mb-4">Timeline & Process</h3>
              <ul className="space-y-3 text-secondary text-sm">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">01</span>
                  <span>Discovery & Planning (1-2 weeks)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">02</span>
                  <span>Design & Prototyping (2-3 weeks)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">03</span>
                  <span>Development & Implementation (4-8 weeks)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">04</span>
                  <span>Testing & Launch (1-2 weeks)</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
