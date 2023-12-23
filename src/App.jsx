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
      startDate: "2025-08-08",
      endDate: "2028-09-30",
      id: 0,
    },
  ]);
  const [educationId, setEducationId] = useState(educationList.length);
  const [educationOnView, setEducationOnView] = useState(null);
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
  const [educationEdit, setEducationEdit] = useState({
    schoolName: "Cool",
    fieldOfStudy: "",
    educationStartDate: "",
    educationEndDate: "",
  });

  function handleOnViewEducationEdit(name, value) {
    setEducationEdit({ ...educationEdit, [name]: value });
  }

  function handleOnChangePersonalInfoInput(e, property) {
    const value = e.target.value;
    setPersonalInfoInput({ ...personalInfoInput, [property]: value });
  }

  function handleOnChangeEducationInput(e, property) {
    const value = e.target.value;
    setEducationInput({ ...educationInput, [property]: value });
  }

  function handleOnChangeEducationEdit(e, property) {
    const value = e.target.value;
    setEducationEdit({ ...educationEdit, [property]: value });
  }

  function findEducationItemById(id) {
    return educationList.find((item) => item.id === id);
  }

  function handleOnClickEducationItemOnView(id) {
    setEducationOnView(id);
    setEducationEdit(findEducationItemById(id));
  }

  function handleOnClickDelete(id) {
    const result = educationList.filter((education) => education.id !== id);
    setEducationList(result);
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

  function handleOnSubmitEducationListEdit(e, id) {
    e.preventDefault();
    console.log(educationEdit);
    const filteredItem = educationList.filter((item) => item.id !== id);
    setEducationList([...filteredItem, { ...educationEdit, id: id }]);
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
