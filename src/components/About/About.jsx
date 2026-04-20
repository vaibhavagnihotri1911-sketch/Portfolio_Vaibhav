import React from 'react'
import "./About.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {
  useGSAP(() => {
    gsap.from(".leftabout", {
      x: -60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      }
    })
    gsap.from(".rightabout", {
      x: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      }
    })
  })

  const skills = [
    { name: "React.js", icon: "⚛" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express.js", icon: "⚡" },
    { name: "C++", icon: "💡" },
    { name: "Data Structures", icon: "🔷" },
    { name: "GSAP", icon: "✨" },
    { name: "Git & GitHub", icon: "🐙" },
  ]

  const progressData = [
    { name: "MERN Stack Development", percent: 85 },
    { name: "C++ & DSA", percent: 78 },
    { name: "AI / ML Integration", percent: 70 },
    { name: "UI/UX Design", percent: 65 },
  ]

  return (
    <div id="about">

      {/* LEFT PANEL */}
      <div className="leftabout">
        <div className="about-timeline">
          <span className="about-eyebrow">Who I Am</span>
          <h2 className="about-heading">
            Vaibhav<br />
            <em className="about-heading-italic">Agnihotri</em>
          </h2>

          <p className="about-body">
            A passionate B.Tech Computer Science student specializing in full-stack
            web development and AI-powered applications. I build fast, scalable,
            and intelligent digital experiences.
          </p>

          <ul className="about-info-list">
            <li>
              <span>Degree</span>
              B.Tech — Computer Science & Engineering
            </li>
            <li>
              <span>CGPA</span>
              7.46 / 10.0
            </li>
            <li>
              <span>Stack</span>
              MERN Full Stack Developer
            </li>
            <li>
              <span>Languages</span>
              Hindi &amp; English
            </li>
            <li>
              <span>Status</span>
              Open to Opportunities ✦
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="rightabout">
        <div className="about-big-number">02</div>

        <span className="rightabout-label">Skills &amp; Expertise</span>

        <div className="about-skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-tag" key={i}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="about-progress" style={{ marginTop: '32px' }}>
          {progressData.map((item, i) => (
            <div className="progress-item" key={i}>
              <div className="progress-header">
                <span className="progress-name">{item.name}</span>
                <span className="progress-percent">{item.percent}%</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default About
