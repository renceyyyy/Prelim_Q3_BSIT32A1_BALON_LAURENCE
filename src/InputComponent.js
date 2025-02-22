import React, { useState } from "react";

const InputComponent = ({ onSubmit }) => {
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (lastname && firstname) {
      const fullName = `${lastname} ${firstname}`;
      setSubmittedValue(fullName);
      onSubmit(fullName);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={firstname}
        onChange={handleFirstNameChange}
        placeholder="First Name"
        onKeyPress={handleKeyPress}
      />
      <br></br>
      <input
        type="text"
        value={lastname}
        onChange={handleLastNameChange}
        placeholder="Last Name"
        onKeyPress={handleKeyPress}
      />
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
      <p>Fullname: {submittedValue}</p>
    </div>
  );
};

export default InputComponent;
