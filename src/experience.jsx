import Button from "./button";
import { useState } from "react";
import experienceIcon from "./assets/briefCase.svg";
import Input from "./input";
import deleteFOutline from "./assets/delete-f-outline.svg";
import TextArea from "./textarea";

function ExperienceForm({
  experienceInput,
  onSubmit = null,
  onClickOnViewHandler = null,
  cancel = { ariaLabel: null },
  Submit = { ariaLabel: null },
}) {
  return (
    <form className="experience-form" onSubmit={onSubmit}>
      <div>
        <Input
          id="company"
          text="Company"
          placeholder="Company name"
          inputVal={experienceInput.value.company}
          onChangeHandler={(e) => experienceInput.onChange(e, "company")}
        />
      </div>
      <div>
        <Input
          id="position-title"
          text="Position title"
          placeholder="Position title"
          inputVal={experienceInput.value.position}
          onChangeHandler={(e) => experienceInput.onChange(e, "position")}
        />
      </div>
      <div>
        <Input
          id="start-date"
          type="date"
          text="Start Date"
          inputVal={experienceInput.value.startDate}
          onChangeHandler={(e) => experienceInput.onChange(e, "startDate")}
        />
      </div>
      <div>
        <Input
          id="end-date"
          type="date"
          text="End Date"
          inputVal={experienceInput.value.endDate}
          onChangeHandler={(e) => experienceInput.onChange(e, "endDate")}
        />
      </div>
      <div>
        <TextArea
          id="description"
          text="Description"
          placeholder="Job Description"
          inputVal={experienceInput.value.description}
          onChangeHandler={(e) => experienceInput.onChange(e, "description")}
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

function createExperienceList({
  experienceEdit,
  experienceList,
  experienceOnView,
}) {
  return experienceList.value.map((experience) => {
    return (
      <li key={experience.id} className="experience-editable-container">
        <div className="experience-editable">
          <Button
            className="edit-experience"
            text={experience.company}
            onClick={() => experienceOnView.onClickView(experience.id)}
          />
          <div className="delete-experience">
            <Button
              className="delete-experience"
              onClick={() => experienceList.onClickDelete(experience.id)}
              ariaLabel={"edit " + experience.company + " experience"}
            >
              <img
                className="icon"
                src={deleteFOutline}
                alt={"delete " + experience.company + " item"}
              />
            </Button>
          </div>
        </div>
        {experienceOnView.id === experience.id && (
          <ExperienceForm
            experienceInput={experienceEdit}
            onClickOnViewHandler={() => experienceOnView.onClickView(null)}
            onSubmit={(e) => experienceList.onSubmitEdit(e, experience.id)}
            cancel={{
              ariaLabel:
                "close and cancel editing" +
                experienceEdit.company +
                experienceEdit.position,
            }}
            Submit={{
              ariaLabel:
                "submit edit" +
                +experienceEdit.company +
                experienceEdit.position,
            }}
          />
        )}
      </li>
    );
  });
}

function Experience({
  experienceEdit,
  experienceInput,
  experienceList,
  experienceOnView,
}) {
  const [onView, setOnView] = useState(false);

  function onClickOnViewHandler() {
    setOnView(!onView);
  }

  return (
    <div className="experience">
      <h1>
        Experience <img src={experienceIcon} alt="" className="icon-dec" />
      </h1>
      <ul className="experience-list">
        {createExperienceList({
          experienceEdit,
          experienceList,
          experienceOnView,
        })}
      </ul>
      {!onView ? (
        <Button
          className="add-experience"
          onClick={onClickOnViewHandler}
          text="Add Experience"
        />
      ) : (
        <section className="add-education-container">
          <h2>Add Experience info</h2>
          <ExperienceForm
            experienceInput={experienceInput}
            onSubmit={experienceList.onSubmit}
            onClickOnViewHandler={onClickOnViewHandler}
            cancel={{ ariaLabel: "close and cancel adding experience info" }}
            Submit={{ ariaLabel: "submit experience info" }}
          />
        </section>
      )}
    </div>
  );
}

export default Experience;
