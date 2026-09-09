import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, projectCardVariants } from '../utils/motion'
import { projects, filters } from '../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visible =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding border-t border-white/[0.04] bg-surface/30">
      <div className="container-content">
        {/* Header */}
        <motion.div {...fadeInUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Selected Work</h2>
            <p className="text-secondary text-base md:text-lg mt-4">
              A collection of my latest projects showcasing design, development, and motion expertise.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg'
                    : 'text-secondary bg-surface hover:text-primary hover:bg-surface-elevated border border-white/[0.06]'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                variants={projectCardVariants}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ 
                  duration: 0.35, 
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover="hover"
                className="card-surface overflow-hidden group h-full flex flex-col"
              >
                {/* Image Container */}
                <a href={project.link} className="block aspect-[16/10] overflow-hidden relative bg-surface">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6"
                  >
                    <p className="text-white text-sm font-medium">View Case Study</p>
                  </motion.div>
                </a>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-secondary bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {visible.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-secondary text-lg">No projects found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
