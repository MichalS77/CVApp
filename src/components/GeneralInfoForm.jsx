import { useState } from "react";
import GeneralInfoDisplay from "./GeneralInfoDisplay";

function handleSubmit(e, setInfo) {
  e.preventDefault();
  const { nameValue, emailValue, addressValue } = e.target.elements;

  setInfo({
    name: nameValue.value,
    email: emailValue.value,
    address: addressValue.value,
  });
}
export default function GeneralInfoForm() {
  const [info, setInfo] = useState({ name: "", email: "", addres: "" });

  return (
    <>
      <div id="generalInfo">
        <form onSubmit={(e) => handleSubmit(e, setInfo)}>
          <label>Name:</label>
          <input name="nameValue" />
          <br />
          <label>
            E-mail:
            <input name="emailValue" />
          </label>
          <br />
          <label>
            Address:
            <input name="addressValue" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <GeneralInfoDisplay {...info} />
    </>
  );
}
