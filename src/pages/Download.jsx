import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../components/Resume";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import html2pdf from "html2pdf.js";

const Download = ({
  contactInfo,
  education,
  experience,
  skills,
  theme,
  setTheme,
}) => {
  const downloadPDF = () => {
    const element = document.querySelector("#resume");
    const { width, height } = element.getBoundingClientRect();

    const options = {
      margin: 0,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 3,
        useCORS: true,
      },
      jsPDF: {
        unit: "px",
        format: [width, height],
        orientation: "portrait",
      },
    };

    html2pdf().from(element).set(options).save();
  };

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
      <div>
        <button className="download-resume-btn" onClick={downloadPDF}>
          Download Resume
          <FontAwesomeIcon icon={faDownload} />
        </button>
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
