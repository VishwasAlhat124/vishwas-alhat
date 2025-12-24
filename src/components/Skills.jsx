import './Skills.css'

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      category: 'Backend & Databases',
      items: ['Core Java', 'Servlet/JSP', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'MySQL']
    },
    {
      category: 'Tools',
      items: ['Git','GitHub', 'Postman', 'Vscode', 'Eclipse', ]
    },
    {
      category: 'Other Skills',
      items: ['REST APIs', 'JWT Authentication', 'AWS Recognition', 'AWS S3']
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
