import { useState } from "react";
import EducationItem from "../components/EducationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FormItem from "../components/FormItem";

const Education = ({
  education,
  addEducation,
  deleteEducation,
  setEducation,
}) => {
  const [mode, setMode] = useState("normal");
  const [newEducation, setNewEducation] = useState({
    degree: "",
    nameOfSchool: "",
    fieldOfStudy: "",
    location: "",
    startDate: "",
    endDate: "",
  });
  const [toEdit, setToEdit] = useState(null);

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
                  setEditMode={() => {
                    setEditMode();
                    setToEdit(education.find((e) => e.id === edu.id));
                  }}
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
          {(mode === "add" || mode === "edit") && (
            <div className="new-education-item-form">
              <h3>{mode === "add" ? "Add New" : "Edit"} Education Item</h3>
              <FormItem
                htmlFor="degree"
                labelTxtContent="Degree"
                value={mode === "add" ? newEducation.degree : toEdit.degree}
                placeHolder="enter degree name"
                onChange={(e) => {
                  if (mode === "add")
                    setNewEducation({
                      ...newEducation,
                      degree: e.target.value,
                    });
                  else if (mode === "edit") {
                    setToEdit({ ...toEdit, degree: e.target.value });
                    setEducation([
                      ...education.filter((e) => e.id !== toEdit.id),
                      { ...toEdit, degree: e.target.value },
                    ]);
                  }
                }}
              />
              <FormItem
                htmlFor="nameOfSchool"
                labelTxtContent="Name Of School/Uni"
                value={
                  mode === "add"
                    ? newEducation.nameOfSchool
                    : toEdit.nameOfSchool
                }
                placeHolder="enter school's name"
                onChange={(e) => {
                  if (mode === "add")
                    setNewEducation({
                      ...newEducation,
                      nameOfSchool: e.target.value,
                    });
                  else if (mode === "edit") {
                    setToEdit({ ...toEdit, nameOfSchool: e.target.value });
                    setEducation([
                      ...education.filter((e) => e.id !== toEdit.id),
                      { ...toEdit, nameOfSchool: e.target.value },
                    ]);
                  }
                }}
              />
              <FormItem
                htmlFor="fieldOfStudy"
                labelTxtContent="Field of Study"
                value={
                  mode === "add"
                    ? newEducation.fieldOfStudy
                    : toEdit.fieldOfStudy
                }
                placeHolder="please enter the degree's field of study"
                onChange={(e) => {
                  if (mode === "add")
                    setNewEducation({
                      ...newEducation,
                      fieldOfStudy: e.target.value,
                    });
                  else if (mode === "edit") {
                    setToEdit({ ...toEdit, fieldOfStudy: e.target.value });
                    setEducation([
                      ...education.filter((e) => e.id !== toEdit.id),
                      { ...toEdit, fieldOfStudy: e.target.value },
                    ]);
                  }
                }}
              />
              <FormItem
                htmlFor="location"
                labelTxtContent="Location"
                value={mode === "add" ? newEducation.location : toEdit.location}
                placeHolder="please enter the location"
                onChange={(e) => {
                  if (mode === "add")
                    setNewEducation({
                      ...newEducation,
                      location: e.target.value,
                    });
                  else if (mode === "edit") {
                    setToEdit({ ...toEdit, location: e.target.value });
                    setEducation([
                      ...education.filter((e) => e.id !== toEdit.id),
                      { ...toEdit, location: e.target.value },
                    ]);
                  }
                }}
              />
              <FormItem
                htmlFor="startDate"
                labelTxtContent="Start Date"
                value={
                  mode === "add" ? newEducation.startDate : toEdit.startDate
                }
                placeHolder="please enter the start date"
                onChange={(e) => {
                  if (mode === "add")
                    setNewEducation({
                      ...newEducation,
                      startDate: e.target.value,
                    });
                  else if (mode === "edit") {
                    setToEdit({ ...toEdit, startDate: e.target.value });
                    setEducation([
                      ...education.filter((e) => e.id !== toEdit.id),
                      { ...toEdit, startDate: e.target.value },
                    ]);
                  }
                }}
              />
              <FormItem
                htmlFor="endDate"
                labelTxtContent="End Date"
                value={mode === "add" ? newEducation.endDate : toEdit.endDate}
                placeHolder="please enter the end date"
                onChange={(e) => {
                  if (mode === "add")
                    setNewEducation({
                      ...newEducation,
                      endDate: e.target.value,
                    });
                  else if (mode === "edit") {
                    setToEdit({ ...toEdit, endDate: e.target.value });
                    setEducation([
                      ...education.filter((e) => e.id !== toEdit.id),
                      { ...toEdit, endDate: e.target.value },
                    ]);
                  }
                }}
              />
              <div className="some-btns-container">
                {mode === "add" && (
                  <>
                    <button
                      className="special-btn"
                      id="add-new-edu-btn"
                      onClick={() => {
                        if (addEducation(newEducation)) {
                          setNormalMode();
                          setNewEducation({
                            degree: "",
                            nameOfSchool: "",
                            fieldOfStudy: "",
                            location: "",
                            startDate: "",
                            endDate: "",
                          });
                        }
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
                  </>
                )}
                {mode === "edit" && (
                  <button
                    className="special-btn"
                    id="save-and-return-edu"
                    onClick={() => {
                      setNormalMode();
                      setToEdit(null);
                    }}
                  >
                    Save & return
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
