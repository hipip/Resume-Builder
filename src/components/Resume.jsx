import ResumeElegantTheme from "./ResumeElegantTheme";
import ResumeProfessionalTheme from "./ResumeProfessionalTheme";
import ResumeStandoutTheme from "./ResumeStandoutTheme";

const Resume = ({
  skills,
  contactInfo,
  education,
  experience,
  theme,
  isMinimized,
}) => {
  education = education.sort((a, b) => a.startDate - b.startDate);

  return (
    <div id="resume" className={isMinimized ? "mini" : ""}>
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
