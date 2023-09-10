import React, { MouseEventHandler, FC } from 'react';
import styles from "../app/page.module.css"

interface myFunctions {
  loadData: MouseEventHandler
  saveData: MouseEventHandler
}

const TestComponent: React.FC<myFunctions> = ({loadData, saveData}) => {
  return (
    <div>
      <button className="main" onClick={loadData}>load</button>
      <button onClick={saveData}>save</button>
    </div>
  );
}

export default TestComponent;