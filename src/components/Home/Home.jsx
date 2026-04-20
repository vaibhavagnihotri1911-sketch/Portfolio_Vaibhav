import React, { useEffect, useRef } from 'react'
import "./Home.css"
import man from "../../assets/profile.jpg"
import TypingEffect from "react-typing-effect"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-scroll'

// ── Particle Canvas ──────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId, particles = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.4 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.25
        this.speedY = (Math.random() - 0.5) * 0.25
        this.opacity = Math.random() * 0.45 + 0.08
        this.gold = Math.random() > 0.55
      }
      update() {
        this.x += this.speedX; this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.gold ? `rgba(200,149,58,${this.opacity})` : `rgba(240,230,206,${this.opacity * 0.35})`
        ctx.fill()
      }
    }
    for (let i = 0; i < 130; i++) particles.push(new Particle())
    const animate = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw() }); animId = requestAnimationFrame(animate) }
    animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="particle-canvas" />
}

// ── Custom Cursor ────────────────────────────────────────────
function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, animId
    const move = (e) => { mx = e.clientX; my = e.clientY; gsap.to(dot.current, { x: mx, y: my, duration: 0.08 }) }
    const lag = () => { rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1; if (ring.current) gsap.set(ring.current, { x: rx, y: ry }); animId = requestAnimationFrame(lag) }
    const grow = () => { gsap.to(ring.current, { scale: 2.2, borderColor: 'rgba(200,149,58,0.8)', duration: 0.3 }); gsap.to(dot.current, { scale: 0, duration: 0.3 }) }
    const shrink = () => { gsap.to(ring.current, { scale: 1, borderColor: 'rgba(200,149,58,0.5)', duration: 0.3 }); gsap.to(dot.current, { scale: 1, duration: 0.3 }) }
    window.addEventListener('mousemove', move); lag()
    const els = document.querySelectorAll('a, button, .skill-tag, .project-card, .contact-link-item')
    els.forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink) })
    return () => { cancelAnimationFrame(animId); window.removeEventListener('mousemove', move) }
  }, [])
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}

// ── Marquee ──────────────────────────────────────────────────
function Marquee() {
  const items = ['MERN Stack', '✦', 'React.js', '✦', 'Node.js', '✦', 'AI Developer', '✦', 'MongoDB', '✦', 'Full Stack', '✦', 'C++', '✦', 'Open to Work', '✦']
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className={item === '✦' ? 'marquee-dot' : 'marquee-text'}>{item}</span>
        ))}
      </div>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────
function Home() {
  const homeRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.eyebrow-home', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      tl.fromTo('.home-name', { y: 70, opacity: 0, skewY: 5 }, { y: 0, opacity: 1, skewY: 0, duration: 1, ease: 'power4.out' }, '-=0.2')
      tl.fromTo('.home-typing', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      tl.fromTo('.btn-group', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      tl.fromTo('.home-stats', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
      gsap.fromTo('.image-frame', { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.5 })
    }, homeRef)
    return () => ctx.revert()
  }, { scope: homeRef })

  return (
    <>
      <CustomCursor />
      <div id="home" ref={homeRef}>
        <ParticleCanvas />

        <div className="lefthome">
          <div className="homedetails">

            <div className="eyebrow-home">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Available for work</span>
              <span className="eyebrow-pulse" />
            </div>

            <div className="home-name">
              <span className="name-first">Vaibhav</span>
              <span className="name-last">Agnihotri</span>
            </div>

            <div className="home-typing">
              <span className="typing-prefix">I build </span>
              <span className="typing-highlight">
                <TypingEffect
                  text={["Web Apps", "AI Solutions", "MERN Projects", "Smart Interfaces"]}
                  speed={80}
                  eraseSpeed={40}
                  eraseDelay={1500}
                  typingDelay={400}
                  cursor='|'
                />
              </span>
            </div>

            <div className="btn-group">
  <Link to="contact" smooth={true} duration={500}>
    <button className="btn-primary">
      <span>Hire Me</span>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>
    </button>
  </Link>

  <Link to="projects" smooth={true} duration={500}>
    <button className="btn-secondary">View Projects</button>
  </Link>

  <a href="/resume.pdf" download>
    <button className="btn-secondary">Resume</button>
  </a>
</div>

            <div className="home-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">AI Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">7.46</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>

          </div>
        </div>

        <div className="righthome">
          <div className="image-frame">
            <img src={man} alt="Vaibhav Agnihotri" />
            <div className="image-glow" />
          </div>
          <div className="home-dot home-dot-1" />
          <div className="home-dot home-dot-2" />
          <div className="home-dot home-dot-3" />
        </div>

      </div>
      <Marquee />
    </>
  )
}

export default Home
