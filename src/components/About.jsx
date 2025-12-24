import './About.css'
import Me from '../assets/Me.jpeg'

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a Computer Engineering graduate and a Java Full Stack Developer with a strong focus on building scalable, secure, and maintainable web applications. My expertise lies in developing robust backend systems using Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, and Spring Security, along with secure authentication mechanisms such as JWT.
                        </p>
                        <p>
                            Alongside backend development, I have hands-on experience in building modern, dynamic user interfaces using React, combined with HTML, CSS, JavaScript, and Bootstrap. I enjoy creating responsive frontend components and seamlessly integrating them with RESTful APIs.
                        </p>
                        <p>
                            I am comfortable working across the complete development lifecycle—designing APIs, managing databases, implementing business logic, and developing frontend features. I follow clean coding practices and structured architectures to ensure performance, security, and scalability.
                        </p>
                        <p>
                            Driven by continuous learning and problem-solving, I am always exploring new technologies and improving my skills to deliver efficient, real-world software solutions.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={Me} alt="My photo" className="about-photo" />
                    </div>
                </div>
            </div>
        </section>
    )
}
