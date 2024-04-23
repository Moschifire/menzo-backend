// ObjectList.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const ObjectList = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetchObjects();
  }, []);

  const fetchObjects = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setObjects(response.data);
    } catch (error) {
      console.error("Error fetching objects:", error);
    }
  };

  return (
    <div>
      <h2>Object List</h2>
      <ul>
        {objects.map((object) => (
          <li key={object.id}>{object.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;
