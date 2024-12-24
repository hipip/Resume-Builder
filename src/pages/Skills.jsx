import { useState } from "react";
import SkillItem from "../components/SkillItem";
import FormItem from "../components/FormItem";

const Skills = ({ skills, addSkill, deleteSkill }) => {
  const [mode, setMode] = useState("normal");
  const [newSkillName, setNewSkillName] = useState("");

  return (
    <div>
      <div className="builder-section">
        <h1 className="builder-section-title">Skills Section</h1>
        <div className="skills-setup-container">
          {(mode === "normal" || mode === "add") && (
            <>
              {skills.map((skill) => (
                <SkillItem
                  key={skill.id}
                  skill={skill}
                  deleteSkill={deleteSkill}
                />
              ))}
            </>
          )}
        </div>
        {mode === "normal" && (
          <div>
            <button
              className="special-btn"
              id="add-skill-btn"
              onClick={() => setMode("add")}
            >
              Add skill
            </button>
          </div>
        )}
        {mode === "add" && (
          <>
            <FormItem
              htmlFor="new-skill-name"
              placeHolder="enter skill/technology name"
              value={newSkillName}
              onChange={(e) => setNewSkillName(e.target.value)}
            />
            <div>
              <button
                className="special-btn"
                id="confirm-add-skill-btn"
                onClick={() => {
                  if (newSkillName !== "") {
                    addSkill(newSkillName);
                    setMode("normal");
                    setNewSkillName("");
                  }
                }}
              >
                Add
              </button>
              <button
                className="special-btn"
                id="cancel-add-skill-btn"
                onClick={() => {
                  setMode("normal");
                  setNewSkillName("");
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
