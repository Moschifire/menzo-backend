// ObjectForm.js

import React, { useState } from "react";

const ObjectForm = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending the object data to the API
    console.log("Submitted:", inputValue);
    // Clear input field
    setInputValue("");
  };

  return (
    <div>
      <h2>Object Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter object..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ObjectForm;
