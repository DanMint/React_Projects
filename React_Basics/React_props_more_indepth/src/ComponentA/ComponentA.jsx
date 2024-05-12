import React, { useState } from 'react';
import ComponentB from '../ComponentB/ComponentB.jsx';

function ComponentA() {
  const [isComponentBVisible, setIsComponentBVisible] = useState(false);
  const [data, setData] = useState([]);  

  const handleNavigate = () => {
    setData(['Apple', 'Banana', 'Cherry']);
    setIsComponentBVisible(true); 
  };

  return (
    <div>
      {!isComponentBVisible ? (
        <>
          <h1>This is Component A</h1>
          <ul>
            {data.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <button onClick={handleNavigate}>Go to Component B</button>
        </>
      ) : (
        <ComponentB data={data} />
      )}
    </div>
  );
}

export default ComponentA;
