import React from 'react'
import "./Contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useGSAP(() => {
    gsap.from(".contact-info", {
      x: -60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      }
    })
    gsap.from(".contact-form-wrap", {
      x: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      }
    })
  })

  return (
    <div id="contact">

      {/* LEFT — contact info instead of cartoon */}
      <div className="leftcontact">
        <div className="contact-info">
          <span className="contact-eyebrow">Get In Touch</span>
          <h2 className="contact-heading">Let's Work<br /><em>Together</em></h2>
          <p className="contact-desc">
            Open to full-time roles, freelance projects, and collaborations.
            Drop a message and I'll get back within 24 hours.
          </p>

          <div className="contact-links">
            <a href="mailto:vaibhavagnihotri1911@gmail.com" className="contact-link-item">
              <div className="contact-link-icon">✉</div>
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">vaibhavagnihotri1911@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-agnihotri-34aa4b308/" target="_blank" rel="noreferrer" className="contact-link-item">
              <div className="contact-link-icon">in</div>
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">Vaibhav Agnihotri</div>
              </div>
            </a>
            <a href="https://github.com/vaibhavagnihotri1911-sketch" target="_blank" rel="noreferrer" className="contact-link-item">
              <div className="contact-link-icon">gh</div>
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">@vaibhavagnihotri</div>
              </div>
            </a>
            <div className="contact-link-item">
              <div className="contact-link-icon">📍</div>
              <div>
                <div className="contact-link-label">Location</div>
                <div className="contact-link-value">India</div>
              </div>
            </div>
          </div>

          {/* Decorative number */}
          <div className="contact-deco-num">04</div>
        </div>
      </div>

      {/* RIGHT — form */}
      <div className="rightcontact">
        <div className="contact-form-wrap">
          <form action="https://formspree.io/f/xbdqkkzl" method="POST">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="Username" type="text" placeholder="Vaibhav Agnihotri" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="Email" type="email" placeholder="hello@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="Subject" type="text" placeholder="Job Opportunity / Collaboration" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..."></textarea>
            </div>
            <button type="submit" className="form-submit">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
