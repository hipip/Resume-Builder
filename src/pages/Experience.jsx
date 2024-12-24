import { useState } from "react";
import ExperienceItem from "../components/ExperienceItem";

const Experience = ({ experience, deleteExperience }) => {
  const [mode, setMode] = useState("normal");
  const [newExperience, setNewExperience] = useState({
    jobTitle: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    responsibilities: [],
  });

  return (
    <div>
      <div className="builder-section">
        <h1 className="builder-section-title">Experience Section</h1>
        <div className="experience-container">
          {mode === "normal" && (
            <>
              {experience.map((exp) => (
                <ExperienceItem
                  exp={exp}
                  key={exp.id}
                  deleteExperience={deleteExperience}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
