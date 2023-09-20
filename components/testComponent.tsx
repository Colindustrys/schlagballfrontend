import React, { MouseEventHandler, FC } from 'react';
import styles from "../app/page.module.css"

interface myFunctions {
  loadData: MouseEventHandler
  saveData: MouseEventHandler
  clearCookies: MouseEventHandler
}

const TestComponent: React.FC<myFunctions> = ({loadData, saveData, clearCookies}) => {
  return (
    <div className='text-center text-lg'>
      <button className="mx-5 bg-blue-400 py-5 px-5 rounded-full" onClick={loadData}>load</button>
      <button className="mx-5 bg-green-400 py-5 px-5 rounded-full" onClick={saveData}>save</button>
      <button className="mx-5 bg-red-500 py-5 px-5 rounded-full" onClick={clearCookies}>delete</button>
    </div>
  );
}

export default TestComponent;