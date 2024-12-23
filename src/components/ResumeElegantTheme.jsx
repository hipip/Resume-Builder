import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendar,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeElegantTheme = ({ contactInfo, education, experience, skills }) => {
  return (
    <div className="resume-wrapper" theme="elegant">
      <div className="col-one">
        <section className="contact-info-section">
          <header className="resume-header">
            <h1 className="resume-full-name">{contactInfo.fullName}</h1>
            <h3>{contactInfo.jobTitle}</h3>
          </header>
          <div className="resume-links-wrapper">
            {contactInfo.phoneNumber !== "" && (
              <div className="resume-link">
                <FontAwesomeIcon icon={faPhone} />
                <p>{contactInfo.phoneNumber}</p>
              </div>
            )}
            {contactInfo.email !== "" && (
              <div className="resume-link">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>{contactInfo.email}</p>
              </div>
            )}
            {contactInfo.location !== "" && (
              <div className="resume-link">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{contactInfo.location}</p>
              </div>
            )}
            {contactInfo.linkedIn !== "" && (
              <a className="resume-link">
                <FontAwesomeIcon icon={faLinkedin} />
                <p>{contactInfo.linkedIn}</p>
              </a>
            )}
            {contactInfo.github !== "" && (
              <a className="resume-link">
                <FontAwesomeIcon icon={faGithub} />
                <p>{contactInfo.github}</p>
              </a>
            )}
          </div>
        </section>
        <section className="education-section">
          <h3 className="resume-section-title">Education</h3>
          <div className="educations-container">
            {education.map((edu) => (
              <div className="resume-education-item" key={edu.id}>
                <p> {edu.degree}</p>
                <p> {edu.fieldOfStudy}</p>
                <p>
                  {" "}
                  <strong>{edu.nameOfSchool}</strong>
                </p>
                <div className="education-date">
                  <FontAwesomeIcon icon={faCalendar} />
                  {edu.startDate} - {edu.endDate}
                </div>
                <div className="education-date">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {edu.location}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <h3 className="resume-section-title">Skills</h3>
          <ul className="skills-container">
            {skills.map((skill) => (
              <li className="skill-item" key={skill.id}>
                {skill.name}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="experience-section">
        <h3 className="resume-section-title">WORK EXPERIENCE</h3>
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
                  <li className="experience-responsibility" key={res}>
                    {res}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeElegantTheme;
