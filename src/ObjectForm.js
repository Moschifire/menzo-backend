// ObjectForm.js

import React, { useState } from "react";
import axios from "axios";

const ObjectForm = ({ updateObjects }) => {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: inputValue,
        }
      );
      console.log("Object saved:", response.data);
      updateObjects(); // Call the parent component function to update the list of objects
      setInputValue("");
    } catch (error) {
      console.error("Error saving object:", error);
    }
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
