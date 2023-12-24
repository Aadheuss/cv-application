import { useState } from "react";
import "./App.css";
import PersonalInfo from "./personal-info";
import CV from "./cv";
import Education from "./education";
import Experience from "./experience";

function App() {
  const [educationList, setEducationList] = useState([
    {
      schoolName: "Harvard",
      fieldOfStudy: "Physics",
      startDate: "2025-08-08",
      endDate: "2028-09-30",
      id: 0,
    },
  ]);
  const [experienceList, setExperienceList] = useState([
    {
      company: "Facebook",
      position: "UI/UX Designer",
      startDate: "2020-08-09",
      endDate: "2021-09-01",
      description: "Responsibily to create a responsive and great design",
      id: 0,
    },
  ]);
  const [educationId, setEducationId] = useState(educationList.length);
  const [experienceId, setExperienceId] = useState(experienceList.length);
  const [educationOnView, setEducationOnView] = useState(null);
  const [experienceOnView, setExperienceOnView] = useState(null);
  const [personalInfoInput, setPersonalInfoInput] = useState({
    name: "Alexander köhler",
    email: "Alaxenderköhler@gmail.com",
    phone: "123456789",
    address: "Berlin, germany",
  });
  const [educationInput, setEducationInput] = useState({
    schoolName: "MIT",
    fieldOfStudy: "Computer science",
    startDate: "2025-06-09",
    endDate: "2028-07-08",
  });
  const [experienceInput, setExperienceInput] = useState({
    company: "Google",
    position: "Fullstack developer",
    startDate: "2025-06-09",
    endDate: "",
    description: "",
  });

  const [educationEdit, setEducationEdit] = useState({
    schoolName: "",
    fieldOfStudy: "",
    educationStartDate: "",
    educationEndDate: "",
  });

  const [experienceEdit, setExperienceEdit] = useState({
    company: "",
    position: "",
    educationStartDate: "",
    educationEndDate: "",
    description: "",
  });

  function handleOnChangePersonalInfoInput(e, property) {
    const value = e.target.value;
    setPersonalInfoInput({ ...personalInfoInput, [property]: value });
  }

  function handleOnChangeEducationInput(e, property) {
    const value = e.target.value;
    setEducationInput({ ...educationInput, [property]: value });
  }

  function handleOnChangeExperienceInput(e, property) {
    const value = e.target.value;
    setExperienceInput({ ...experienceInput, [property]: value });
  }

  function handleOnChangeEducationEdit(e, property) {
    const value = e.target.value;
    setEducationEdit({ ...educationEdit, [property]: value });
  }

  function handleOnChangeExperienceEdit(e, property) {
    const value = e.target.value;
    setExperienceEdit({ ...experienceEdit, [property]: value });
  }

  function findEducationItemById(id) {
    return educationList.find((item) => item.id === id);
  }

  function findExperienceItemById(id) {
    return experienceList.find((item) => item.id === id);
  }

  function handleOnClickEducationItemOnView(id) {
    setEducationOnView(id);
    setEducationEdit(findEducationItemById(id));
  }

  function handleOnClickExperienceItemOnView(id) {
    setExperienceOnView(id);
    setExperienceEdit(findExperienceItemById(id));
  }

  function handleOnClickDelete(id) {
    const result = educationList.filter((education) => education.id !== id);
    setEducationList(result);
  }

  function handleOnClickExperienceDelete(id) {
    const result = experienceList.filter((experience) => experience.id !== id);
    setExperienceList(result);
  }

  function handleOnSubmitEducationList(e) {
    e.preventDefault();
    setEducationList([
      ...educationList,
      { ...educationInput, id: educationId },
    ]);
    setEducationInput({
      schoolName: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    });
    setEducationId(educationId + 1);
  }

  function handleOnSubmitExperienceList(e) {
    e.preventDefault();
    setExperienceList([
      ...experienceList,
      { ...experienceInput, id: experienceId },
    ]);
    setExperienceInput({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setExperienceId(experienceId + 1);
  }

  function handleOnSubmitEducationListEdit(e, id) {
    e.preventDefault();
    const filteredItem = educationList.filter((item) => item.id !== id);
    setEducationList([...filteredItem, { ...educationEdit, id: id }]);
  }

  function handleOnSubmitExperienceListEdit(e, id) {
    e.preventDefault();
    const filteredItem = experienceList.filter((item) => item.id !== id);
    setExperienceList([...filteredItem, { ...experienceEdit, id: id }]);
  }

  return (
    <>
      <main>
        <div className="personal-info-container">
          <PersonalInfo
            personalInfoInput={{
              value: personalInfoInput,
              onChange: handleOnChangePersonalInfoInput,
            }}
          />
          <Education
            educationInput={{
              value: educationInput,
              onChange: handleOnChangeEducationInput,
            }}
            educationEdit={{
              value: educationEdit,
              onChange: handleOnChangeEducationEdit,
            }}
            educationList={{
              value: educationList,
              onSubmit: handleOnSubmitEducationList,
              onSubmitEdit: handleOnSubmitEducationListEdit,
              onClickDelete: handleOnClickDelete,
            }}
            educationOnView={{
              id: educationOnView,
              input: findEducationItemById,
              onClickView: handleOnClickEducationItemOnView,
            }}
          />
          <Experience
            experienceInput={{
              value: experienceInput,
              onChange: handleOnChangeExperienceInput,
            }}
            experienceEdit={{
              value: experienceEdit,
              onChange: handleOnChangeExperienceEdit,
            }}
            experienceList={{
              value: experienceList,
              onSubmit: handleOnSubmitExperienceList,
              onSubmitEdit: handleOnSubmitExperienceListEdit,
              onClickDelete: handleOnClickExperienceDelete,
            }}
            experienceOnView={{
              id: experienceOnView,
              input: findExperienceItemById,
              onClickView: handleOnClickExperienceItemOnView,
            }}
          />
        </div>
      </main>
      <CV
        personalInfoInput={personalInfoInput}
        educationInput={educationInput}
        educationList={educationList}
        experienceInput={experienceInput}
        experienceList={experienceList}
        educationEdit={educationEdit}
        educationOnView={{
          id: educationOnView,
        }}
        experienceEdit={experienceEdit}
        experienceOnView={{
          id: experienceOnView,
        }}
      />
    </>
  );
}

export default App;
