export default function EducationalExperienceDisplay({
  degreeName,
  institutionName,
  yearFrom,
  yearTo,
  onDelete,
  onEdit,
}) {
  return (
    <>
      <div>
        <h2>{degreeName}</h2>
        <h3>{institutionName}</h3>
        <p>
          {yearFrom} - {yearTo}
        </p>
        <button onClick={onDelete}>delete</button>
        <button onClick={onEdit}>Edit</button>
      </div>
    </>
  );
}
