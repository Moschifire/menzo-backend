// ObjectList.js

import React from 'react';

const ObjectList = ({ objects }) => {
  return (
    <div>
      <h2>Object List</h2>
      <ul>
        {objects.map((object, index) => (
          <li key={index}>{object}</li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;
