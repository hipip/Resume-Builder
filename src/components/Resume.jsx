import ResumeElegantTheme from "./ResumeElegantTheme";
import ResumeProfessionalTheme from "./ResumeProfessionalTheme";
import ResumeStandoutTheme from "./ResumeStandoutTheme";

const Resume = ({ skills, contactInfo, education, experience, theme }) => {
  return (
    <div id="resume">
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
