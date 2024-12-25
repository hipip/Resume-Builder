import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperienceItem = ({ exp, deleteExperience, setEditMode }) => {
  return (
    <div className="experience-item">
      <div>
        <p className="experience-job-title">{exp.jobTitle}</p>
        <p className="experience-dates">
          {exp.startDate} - {exp.endDate}
        </p>
      </div>
      <div className="experience-item-btns-container">
        <button
          type="button"
          className="edit-experience-btn"
          onClick={setEditMode}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          type="button"
          className="edit-experience-btn"
          onClick={() => deleteExperience(exp.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ExperienceItem;
