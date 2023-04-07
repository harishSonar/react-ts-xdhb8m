import * as React from 'react';
import './style.css';
import Child from './Child';
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
      <button onClick={() => {}}>Change Value</button>
      <Child prevValue={prevValue} currValue={currValue} />
      <button onClick={() => {}}>Change Color</button>
    </div>
  );
}
