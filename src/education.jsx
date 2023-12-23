import Input from "./input";
import Button from "./button";
import educationIcon from "./assets/school.svg";
import deleteFOutline from "./assets/delete-f-outline.svg";
import { useState } from "react";

function EducationForm({
  educationInput,
  onSubmit = null,
  onClickOnViewHandler = null,
}) {
  return (
    <form className="education-form" onSubmit={onSubmit}>
      <div>
        <Input
          id="school-name"
          text="School"
          placeholder="School/ university"
          inputVal={educationInput.value.schoolName}
          onChangeHandler={(e) => educationInput.onChange(e, "schoolName")}
        />
      </div>
      <div>
        <Input
          id="titleOfStudy"
          text="Degree"
          placeholder="Degree / Field of Study"
          inputVal={educationInput.value.fieldOfStudy}
          onChangeHandler={(e) => educationInput.onChange(e, "fieldOfStudy")}
        />
      </div>
      <div>
        <Input
          id="start-date"
          type="date"
          text="Start Date"
          inputVal={educationInput.value.startDate}
          onChangeHandler={(e) => educationInput.onChange(e, "startDate")}
        />
      </div>
      <div>
        <Input
          id="end-date"
          type="date"
          text="End Date"
          inputVal={educationInput.value.endDate}
          onChangeHandler={(e) => educationInput.onChange(e, "endDate")}
        />
      </div>
      <div className="button-container">
        <Button
          className="cancel"
          ariaLabel={"cancel education info"}
          text={"cancel"}
          onClick={onClickOnViewHandler}
        />
        <Button
          className="save"
          type="submit"
          ariaLabel={"save education info"}
          text={"save"}
        />
      </div>
    </form>
  );
}

function createEducationList({
  educationInput,
  educationList,
  educationOnView,
}) {
  return educationList.value.map((education) => {
    return (
      <li key={education.id} className={education.id}>
        <div className="education-editable">
          <Button
            text={education.schoolName}
            onClick={() => educationOnView.onClickEducation(education.id)}
          />
          <div className="delete-education">
            <Button
              onClick={() => educationList.onClickDelete(education.id)}
              ariaLabel={"edit " + education.schoolName + " education"}
            >
              <img
                className="icon"
                src={deleteFOutline}
                alt={"delete " + education.schoolName + " item"}
              />
            </Button>
          </div>
        </div>
      </li>
    );
  });
}

function Education({ educationInput, educationList, educationOnView }) {
  const [onView, setOnView] = useState(false);

  function onClickOnViewHandler() {
    setOnView(!onView);
  }

  return (
    <div className="education">
      <h1>
        Education <img src={educationIcon} alt="" className="icon-dec" />
      </h1>
      <ul className="education-list">
        {createEducationList({
          educationInput,
          educationList,
          educationOnView,
        })}
        {!onView ? (
          <Button onClick={onClickOnViewHandler} text="Add Education" />
        ) : (
          <EducationForm
            educationInput={educationInput}
            onSubmit={educationList.onSubmit}
            onClickOnViewHandler={onClickOnViewHandler}
          />
        )}
      </ul>
    </div>
  );
}

export default Education;
