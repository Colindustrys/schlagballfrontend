import React, { MouseEventHandler, FC } from 'react';
import styles from "../app/page.module.css"

interface myFunctions {
  loadData: MouseEventHandler
  saveData: MouseEventHandler
  clearCookies: MouseEventHandler
}

const TestComponent: React.FC<myFunctions> = ({loadData, saveData, clearCookies}) => {
  return (
    <div className='text-center text-lg font-bold'>
      <button className="bg-blue-400 nice-button my-2" onClick={loadData}>Spiel laden</button>
      <button className="mx-5 bg-green-400 nice-button my-2" onClick={saveData}>Spiel speichern</button>
      <button className="mx-5 bg-red-400 nice-button my-2" onClick={clearCookies}>Spiel löschen</button>
    </div>
  );
}

export default TestComponent;