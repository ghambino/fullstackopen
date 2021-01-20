import React from 'react'

function Header(props) {
    console.log(props);
    const {course} = props;
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

export default Header
