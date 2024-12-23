import ResumeProfessionalTheme from "./ResumeProfessionalTheme";

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
    </div>
  );
};

export default Resume;
