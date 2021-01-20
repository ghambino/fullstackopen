import React from 'react';


function Part1(props) {
  console.log(props);
 const {part} = props;
  return (
      <>
        <p>{part.name}: {part.exercises}</p>    
      </>
  )
}

function Part2(props) {
  const {part} = props;
  return (
      <>
       <p>{part.name}: {part.exercises}</p>    
      </>
  )
}

function Part3(props) {
  const {part} = props;
  return (
      <>
        <p>{part.name}: {part.exercises}</p>  
      </>
  )
}



function Content(props) {
  console.log(props);
  const {course} = props;

    return (
        <div>
          <Part1 part={course.parts[0]}/>  
          <Part2 part={course.parts[1]}/>
          <Part3 part={course.parts[2]}/>
        </div>
    )
}

export default Content
