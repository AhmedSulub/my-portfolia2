import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import { heroStagger, heroItem, typewriterVariants } from '../utils/motion'

const TypewriterLoop = memo(({ phrases = [], typingSpeed = 60, pause = 1200 }) => {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let timeout
    const current = phrases[index % phrases.length]

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), typingSpeed / 2)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, phrases, typingSpeed, pause])

  return (
    <span style={{ display: 'inline-block', minWidth: '20ch', minHeight: '1.2em', overflow: 'hidden' }} aria-hidden>
      <span className="border-r-2 border-accent pr-2" style={{ display: 'inline-block' }}>{displayed}</span>
    </span>
  )
})

const ProfileImage = memo(function ProfileImage() {
  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-transparent p-1">
      <div className="rounded-full overflow-hidden bg-surface p-1 h-full w-full">
        <img
          src="/image_07dedf.jpg"
          alt="ENG SULUB"
          className="w-full h-full rounded-full object-cover object-center"
          style={{ display: 'block' }}
        />
      </div>
    </div>
  )
})

export default function Hero() {
  const typePhrases = [
    'Experiences.',
    'Web Applications.',
    'Creative Motion.',
    'Modern Brands.',
    'Video Content.',
  ]

  return (
    <section id="home" className="section-padding min-h-[80vh] flex items-center">
      <div className="container-content w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={heroStagger}
            initial="initial"
            animate="animate"
            className="order-2 lg:order-1 space-y-6"
          >
            <motion.p variants={heroItem} className="section-label">
              Available for freelance & projects
            </motion.p>

            <motion.div variants={heroItem} className="space-y-2">
              <h2 className="font-display font-semibold text-primary text-[42px] md:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.02em]">
                Creative Engineer
              </h2>

              <h1 className="font-display font-bold text-primary text-[42px] md:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.02em]">
                Building Digital&nbsp;
                <motion.span
                  className="text-accent"
                  variants={typewriterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <TypewriterLoop phrases={typePhrases} typingSpeed={60} pause={1400} />
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={heroItem}
              className="text-secondary text-[18px] leading-[1.8] max-w-[520px] font-normal"
            >
              I&apos;m <span className="text-accent font-semibold">ENG SULUB</span> — a fullstack developer and video
              editor crafting <span className="text-primary font-medium">clean code</span>, <span className="text-primary font-medium">cinematic visuals</span>,
              and motion that moves brands forward.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                className="btn-primary rounded-xl text-sm px-6 py-3 shadow-lg"
              >
                View Projects
              </motion.a>

              <motion.a
                href="/ENG-SULUB-CV.pdf"
                whileHover={{ scale: 1.02 }}
                className="btn-secondary rounded-xl text-sm px-6 py-3 backdrop-blur-md border-white/10"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative" style={{ marginTop: '-50px' }}>
              {/* Animated Gradient Ring (does not move image) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(59,130,246,0.28), rgba(59,130,246,0.08), rgba(59,130,246,0.28))',
                }}
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border border-accent/20 pointer-events-none"
              />

              {/* Blue Glow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

              {/* Static Profile Image (fixed size, overflow hidden) */}
              <ProfileImage />

              {/* Bottom Accent Light */}
              <motion.div
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-28 bg-accent/20 rounded-full blur-3xl pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  ) 
}
