import React, { useState } from "react";
import "./App.css";
import ObjectForm from "./ObjectForm";
import ObjectList from "./ObjectList";

function App() {
  const [key, setKey] = useState(0); // State to force re-render of ObjectList
  const updateObjects = () => setKey((prevKey) => prevKey + 1); // Function to update ObjectList

  return (
    <div className="App">
      <ObjectForm updateObjects={updateObjects} />
      <ObjectList key={key} />
    </div>
  );
}

export default App;
