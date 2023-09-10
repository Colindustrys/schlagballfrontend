import React, { MouseEventHandler, FC } from 'react';

interface myFunctions {
  loadData: MouseEventHandler
  saveData: MouseEventHandler
}

const TestComponent: React.FC<myFunctions> = ({loadData, saveData}) => {
  return (
    <div>
      <button onClick={loadData}>load</button>
      <button onClick={saveData}>save</button>
    </div>
  );
}

export default TestComponent;