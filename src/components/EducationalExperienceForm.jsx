import { useState } from "react";
import EducationalExperienceDisplay from "./EducationalExperienceDisplay";

function handleEducationalExperience(e, setEducationalExperience) {
  e.preventDefault();

  const { degreeName, institutionName, yearFrom, yearTo } = e.target.elements;

  const newExperience = {
    degreeName: degreeName.value,
    institutionName: institutionName.value,
    yearFrom: yearFrom.value,
    yearTo: yearTo.value,
  };

  setEducationalExperience((prevExperiences) => [
    ...prevExperiences,
    newExperience,
  ]);
}

function handleDeleteExperience(index, setEducationalExperience) {
  setEducationalExperience((prevExperiences) =>
    prevExperiences.filter((_, i) => i !== index)
  );
}

export default function EducationalExperienceForm() {
  const [educationalExperiences, setEducationalExperience] = useState([]);
  return (
    <>
      <div>
        <form
          onSubmit={(e) =>
            handleEducationalExperience(e, setEducationalExperience)
          }
        >
          <label>
            Degree Name:
            <input name="degreeName" />
          </label>
          <br />
          <label>
            Institution Name:
            <input name="institutionName" />
          </label>
          <br />
          <label>
            Year from:
            <input name="yearFrom" />
          </label>
          <br />
          <label>
            Year to:
            <input name="yearTo" />
          </label>
          <br />
          <button type="submit">Add experience</button>
        </form>
        {educationalExperiences.map((experience, index) => (
          <EducationalExperienceDisplay
            key={index}
            {...experience}
            onDelete={() =>
              handleDeleteExperience(index, setEducationalExperience)
            }
          />
        ))}
      </div>
    </>
  );
}
