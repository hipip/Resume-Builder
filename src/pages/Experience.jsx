import { useState } from "react";
import ExperienceItem from "../components/ExperienceItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import FormItem from "../components/FormItem";

const Experience = ({ experience, addExperience, deleteExperience }) => {
  const [mode, setMode] = useState("normal");
  const [newExperience, setNewExperience] = useState({
    jobTitle: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    responsibilities: [],
  });
  const [newResponsibility, setNewResponsibility] = useState("");

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
              <button
                type="button"
                className="add-new-experience-item-btn"
                onClick={() => setMode("add")}
              >
                <FontAwesomeIcon icon={faPlus} /> Add Experience Item
              </button>
            </>
          )}
          {mode === "add" && (
            <>
              <h3 style={{ margin: "0 auto" }}>Add new Exeprience</h3>
              <div className="flex-test">
                <FormItem
                  htmlFor="jobTitle"
                  labelTxtContent="Job Title"
                  placeHolder="Enter the job's  title"
                  value={newExperience.jobTitle}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      jobTitle: e.target.value,
                    })
                  }
                />
                <FormItem
                  htmlFor="company"
                  labelTxtContent="Company's Name"
                  placeHolder="Enter the company's name"
                  value={newExperience.company}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      company: e.target.value,
                    })
                  }
                />
                <FormItem
                  htmlFor="location"
                  labelTxtContent="Location"
                  placeHolder="Enter the company's location"
                  value={newExperience.location}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      location: e.target.value,
                    })
                  }
                />
                <FormItem
                  htmlFor="start-date"
                  labelTxtContent="Start Date"
                  placeHolder="Enter the start date"
                  value={newExperience.startDate}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      startDate: e.target.value,
                    })
                  }
                />
                <FormItem
                  htmlFor="end-date"
                  labelTxtContent="End Date"
                  placeHolder="Enter the end date"
                  value={newExperience.endDate}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      endDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="responsiblities-form">
                <FormItem
                  htmlFor="responsibilities"
                  labelTxtContent="Responsibilities"
                  placeHolder="add a new responsibility you did on the job"
                  value={newResponsibility}
                  onChange={(e) => setNewResponsibility(e.target.value)}
                />
                <button
                  className="special-btn"
                  id="add-responsibility-btn"
                  onClick={() => {
                    setNewExperience({
                      ...newExperience,
                      responsibilities: [
                        ...newExperience.responsibilities,
                        newResponsibility,
                      ],
                    });
                    setNewResponsibility("");
                  }}
                >
                  Add Responsibility
                </button>
                <ul className="responsibilities">
                  {newExperience.responsibilities.map((resp) => (
                    <li className="responsibility-item">
                      {resp}
                      <button
                        id="delete-responsibility-btn"
                        onClick={() => {
                          setNewExperience({
                            ...newExperience,
                            responsibilities:
                              newExperience.responsibilities.filter(
                                (resp) => resp !== resp
                              ),
                          });
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="some-btns-container">
                <button
                  className="special-btn"
                  id="confirm-add-experience-btn"
                  onClick={() => {
                    if (
                      newExperience.jobTitle &&
                      newExperience.company &&
                      newExperience.location &&
                      newExperience.startDate &&
                      newExperience.endDate
                    ) {
                      addExperience(newExperience);
                      setNewExperience({
                        jobTitle: "",
                        company: "",
                        location: "",
                        startDate: "",
                        endDate: "",
                        responsibilities: [],
                      });
                      setMode("normal");
                    }
                  }}
                >
                  Add Experience
                </button>
                <button
                  className="special-btn"
                  id="cancel-add-experience-btn"
                  onClick={() => {
                    setMode("normal");
                    setNewExperience({
                      jobTitle: "",
                      company: "",
                      location: "",
                      startDate: "",
                      endDate: "",
                      responsibilities: [],
                    });
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
