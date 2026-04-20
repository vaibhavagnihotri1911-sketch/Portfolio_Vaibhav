import React from 'react'
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
import br from "../../assets/br.png"
import ise from "../../assets/ise.png"
gsap.registerPlugin(ScrollTrigger)

// ⚠️ Replace github and live URLs with your actual links
const projectData = [
  { title: "Virtual Assistant", desc: "AI-powered voice & text assistant built with React and NLP APIs", image: va, tag: "AI / NLP", github: "https://github.com/vaibhavagnihotri", live: "#", tech: ["React", "NLP", "API"] },
  { title: "AI Fitness Website", desc: "Personalized workout plans using machine learning recommendations", image: fw, tag: "MERN / AI", github: "https://github.com/vaibhavagnihotri", live: "#", tech: ["MongoDB", "Express", "React", "Node"] },
  { title: "AI Chatbot", desc: "Context-aware conversational bot powered by Gemini API", image: cb, tag: "React / API", github: "https://github.com/vaibhavagnihotri", live: "#", tech: ["React", "Gemini", "CSS"] },
  { title: "AI Text to Image", desc: "Generate stunning images from text prompts using generative AI", image: tti, tag: "Generative AI", github: "https://github.com/vaibhavagnihotri", live: "#", tech: ["React", "Hugging Face"] },
  { title: "Background Remover", desc: "One-click AI background removal with instant PNG download", image: br, tag: "Computer Vision", github: "https://github.com/vaibhavagnihotri", live: "#", tech: ["React", "remove.bg API"] },
  { title: "Image Search Engine", desc: "Full-stack visual search engine with AI-powered image ranking", image: ise, tag: "Full Stack", github: "https://github.com/vaibhavagnihotri", live: "#", tech: ["MERN", "Unsplash API"] },
]

function Projects() {
  useGSAP(() => {
    gsap.from(".projects-header", { y: 50, opacity: 0, duration: 1, scrollTrigger: { trigger: ".projects-header", start: "top 85%", end: "top 55%", scrub: 1 } })
    gsap.from(".project-card", { y: 60, opacity: 0, duration: 0.8, stagger: 0.12, scrollTrigger: { trigger: ".projects-grid", start: "top 80%", end: "top 20%", scrub: 1 } })
  })

  return (
    <div id="projects">
      <div className="projects-header">
        <span className="projects-eyebrow">Selected Work</span>
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">2+ years building real-world AI applications</p>
      </div>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-img">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <span className="project-tag">{project.tag}</span>
                <div className="project-overlay-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="overlay-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="overlay-link overlay-link-live">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card-body">
              <div className="project-index">0{index + 1}</div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.desc}</p>
              <div className="project-tech-row">
                {project.tech.map((t, i) => <span key={i} className="project-tech-chip">{t}</span>)}
              </div>
              <div className="project-card-footer">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-view">View on GitHub →</a>
                <a href={project.live} target="_blank" rel="noreferrer" className="project-live-btn">Live ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects
