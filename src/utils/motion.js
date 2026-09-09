// Fade animations
export const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

// Scale and fade
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

// Stagger animations
export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: '-60px' },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
}

// Hero animations
export const heroStagger = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const heroItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

// Button animations
export const buttonHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98, transition: { duration: 0.1 } },
}

// Link animations
export const linkHover = {
  whileHover: { x: 4, transition: { duration: 0.2 } },
}

// Slide animations
export const slideInLeft = {
  initial: { opacity: 0, x: -48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

export const slideInRight = {
  initial: { opacity: 0, x: 48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

// Rotate animations
export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  whileInView: { opacity: 1, rotate: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

// Typewriter effect
export const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// Profile image float animation
export const floatAnimation = {
  animate: { y: [0, -12, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
}

// Gradient animation for profile ring
export const gradientAnimation = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  },
  transition: { duration: 3, repeat: Infinity, ease: 'linear' },
}

// Pulse animation for cards
export const pulseAnimation = {
  animate: { opacity: [1, 0.8, 1] },
  transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
}

// Project card animations
export const projectCardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  hover: { y: -4, transition: { duration: 0.3 } },
}

// Service card animations
export const serviceCardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: {
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
    transition: { duration: 0.3 },
  },
}
