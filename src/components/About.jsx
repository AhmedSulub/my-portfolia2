import React, { useState } from 'react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Ahmed Hassan',
    title: 'CEO & Founder',
    desc: 'Leading strategy and product vision with over a decade of experience building premium digital experiences.',
  },
  {
    name: 'Amina Ali',
    title: 'UI/UX Designer',
    desc: 'Designs intuitive interfaces and modern experiences that balance clarity, conversion, and emotional impact.',
  },
  {
    name: 'Mohamed Nur',
    title: 'Full Stack Developer',
    desc: 'Builds scalable web and mobile applications with polished interfaces and reliable, maintainable architecture.',
  },
]

function SocialIcons({ className = 'h-5 w-5' }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <a href="#" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.8 2.6 4.8 6V24h-4v-8.2c0-2-0.1-4.6-2.8-4.6-2.8 0-3.2 2.1-3.2 4.4V24h-4z" />
        </svg>
      </a>

      <a href="#" aria-label="GitHub" className="text-muted hover:text-accent transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 .5C5.7.5.8 5.4.8 11.6c0 4.8 3.1 8.8 7.4 10.2.6.1.8-.2.8-.6v-2.1c-3 .6-3.6-1.3-3.6-1.3-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7.7 2.2 1.3.2-1 .5-1.6.9-2-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.1.9-.3 1.9-.5 2.9-.5s2 .2 2.9.5c2.1-1.4 3-1.1 3-1.1.6 1.6.3 2.8.1 3.1.7.8 1.1 1.8 1.1 2.9 0 4.2-2.5 5.1-4.9 5.4.5.4.9 1.1.9 2.2v3.3c0 .4.2.7.9.6 4.3-1.4 7.4-5.4 7.4-10.2C23.2 5.4 18.3.5 12 .5z" />
        </svg>
      </a>

      <a href="#" aria-label="Twitter" className="text-muted hover:text-accent transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M23 4.6c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.3 1.7-2.3-.8.5-1.6.8-2.5 1C19.6 3 18.5 2.5 17.3 2.5c-2 0-3.6 1.7-3.6 3.7 0 .3 0 .5.1.8C10 6.6 6.6 4.7 4 1.9c-.3.6-.5 1.2-.5 2 0 1.3.7 2.4 1.6 3-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.4 3 3.7-.3.1-.6.2-.9.2-.2 0-.4 0-.6-.1.4 1.4 1.6 2.4 3 2.4-1.1.9-2.4 1.4-3.9 1.4H4c1.6 1 3.5 1.5 5.6 1.5 6.7 0 10.3-5.6 10.3-10.4v-.5c.7-.5 1.3-1.1 1.8-1.8-.6.3-1.3.6-2 .7z" />
        </svg>
      </a>
    </div>
  )
}

function TeamCard({ member }) {
  const id = member.name.replace(/\s+/g, '-').toLowerCase()

  return (
    <motion.article
      id={id}
      whileHover={{ scale: 1.02 }}
      className="group w-full max-w-sm h-full bg-white/6 dark:bg-black/6 backdrop-blur-sm border border-white/6 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform-gpu hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center"
    >
      <div>
        <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-3xl font-semibold text-primary shadow-inner">
          <span className="uppercase tracking-[0.25em]">{member.name.split(' ').map((n) => n[0]).join('')}</span>
        </div>
        <h4 className="text-xl font-semibold text-primary mb-2">{member.name}</h4>
        <p className="text-sm text-accent/90 font-medium mb-5">{member.title}</p>
        <p className="text-sm text-secondary leading-relaxed">{member.desc}</p>
      </div>

      <div className="mt-8 pt-6 border-t border-white/[0.04]">
        <SocialIcons />
      </div>
    </motion.article>
  )
}

export default function About() {
  const [query, setQuery] = useState('')

  const filteredMembers = teamMembers.filter((m) => {
    const q = query.toLowerCase().trim()
    if (!q) return true
    return (
      m.name.toLowerCase().includes(q) || m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)
    )
  })

  return (
    <section id="about" className="section-padding">
      <div className="container-content max-w-6xl">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="section-label">About Us</p>
          <h2 className="section-title mb-4">Meet Our Professional Development Team</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            We specialize in Web Development, Mobile Applications, UI/UX Design, Cloud Solutions, and IT
            Consultancy — delivering modern, scalable products and strategic technology guidance to help
            businesses grow.
          </p>
        </div>

        {/* Team Search */}
        <div className="mb-10 max-w-3xl mx-auto">
          <label htmlFor="team-search" className="sr-only">Search team members</label>
          <input
            id="team-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search team members by name, title, or description..."
            className="w-full rounded-3xl border border-white/[0.08] bg-white/5 py-4 px-5 text-primary placeholder:text-muted shadow-[0_20px_60px_-30px_rgba(15,23,42,0.75)] focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-items-center">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((m) => <TeamCard key={m.name} member={m} />)
          ) : (
            <div className="col-span-full text-center text-secondary py-10 px-6 rounded-3xl border border-white/[0.04] max-w-xl">
              No team member found.
            </div>
          )}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div className="card-surface p-6 rounded-2xl border border-white/[0.04]">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-secondary leading-relaxed">
              To empower organizations with reliable, user-centered technology solutions that accelerate
              growth, streamline operations, and create meaningful digital experiences.
            </p>
          </motion.div>

          <motion.div className="card-surface p-6 rounded-2xl border border-white/[0.04]">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-secondary leading-relaxed">
              To be a trusted partner known for engineering excellence, creative design, and cloud-first
              architectures that drive measurable business outcomes across industries.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-accent/6 to-accent/3 border border-white/[0.04] p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Ready to start a project?</h3>
            <p className="text-secondary">Connect with our team to discuss your product, roadmap, or cloud strategy.</p>
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-accent text-primary font-medium shadow hover:shadow-lg transition-all">
              Contact Us
            </a>
            <a href="#services" className="text-sm text-muted hover:text-accent transition-colors">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
