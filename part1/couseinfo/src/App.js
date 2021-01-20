import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/content/Content';
import Total from './components/Total';

function App() {
  const course ={
    name: 'Half Stack application development',
    parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  } 
  ]
}; 
  return (
    <React.Fragment>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </React.Fragment>
  );
}

export default App;
