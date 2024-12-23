import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeProfessionalTheme = ({
  contactInfo,
  education,
  experience,
  skills,
}) => {
  return (
    <div className="resume-wrapper" theme="professional">
      <section className="contact-info-section">
        <header className="resume-header">
          <h1 className="resume-full-name">{contactInfo.fullName}</h1>
          <h3>{contactInfo.jobTitle}</h3>
        </header>
        <div className="resume-links-wrapper">
          <div className="resume-link">
            <FontAwesomeIcon icon={faPhone} />
            <p>{contactInfo.phoneNumber}</p>
          </div>
          <div className="resume-link">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{contactInfo.email}</p>
          </div>
          <div className="resume-link">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{contactInfo.location}</p>
          </div>
          <a className="resume-link">
            <FontAwesomeIcon icon={faLinkedin} />
            <p>{contactInfo.linkedIn}</p>
          </a>
          <a className="resume-link">
            <FontAwesomeIcon icon={faGithub} />
            <p>{contactInfo.github}</p>
          </a>
        </div>
      </section>
      <section className="experience-section">
        <h3 className="resume-section-title">WORK EXPERIENCE</h3>
        <hr className="line-break" />
        <div className="experiences-conatainer">
          {experience.map((exp) => (
            <div className="resume-experience-item" key={exp.id}>
              <p className="experience-title">
                {exp.jobTitle} - {exp.company}
              </p>
              <div className="experience-date-and-location">
                <p className="experience-date">
                  {exp.startDate} - {exp.endDate}
                </p>
                <div className="experience-location">{exp.location}</div>
              </div>
              <ul className="experience-responsabilities">
                {exp.responsibilities.map((res) => (
                  <li className="experience-responsibility">{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="education-section">
        <h3 className="resume-section-title">Education</h3>
        <hr className="line-break" />
        <div className="educations-container">
          {education.map((edu) => (
            <div className="resume-education-item" key={edu.id}>
              <p>
                <strong>{edu.nameOfSchool}</strong> - {edu.degree} in
                {edu.fieldOfStudy}
              </p>
              <div className="education-date">
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="skills-section">
        <h3 className="resume-section-title">Skills</h3>
        <hr className="line-break" />
        <ul className="skills-container">
          {skills.map((skill) => (
            <li className="skill-item" key={skill.id}>
              {skill.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResumeProfessionalTheme;
