import { useState } from "react";
import EducationalExperienceDisplay from "./EducationalExperienceDisplay";

function handleEducationalExperience(
  e,
  setEducationalExperience,
  editingIndex,
  setEditingIndex,
  setFormState
) {
  e.preventDefault();

  const { degreeName, institutionName, yearFrom, yearTo } = e.target.elements;

  const newExperience = {
    degreeName: degreeName.value,
    institutionName: institutionName.value,
    yearFrom: yearFrom.value,
    yearTo: yearTo.value,
  };

  if (editingIndex === null) {
    setEducationalExperience((prevExperiences) => [
      ...prevExperiences,
      newExperience,
    ]);
  } else {
    setEducationalExperience((prevExperiences) =>
      prevExperiences.map((experience, index) => {
        return index === editingIndex ? newExperience : experience;
      })
    );
    setEditingIndex(null);
  }
  setFormState(
    (degreeName.value = ""),
    (institutionName.value = ""),
    (yearFrom.value = ""),
    (yearTo.value = "")
  );
}

function handleDeleteExperience(index, setEducationalExperience) {
  setEducationalExperience((prevExperiences) =>
    prevExperiences.filter((_, i) => i !== index)
  );
}

function handleEditExperience(
  index,
  educationalExperiences,
  setFormState,
  setEditingIndex
) {
  const experience = educationalExperiences[index];
  setFormState(experience);
  setEditingIndex(index);
}

export default function EducationalExperienceForm() {
  const [educationalExperiences, setEducationalExperience] = useState([]);
  const [formState, setFormState] = useState({
    degreeName: "",
    institutionName: "",
    yearFrom: "",
    yearTo: "",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  return (
    <>
      <div>
        <form
          onSubmit={(e) =>
            handleEducationalExperience(
              e,
              setEducationalExperience,
              editingIndex,
              setEditingIndex,
              setFormState
            )
          }
        >
          <label>
            Degree Name:
            <input
              name="degreeName"
              value={formState.degreeName}
              onChange={(e) =>
                setFormState({ ...formState, degreeName: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Institution Name:
            <input
              name="institutionName"
              value={formState.institutionName}
              onChange={(e) =>
                setFormState({ ...formState, institutionName: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Year from:
            <input
              name="yearFrom"
              value={formState.yearFrom}
              onChange={(e) =>
                setFormState({ ...formState, yearFrom: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Year to:
            <input
              name="yearTo"
              value={formState.yearTo}
              onChange={(e) =>
                setFormState({ ...formState, yearTo: e.target.value })
              }
            />
          </label>
          <br />
          <button type="submit">
            {editingIndex === null ? "Add experience" : "Update experience"}
          </button>
        </form>
        {educationalExperiences.map((experience, index) => (
          <EducationalExperienceDisplay
            key={index}
            {...experience}
            onDelete={() =>
              handleDeleteExperience(index, setEducationalExperience)
            }
            onEdit={() =>
              handleEditExperience(
                index,
                educationalExperiences,
                setFormState,
                setEditingIndex
              )
            }
          />
        ))}
      </div>
    </>
  );
}
