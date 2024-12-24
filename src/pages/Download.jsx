import Resume from "../components/Resume";

const Download = ({
  contactInfo,
  education,
  experience,
  skills,
  theme,
  setTheme,
}) => {
  return (
    <div className="builder-section">
      <h1 className="builder-section-title">Download Page</h1>
      <div
        onChange={(e) => {
          setTheme(e.target.value);
        }}
        className="theme-selection-form"
      >
        <p>Select a theme please!</p>
        <div className="wtf">
          <label htmlFor="professional">Professional</label>
          <input
            type="radio"
            name="resume-theme"
            id="professional"
            value="professional"
          />
        </div>
        <div className="wtf">
          <label htmlFor="elegant">Elegant</label>
          <input
            type="radio"
            name="resume-theme"
            id="elegant"
            value="elegant"
          />
        </div>
        <div className="wtf">
          <label htmlFor="standout">Standout</label>
          <input
            type="radio"
            name="resume-theme"
            id="standout"
            value="standout"
          />
        </div>
      </div>
      <Resume
        contactInfo={contactInfo}
        education={education}
        experience={experience}
        skills={skills}
        theme={theme}
      />
    </div>
  );
};

export default Download;
