import { useState } from "react";

export default function GeneralInformation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("editing");

  const handleName = (e) => {
    e.preventDefault();
    const nameValue = e.target.elements.nameValue.value;
    const emailValue = e.target.elements.emailValue.value;
    const addressValue = e.target.elements.addressValue.value;
    setName(nameValue);
    setEmail(emailValue);
    setAddress(addressValue);
    setStatus("submitted");
  };

  const handleStatus = (e) => {
    e.preventDefault();
    setStatus("editing");
  };

  return (
    <div>
      <form onSubmit={handleName}>
        <p style={{ display: status === "editing" ? "none" : "inline" }}>
          Name: {name}
        </p>
        <label
          style={{ display: status === "submitted" ? "none" : "inline-block" }}
        >
          Name:
          <input name="nameValue" />
        </label>
        <br />
        <p style={{ display: status === "editing" ? "none" : "inline" }}>
          E-mail: {email}
        </p>
        <label
          style={{ display: status === "submitted" ? "none" : "inline-block" }}
        >
          E-mail:
          <input name="emailValue" />
        </label>
        <br />
        <p style={{ display: status === "editing" ? "none" : "inline" }}>
          Address: {address}
        </p>
        <label
          style={{ display: status === "submitted" ? "none" : "inline-block" }}
        >
          Address:
          <input name="addressValue" />
        </label>
        <br />
        <button
          style={{ display: status === "submitted" ? "none" : "inline-block" }}
          type="submit"
        >
          Submit
        </button>
        <button
          style={{ display: status === "editing" ? "none" : "inline-block" }}
          onClick={handleStatus}
        >
          Edit
        </button>
      </form>
    </div>
  );
}
