import * as React from 'react';
import './style.css';
// import { useCustomState } from './useCustomState.hooks';

export default function App() {
  let currentValue = '';
  const setCurrentValue = (value) => {
    [(currentValue = value)];
  };

  // Currently hardcoded, To be removed after implementation
  const prevValue = 'To display old Value';
  const currValue = 'To display current Value';

  return (
    <div>
      <input onChange={(e) => setCurrentValue(e.target.value)} />
      <button onClick={() => {}}>Change Name</button>
      <h3> {`Previous Name ---  ${prevValue}`} </h3>
      <h3> {`Current Name ---  ${currValue}`} </h3>
    </div>
  );
}
