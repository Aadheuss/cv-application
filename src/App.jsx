import { useState } from "react";
import "./App.css";
import PersonalInfo from "./personal-info";
import CV from "./cv";
import Education from "./education";

function App() {
  const [educationList, setEducationList] = useState([
    {
      schoolName: "Harvard",
      fieldOfStudy: "Physics",
      educationStartDate: "2025-08-08",
      educationEndDate: "2028-09-30",
      id: 0,
    },
  ]);
  const [educationId, setEducationId] = useState(educationList.length);
  const [educationOnView, setEducationOnView] = useState(null);
  const [personalInfoInput, setPersonalInfoInput] = useState({
    name: "Archer Aeren",
    email: "ArcherAeren@gmail.com",
    phone: "123456789",
    address: "Berlin, german",
  });
  const [educationInput, setEducationInput] = useState({
    schoolName: "MIT",
    fieldOfStudy: "Computer science",
    startDate: "2025-06-09",
    endDate: "2028-07-08",
  });
  const [educationEdit, setEducationEdit] = useState({
    schoolName: "",
    fieldOfStudy: "",
    educationStartDate: "",
    educationEndDate: "",
  });

  function handleOnViewEducationEdit(name, value) {
    setEducationEdit({ ...educationEdit, [name]: value });
  }

  function handleOnChangePersonalInfoInput(e, property) {
    const value = e.target.value;
    setEducationInput({ ...personalInfoInput, [property]: value });
  }

  function handleOnChangeEducationInput(e, property) {
    const value = e.target.value;
    setEducationInput({ ...educationInput, [property]: value });
  }

  function findEducationItemById(id) {
    return educationList.filter((item) => {
      return item.id === id;
    });
  }

  function handleOnCLickEducationOnView(id) {
    setEducationOnView(id);
  }

  function handleOnClickDelete(id) {
    const result = educationList.filter((education) => education.id !== id);
    setEducationList(result);
  }

  function handleOnSubmitEducationList(e) {
    e.preventDefault();
    // setEducationList([
    //   ...educationList,
    //   {
    //     schoolName,
    //     fieldOfStudy,
    //     educationStartDate,
    //     educationEndDate,
    //     id: educationId,
    //   },
    // ]);
    // setSchoolName("");
    // setFieldOfStudy("");
    // setEducationStartDate("");
    // setEducationEndDate("");
    // setEducationId(educationId + 1);
  }

  function handleOnSubmitEducationListEdit(e) {
    e.preventDefault();
    // setEducationList([
    //   ...educationList,
    //   {
    //     schoolName,
    //     fieldOfStudy,
    //     educationStartDate,
    //     educationEndDate,
    //     id: educationId,
    //   },
    // ]);
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
            educationList={{
              value: educationList,
              onSubmit: handleOnSubmitEducationList,
              onSubmitEdit: handleOnSubmitEducationListEdit,
              onClickDelete: handleOnClickDelete,
            }}
            educationOnView={{
              id: educationOnView,
              value: educationEdit,
              onClickEducation: handleOnCLickEducationOnView,
              onClickEducationEdit: handleOnViewEducationEdit,
            }}
          />
        </div>
      </main>
      <CV
        personalInfoInput={personalInfoInput}
        educationInput={educationInput}
        educationList={educationList}
      />
    </>
  );
}

export default App;
