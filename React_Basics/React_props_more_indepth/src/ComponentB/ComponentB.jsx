import React from 'react';

function ComponentB({ data }) {

    console.log(data);

  return (
    <div>
      <h1>This is Component B</h1>
      <ul>
        {data.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default ComponentB;
