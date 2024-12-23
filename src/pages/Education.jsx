import { useState } from "react";
import EducationItem from "../components/EducationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FormItem from "../components/FormItem";

const Education = ({ education, addEducation, deleteEducation }) => {
  const [mode, setMode] = useState("normal");
  const [newEducation, setNewEducation] = useState({
    degree: "",
    nameOfSchool: "",
    fieldOfStudy: "",
    location: "",
    startDate: "",
    endDate: "",
  });
  const [toEditId, setToEditId] = useState(null);

  const setAddMode = () => setMode("add");
  const setNormalMode = () => setMode("normal");
  const setEditMode = (e) => setMode("edit");

  return (
    <div>
      <div className="builder-section">
        <h1 className="builder-section-title">Education Section</h1>
        <div className="education-container">
          {mode === "normal" && (
            <>
              {education.map((edu) => (
                <EducationItem
                  edu={edu}
                  key={edu.id}
                  deleteEducation={deleteEducation}
                />
              ))}
              <button
                type="button"
                className="add-new-education-item-btn"
                onClick={setAddMode}
              >
                <FontAwesomeIcon icon={faPlus} /> Add Education Item
              </button>
            </>
          )}
          {mode === "add" && (
            <div className="new-education-item-form">
              <h3>Add New Education Item</h3>
              <FormItem
                htmlFor="degree"
                labelTxtContent="Degree"
                value={newEducation.degree}
                placeHolder="enter degre name"
                onChange={(e) =>
                  setNewEducation({ ...newEducation, degree: e.target.value })
                }
              />
              <FormItem
                htmlFor="nameOfSchool"
                labelTxtContent="Name Of School/Uni"
                value={newEducation.nameOfSchool}
                placeHolder="enter school's name"
                onChange={(e) =>
                  setNewEducation({
                    ...newEducation,
                    nameOfSchool: e.target.value,
                  })
                }
              />
              <FormItem
                htmlFor="fieldOfStudy"
                labelTxtContent="Field of Study"
                value={newEducation.fieldOfStudy}
                placeHolder="please enter the degree's field of study"
                onChange={(e) =>
                  setNewEducation({
                    ...newEducation,
                    fieldOfStudy: e.target.value,
                  })
                }
              />
              <FormItem
                htmlFor="location"
                labelTxtContent="Location"
                value={newEducation.location}
                placeHolder="please enter the location"
                onChange={(e) =>
                  setNewEducation({
                    ...newEducation,
                    location: e.target.value,
                  })
                }
              />
              <FormItem
                htmlFor="startDate"
                labelTxtContent="Start Date"
                value={newEducation.startDate}
                placeHolder="please enter the start date"
                onChange={(e) =>
                  setNewEducation({
                    ...newEducation,
                    startDate: e.target.value,
                  })
                }
              />
              <FormItem
                htmlFor="endDate"
                labelTxtContent="End Date"
                value={newEducation.endDate}
                placeHolder="please enter the end date"
                onChange={(e) =>
                  setNewEducation({
                    ...newEducation,
                    endDate: e.target.value,
                  })
                }
              />
              <div className="some-btns-container">
                <button
                  className="special-btn"
                  id="add-new-edu-btn"
                  onClick={() => {
                    addEducation(newEducation);
                    setNormalMode();
                    setNewEducation({
                      degree: "",
                      nameOfSchool: "",
                      fieldOfStudy: "",
                      location: "",
                      startDate: "",
                      endDate: "",
                    });
                  }}
                >
                  Add
                </button>
                <button
                  className="special-btn"
                  id="cancel-new-edu-btn"
                  onClick={() => setNormalMode()}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
