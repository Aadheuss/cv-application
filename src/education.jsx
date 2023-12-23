import Input from "./input";
import Button from "./button";
import educationIcon from "./assets/school.svg";
import deleteFOutline from "./assets/delete-f-outline.svg";
import { useState } from "react";

function EducationForm({
  educationInput,
  onSubmit = null,
  onClickOnViewHandler = null,
  cancel = { ariaLabel: null },
  Submit = { ariaLabel: null },
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
          ariaLabel={cancel.arialabel}
          text={"cancel"}
          onClick={onClickOnViewHandler}
        />
        <Button
          className="save"
          type="submit"
          ariaLabel={Submit.ariaLabel}
          text={"save"}
        />
      </div>
    </form>
  );
}

function createEducationList({
  educationEdit,
  educationList,
  educationOnView,
}) {
  return educationList.value.map((education) => {
    return (
      <li key={education.id} className="education-editable-container">
        <div className="education-editable">
          <Button
            className="edit-education"
            text={education.schoolName}
            onClick={() => educationOnView.onClickView(education.id)}
          />
          <div className="delete-education">
            <Button
              className="delete-education"
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
        {educationOnView.id === education.id && (
          <EducationForm
            educationInput={educationEdit}
            onClickOnViewHandler={() => educationOnView.onClickView(null)}
            onSubmit={(e) => educationList.onSubmitEdit(e, education.id)}
            cancel={{
              ariaLabel:
                "close and cancel editing" +
                educationEdit.schoolName +
                educationEdit.fieldOfStudy,
            }}
            Submit={{
              ariaLabel:
                "submit edit" +
                +educationEdit.schoolName +
                educationEdit.fieldOfStudy,
            }}
          />
        )}
      </li>
    );
  });
}

function Education({
  educationEdit,
  educationInput,
  educationList,
  educationOnView,
}) {
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
          educationEdit,
          educationList,
          educationOnView,
        })}
      </ul>
      {!onView ? (
        <Button
          className="add-education"
          onClick={onClickOnViewHandler}
          text="Add Education"
        />
      ) : (
        <section className="add-education-container">
          <h2>Add Education info</h2>
          <EducationForm
            educationInput={educationInput}
            onSubmit={educationList.onSubmit}
            onClickOnViewHandler={onClickOnViewHandler}
            cancel={{ ariaLabel: "close and cancel adding education info" }}
            Submit={{ ariaLabel: "submit education info" }}
          />
        </section>
      )}
    </div>
  );
}

export default Education;
