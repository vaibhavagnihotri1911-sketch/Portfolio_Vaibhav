import React from 'react'
import "./Contact.css"
import { useState } from "react";
import toast from "react-hot-toast";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xbdqkkzl", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      toast.success("Message sent successfully ✅");
      form.reset();
    } else {
      toast.error("Failed to send ❌");
    }

    setLoading(false);
  };

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

      {/* LEFT — contact info */}
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

          <div className="contact-deco-num">04</div>
        </div>
      </div>

      {/* RIGHT — form */}
      <div className="rightcontact">
        <div className="contact-form-wrap">

          {/* 🔥 ONLY CHANGE: onSubmit */}
          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Vaibhav Agnihotri" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="hello@email.com" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Job Opportunity / Collaboration" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." required></textarea>
            </div>

            {/* 🔥 Updated button (no removal, only upgrade) */}
            <button type="submit" className="form-submit">
              {loading ? "Sending..." : (
                <>
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </>
              )}
            </button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact