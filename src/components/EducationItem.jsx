import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EducationItem = ({ edu, deleteEducation, setEditMode }) => {
  const { degree, nameOfSchool, startDate, endDate } = edu;
  return (
    <div className="education-item">
      <div>
        <p className="education-degree-school">
          {degree} - {nameOfSchool}
        </p>
        <p className="eduaction-dates">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="education-item-btns-container">
        <button
          type="button"
          className="edit-education-btn"
          onClick={setEditMode}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          type="button"
          className="delete-education-btn"
          onClick={() => deleteEducation(edu.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default EducationItem;
