import ResumeElegantTheme from "./ResumeElegantTheme";
import ResumeProfessionalTheme from "./ResumeProfessionalTheme";
import ResumeStandoutTheme from "./ResumeStandoutTheme";

const Resume = ({
  skills,
  contactInfo,
  education,
  experience,
  theme,
  font,
}) => {
  education = education.sort((a, b) => a.startDate - b.startDate);
  experience = experience.sort((a, b) => a.startDate - b.startDate);

  return (
    <div id="resume" style={{ fontFamily: `"${font}", serif` }}>
      {theme === "professional" && (
        <ResumeProfessionalTheme
          contactInfo={contactInfo}
          education={education}
          experience={experience}
          skills={skills}
        />
      )}
      {theme === "standout" && (
        <ResumeStandoutTheme
          contactInfo={contactInfo}
          education={education}
          experience={experience}
          skills={skills}
        />
      )}
      {theme === "elegant" && (
        <ResumeElegantTheme
          contactInfo={contactInfo}
          education={education}
          experience={experience}
          skills={skills}
        />
      )}
    </div>
  );
};

export default Resume;
