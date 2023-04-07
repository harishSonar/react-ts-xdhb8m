import * as React from 'react';
import './style.css';

function Child({ prevValue, currValue }) {
  const changeColor = () => {
    document.getElementById('childContainer').style.color = 'red';
  };

  return (
    <div id="childContainer">
      <h3> {`Previous Value ---  ${prevValue}`} </h3>
      <h3> {`Current Value---  ${currValue}`} </h3>
    </div>
  );
}

export default Child;
