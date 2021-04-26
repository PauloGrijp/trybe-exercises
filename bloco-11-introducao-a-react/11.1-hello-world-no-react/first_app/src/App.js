import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Arruamar a casa', 'Beber água', 'Dormir']

function App() {
  return (
    <div>
      <ul>
        {tasks.map((taskMap) => task(taskMap))}
      </ul>
    </div>
  );
}

export default App;
