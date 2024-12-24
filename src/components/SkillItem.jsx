import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillItem = ({ skill, deleteSkill }) => {
  return (
    <div className="skill-item-setup">
      <div className="idk-wtf-am-i-doing">
        <p>{skill.name}</p>
      </div>

      <div className="skill-item-btns-container">
        <button
          id="delete-skill-item-btn"
          onClick={() => deleteSkill(skill.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default SkillItem;
