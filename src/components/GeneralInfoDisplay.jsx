export default function GeneralInfoDisplay({ name, email, address }) {
  return (
    <div>
      <h2>General Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
}
