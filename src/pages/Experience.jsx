import { useState } from "react";
import ExperienceItem from "../components/ExperienceItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import FormItem from "../components/FormItem";

const Experience = ({
  experience,
  addExperience,
  deleteExperience,
  setExperience,
}) => {
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
  const [toEdit, setToEdit] = useState(null);

  const onChange = (attribute) => {
    return (e) => {
      if (mode === "add") {
        setNewExperience({
          ...newExperience,
          [attribute]: e.target.value,
        });
      }
      if (mode === "edit") {
        setToEdit({ ...toEdit, [attribute]: e.target.value });
        setExperience([
          ...experience.filter((e) => e.id !== toEdit.id),
          { ...toEdit, [attribute]: e.target.value },
        ]);
      }
    };
  };

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
                  setEditMode={() => {
                    setMode("edit");
                    setToEdit(experience.find((expe) => expe.id === exp.id));
                  }}
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
          {(mode === "add" || mode === "edit") && (
            <>
              <h3 style={{ margin: "0 auto" }}>Add new Exeprience</h3>
              <div className="flex-test">
                <FormItem
                  htmlFor="jobTitle"
                  labelTxtContent="Job Title"
                  placeHolder="Enter the job's  title"
                  value={
                    mode === "add" ? newExperience.jobTitle : toEdit.jobTitle
                  }
                  onChange={onChange("jobTitle")}
                />
                <FormItem
                  htmlFor="company"
                  labelTxtContent="Company's Name"
                  placeHolder="Enter the company's name"
                  value={
                    mode === "add" ? newExperience.company : toEdit.company
                  }
                  onChange={onChange("company")}
                />
                <FormItem
                  htmlFor="location"
                  labelTxtContent="Location"
                  placeHolder="Enter the company's location"
                  value={
                    mode === "add" ? newExperience.location : toEdit.location
                  }
                  onChange={onChange("location")}
                />
                <FormItem
                  htmlFor="start-date"
                  labelTxtContent="Start Date"
                  placeHolder="Enter the start date"
                  value={
                    mode === "add" ? newExperience.startDate : toEdit.startDate
                  }
                  onChange={onChange("startDate")}
                />
                <FormItem
                  htmlFor="end-date"
                  labelTxtContent="End Date"
                  placeHolder="Enter the end date"
                  value={
                    mode === "add" ? newExperience.endDate : toEdit.endDate
                  }
                  onChange={onChange("endDate")}
                />
              </div>
              {mode === "add" && (
                <>
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
                </>
              )}
              <div className="some-btns-container">
                {mode === "add" && (
                  <>
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
                  </>
                )}
                {mode === "edit" && (
                  <>
                    <button
                      type="button"
                      className="special-btn"
                      id="save-and-return-experience-btn"
                      onClick={() => {
                        setMode("normal");
                        setToEdit(null);
                      }}
                    >
                      Save & Return
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
