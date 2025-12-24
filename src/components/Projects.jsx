import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Forensic Face Detection',
      description: 'A full-stack web application that matches forensic sketches with real facial images to assist in suspect identification. Built using Java Spring Boot for the backend and React for a secure, responsive user interface.',
      technologies: ['JAVA', 'React', 'Spring Boot','Spring Boot JPA', 'MySQL','Maven', 'AWS S3','AWS Rekognition'],
      link: 'https://drive.google.com/file/d/1px3q_COKhLWaAswJBq-flPTVxD_hF_Xq/view?usp=drive_link',
      image: '🛍️'
    },
    {
      id: 2,
      title: 'Student Attendance Management System',
      description: 'A Spring Boot REST API for managing student attendance, enabling faculty to record, view, and manage attendance by subject, reducing paperwork and improving accuracy.',
      technologies: ['JAVA', 'React', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
      link: 'https://drive.google.com/file/d/1MIMjdNr4i8rI6Sy0i-nOZ59hR9dLZwFs/view?usp=drive_link',
      image: '✓'
    },
    {
      id: 3,
      title: 'Personal Finance Management System',
      description: 'Personal Finance Management web app built with Spring Boot, Spring Security, JPA/Hibernate, and MySQL, allowing users to track income/expenses, filter transactions by type/date, and view monthly reports in a JSP/Bootstrap UI.',
      technologies: ['JAVA', 'HTML','CSS', 'JavaScript', 'Spring Boot', 'MySQL'],
      link: 'https://drive.google.com/file/d/1_ddb_mFsbh6weX2azsBkNFDaCcOkxFcY/view?usp=drive_link',
      image: '🌤️'
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
