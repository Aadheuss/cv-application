import emailIcon from "./assets/email.svg";
import phoneIcon from "./assets/phone.svg";
import mapMarkerIcon from "./assets/map-marker.svg";
import { format } from "date-fns";

function formatDate(date) {
  return date ? format(new Date(date), "MMMM d yyyy") : null;
}

function EducationItem({ schoolName, fieldOfStudy, startDate, endDate }) {
  return (
    <>
      <div>
        <h3>{schoolName}</h3>
        <div>{fieldOfStudy}</div>
      </div>
      <div>
        <div>
          {formatDate(startDate)} {startDate !== "" && "-"}
          {endDate !== ""
            ? ` ${formatDate(endDate)}`
            : startDate !== ""
            ? " present"
            : null}
        </div>
      </div>
    </>
  );
}

function ExperienceItem({
  company,
  position,
  startDate,
  endDate,
  description,
}) {
  return (
    <>
      <div>
        <h3>{company}</h3>
        <div className="position">{position}</div>
        <p className="desc">{description}</p>
      </div>
      <div>
        <div>
          {formatDate(startDate)} {startDate !== "" && "-"}
          {endDate !== ""
            ? ` ${formatDate(endDate)}`
            : startDate !== ""
            ? " present"
            : null}
        </div>
      </div>
    </>
  );
}

function createEducationList(list, educationOnView, educationEdit) {
  return list.map((education) => (
    <li key={education.id} className="education-item">
      {educationOnView.id === education.id ? (
        <EducationItem
          schoolName={educationEdit.schoolName}
          fieldOfStudy={educationEdit.fieldOfStudy}
          startDate={educationEdit.startDate}
          endDate={educationEdit.endDate}
        />
      ) : (
        <EducationItem
          schoolName={education.schoolName}
          fieldOfStudy={education.fieldOfStudy}
          startDate={education.startDate}
          endDate={education.endDate}
        />
      )}
    </li>
  ));
}

function createExperienceList(list, experienceOnView, experienceEdit) {
  return list.map((experience) => (
    <li key={experience.id} className="experience-item">
      {experienceOnView.id === experience.id ? (
        <ExperienceItem
          company={experienceEdit.company}
          position={experienceEdit.position}
          startDate={experienceEdit.startDate}
          endDate={experienceEdit.endDate}
          description={experienceEdit.description}
        />
      ) : (
        <ExperienceItem
          company={experience.company}
          position={experience.position}
          startDate={experience.startDate}
          endDate={experience.endDate}
          description={experience.description}
        />
      )}
    </li>
  ));
}

function CV({
  personalInfoInput,
  educationInput,
  educationList,
  experienceInput,
  experienceList,
  educationOnView,
  educationEdit,
  experienceOnView,
  experienceEdit,
}) {
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
            {createEducationList(educationList, educationOnView, educationEdit)}
            <li className="education-item" key="static">
              <EducationItem
                schoolName={educationInput.schoolName}
                fieldOfStudy={educationInput.fieldOfStudy}
                startDate={educationInput.startDate}
                endDate={educationInput.endDate}
              />
            </li>
          </ul>
        </section>
        <section className="cv-experience">
          <h2>experience</h2>
          <ul className="cv-experience-list">
            {createExperienceList(
              experienceList,
              experienceOnView,
              experienceEdit
            )}
            <li className="experience-item" key="static">
              <ExperienceItem
                company={experienceInput.company}
                position={experienceInput.position}
                startDate={experienceInput.startDate}
                endDate={experienceInput.endDate}
                description={experienceInput.description}
              />
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default CV;
