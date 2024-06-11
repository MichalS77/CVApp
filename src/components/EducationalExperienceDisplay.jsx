export default function EducationalExperienceDisplay({
  degreeName,
  institutionName,
  yearFrom,
  yearTo,
  onDelete,
}) {
  return (
    <>
      <div>
        <p>Degree: {degreeName}</p>
        <p>InstitutionName: {institutionName}</p>
        <p>
          {yearFrom} - {yearTo}
        </p>
        <button onClick={onDelete}>delete</button>
      </div>
    </>
  );
}
