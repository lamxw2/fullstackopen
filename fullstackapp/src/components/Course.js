import React from 'react'

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
}
  
const Total = ({ course }) => {

    // Create a new array containing exercises of each part
    let exercises = course.parts.map(part => part.exercises);

    const reducer = (prevValue, currentValue) => prevValue + currentValue
    const sum = exercises.reduce(reducer)

    //const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises
    return(
        <p>Number of exercises {sum}</p>
    ) 
}

const Part = (props) => {

    return (
        <p>
        {props.part.name} {props.part.exercises}
        </p>
    )

}
  
const Content = ({ course }) => {

    return (
        <div>
        {course.parts.map(function (part) {
            return(
              <Part part={part} key={part.id} />
            )
        })}
        </div>
    )

}
  
const Course = ({courses}) => {
  
    return (
      <div>
        {courses.map(function (course) {
          return (
            <>
              <Header course={course} key={course.id + '_' + 0}/>
              <Content course={course} key={course.id + '_' + 1}/>
              <Total course={course} key={course.id + '_' + 2}/>
            </>
          )
        })}
      </div>
    )
}

export default Course