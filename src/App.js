import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";

const App = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (submittedValue) => {
    setItems([...items, submittedValue]);
  };

  return (
    <div>
      <InputComponent onSubmit={handleSubmit} />
      {/* <ListComponent items={items} /> */}
    </div>
  );
};

export default App;
