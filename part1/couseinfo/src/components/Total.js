import React from 'react'

function Total(props) {
 const {course} = props;
    const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;
    return (
        <div>
            <p>The number of excercises is {total}</p> 
        </div>
    )
}

export default Total
