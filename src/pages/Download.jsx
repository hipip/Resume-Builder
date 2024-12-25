import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../components/Resume";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import html2pdf from "html2pdf.js";
import { useState } from "react";

const Download = ({
  contactInfo,
  education,
  experience,
  skills,
  theme,
  setTheme,
}) => {
  const [mainFont, setMainFont] = useState("Montserrat");
  const downloadPDF = () => {
    const element = document.querySelector("#resume");
    const { width, height } = element.getBoundingClientRect();

    const options = {
      margin: 0,
      filename: `${
        contactInfo.fullName.trim().toLowerCase().split(" ").join("-") || ""
      }-Resume.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 4,
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
      <div className="settings-section">
        <div
          onChange={(e) => {
            setTheme(e.target.value);
          }}
          className="theme-selection-form"
        >
          <h3>Theme Selection</h3>
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
        <div
          className="font-selection-form"
          onChange={(e) => {
            setMainFont(e.target.value);
          }}
        >
          <h3>Font Selection</h3>

          <div className="wtf">
            <label htmlFor="montserrat">Montserrat</label>
            <input
              type="radio"
              name="resume-font"
              id="montserrat"
              value="Montserrat"
            />
          </div>
          <div className="wtf">
            <label htmlFor="roboto">Roboto</label>
            <input type="radio" name="resume-font" id="roboto" value="Roboto" />
          </div>
          <div className="wtf">
            <label htmlFor="lora">Lora</label>
            <input type="radio" name="resume-font" id="lora" value="Lora" />
          </div>
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
        font={mainFont}
      />
    </div>
  );
};

export default Download;
