import './Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>📧 Email</h3>
              <p><a href="mailto:vihswasalhat333@gmail.com">vihswasalhat333@gmail.com</a></p>
            </div>
            <div className="info-item">
              <h3>📱 Phone</h3>
              <p><a href="tel:+1234567890">+91 9920950437</a></p>
            </div>
            <div className="info-item">
              <h3>📍 Location</h3>
              <p>Dombivli, Maharashtra, India</p>
            </div>
            <div className="info-item">
              <h3>🔗 Connect With Me</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/vishwas-alhat-037926243" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/VishwasAlhat124" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="btn btn-secondary" href="public\VISHWAS_ALHAT_RESUME.pdf" download style={{marginLeft: '8px'}}>Download CV</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
