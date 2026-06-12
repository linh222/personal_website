import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  CircleCheck,
  ExternalLink,
  FileText,
  FolderGit2,
  Github,
  GraduationCap,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { profile, teaching, publications, projects, awards } from './data/content.js'

const navLinks = [
  { name: 'Bio', href: '#bio' },
  { name: 'Service', href: '#service' },
  { name: 'Teaching', href: '#teaching' },
  { name: 'Publications', href: '#publications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Awards', href: '#awards' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary font-heading">
          {profile.name}
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-slate-600" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-sm font-medium text-slate-600 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
    <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
      <div className="flex-1 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-green-50 border border-green-200 text-green-700 rounded-full text-sm font-medium"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          {profile.openTo}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4"
        >
          Hi, I'm <span className="text-accent">{profile.shortName}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl text-slate-600 font-medium mb-6"
        >
          {profile.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-white rounded-full shadow-sm text-sm font-medium">
            <Mail size={16} /> {profile.emailDisplay}
          </span>
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-slate-700 border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-accent hover:text-accent transition-all text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
          <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 -m-4 border-2 border-dashed border-slate-300 rounded-full animate-spin-slow" />
      </motion.div>
    </div>
  </section>
)

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-8 relative inline-block"
        >
          {title}
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent rounded-full" />
        </motion.h2>
      )}
      {children}
    </div>
  </section>
)

const Bio = () => (
  <Section id="bio" title="Biography">
    <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
      <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
    </div>
  </Section>
)

const Teaching = () => (
  <Section id="teaching" title="Teaching" className="bg-white">
    <p className="text-slate-600 mb-8">{teaching.intro}</p>
    <div className="grid md:grid-cols-2 gap-4">
      {teaching.modules.map((module, index) => (
        <motion.div
          key={module.code}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all flex items-start gap-4"
        >
          <div className="p-3 bg-blue-50 text-accent rounded-lg flex-shrink-0">
            <GraduationCap size={24} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-800">
              {module.code} – {module.title}
            </h4>
            <p className="text-sm text-slate-500 mt-1">
              {module.role} · {module.semester}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
)

const PublicationCard = ({ publication, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-accent/30 transition-all group"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-50 text-accent rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
        <FileText size={24} />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-accent transition-colors">
          {publication.title}
        </h4>
        <p className="text-slate-500 text-sm mb-3 font-medium">{publication.venue}</p>
        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-accent font-medium hover:underline"
          >
            View Paper <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
        <FolderGit2 size={24} />
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-800 transition-colors"
        >
          <Github size={20} />
        </a>
      )}
    </div>
    <h4 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed flex-1">{project.description}</p>
  </motion.div>
)

const PostdocCTA = () => (
  <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Looking for a Postdoctoral Researcher?</h2>
      <p className="text-sky-100 max-w-2xl mx-auto mb-8 leading-relaxed">
        I am completing my PhD on LLM-based question answering over multimodal lifelog data and am
        seeking postdoctoral positions in multimodal AI, retrieval-augmented generation, information
        retrieval and intelligent assistants. Let's talk about how I can contribute to your team.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <span className="inline-flex items-center gap-2 px-8 py-3 bg-white text-sky-600 rounded-full font-semibold shadow-md">
          <Mail size={18} /> {profile.emailDisplay}
        </span>
        <a
          href={profile.links[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/60 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
        >
          Google Scholar <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
    <p>
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </p>
  </footer>
)

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Bio />
        <Section id="service" title="Research Service" className="bg-white">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {profile.services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CircleCheck className="text-green-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: service }} />
              </div>
            ))}
          </div>
        </Section>
        <Section id="academic" title="Academic Activities">
          <div className="space-y-4">
            {profile.academic.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100"
              >
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: activity }} />
              </div>
            ))}
          </div>
        </Section>
        <Teaching />
        <Section id="publications" title="Publications" className="bg-slate-50">
          <div className="grid gap-4">
            {publications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} index={index} />
            ))}
          </div>
        </Section>
        <Section id="projects" title="Projects" className="bg-white">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </Section>
        <Section id="awards" title="Awards & Prizes" className="bg-gradient-to-b from-slate-50 to-white">
          <div className="grid gap-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100"
              >
                <div className="p-2 bg-yellow-50 text-yellow-600 rounded-full">
                  <Award size={20} />
                </div>
                <span className="text-slate-700 font-medium">{award}</span>
              </div>
            ))}
          </div>
        </Section>
        <PostdocCTA />
      </main>
      <Footer />
    </div>
  )
}
