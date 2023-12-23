import emailIcon from "./assets/email.svg";
import phoneIcon from "./assets/phone.svg";
import mapMarkerIcon from "./assets/map-marker.svg";
import { format } from "date-fns";

function formatDate(date) {
  return date ? format(new Date(date), "MMMM Q yyyy") : null;
}

function EducationItem({
  schoolName,
  fieldOfStudy,
  educationStartDate,
  educationEndDate,
}) {
  return (
    <>
      <div>
        <h3>{schoolName}</h3>
        <div>{fieldOfStudy}</div>
      </div>
      <div>
        <div>
          {formatDate(educationStartDate)} {educationStartDate !== "" && "-"}
          {formatDate(educationEndDate)}
        </div>
      </div>
    </>
  );
}

function createEducationList(educationList) {
  console.log(educationList);
  return educationList.map((education) => (
    <li key={education.id} className="education-item">
      <EducationItem
        schoolName={education.schoolName}
        fieldOfStudy={education.fieldOfStudy}
        educationStartDate={education.startDate}
        educationEndDate={education.endDate}
      />
    </li>
  ));
}

function CV({ personalInfoInput, educationInput, educationList }) {
  function isNotEmpty(value) {
    return value !== "";
  }

  return (
    <article className="cv">
      <header className="cv-heading">
        <h1>{personalInfoInput.name}</h1>
        <div className="contact-info">
          <div>
            {isNotEmpty(personalInfoInput.email) ? (
              <img className="icon-dec" src={emailIcon} alt="email" />
            ) : null}
            {personalInfoInput.email}
          </div>
          <div>
            {isNotEmpty(personalInfoInput.phone) ? (
              <img className="icon-dec" src={phoneIcon} alt="phone" />
            ) : null}
            {personalInfoInput.phone}
          </div>
          <div>
            {isNotEmpty(personalInfoInput.address) ? (
              <img className="icon-dec" src={mapMarkerIcon} alt="location" />
            ) : null}
            {personalInfoInput.address}
          </div>
        </div>
      </header>
      <div className="cv-body">
        <section className="cv-education">
          <h2>Education</h2>
          <ul className="cv-education-list">
            {createEducationList(educationList)}
            <li className="education-item" key="static">
              <EducationItem
                schoolName={educationInput.schoolName}
                fieldOfStudy={educationInput.fieldOfStudy}
                educationStartDate={educationInput.startDate}
                educationEndDate={educationInput.endDate}
              />
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default CV;
