import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm Vishwas Alhat</h1>
          <p className="tagline">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <p className="intro-text">
            Welcome to my portfolio. I'm passionate about building beautiful, 
            functional web applications and solving complex problems through code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
