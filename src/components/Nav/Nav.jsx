import React, { useRef, useState, useEffect } from 'react'
import "./Nav.css"
import { Link } from "react-scroll"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

function Nav() {
  const menu = useRef()
  const mobile = useRef()
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 2.4 })
    tl.from('.nav-logo', { y: -30, opacity: 0, duration: 0.7, ease: 'power3.out' })
    tl.from('.desktopmenu li', { y: -20, opacity: 0, stagger: 0.08, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    tl.from('.nav-right', { y: -20, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
  })

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <div className="nav-logo">
        <span className="nav-logo-va">VA</span>
        <span className="nav-logo-dot">.</span>
      </div>

      <ul className='desktopmenu'>
        <Link to="home" activeClass='active' spy smooth duration={500}><li>Home</li></Link>
        <Link to="about" activeClass='active' spy smooth duration={500}><li>About</li></Link>
        <Link to="projects" activeClass='active' spy smooth duration={500}><li>Projects</li></Link>
        <Link to="contact" activeClass='active' spy smooth duration={500}><li>Contact</li></Link>
      </ul>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <Link to="contact" smooth duration={500} className="nav-cta">Hire Me</Link>
      </div>

      <div className="hamburger" ref={menu} onClick={() => {
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")
      }}>
        <div className="ham"/><div className="ham"/><div className="ham"/>
      </div>

      <ul className='mobilemenu' ref={mobile}>
        <Link to="home" spy smooth duration={500}><li>Home</li></Link>
        <Link to="about" spy smooth duration={500}><li>About</li></Link>
        <Link to="projects" spy smooth duration={500}><li>Projects</li></Link>
        <Link to="contact" spy smooth duration={500}><li>Contact</li></Link>
        <li className="mobile-theme-row">
          <button className="theme-toggle-mobile" onClick={toggleTheme}>
            {theme === 'dark' ? '☀ Switch to Light' : '☽ Switch to Dark'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
