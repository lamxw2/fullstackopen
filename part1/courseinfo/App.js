import React from 'react'

// Render name of course
const Header = (props) => {
  return (
    <div>
      <h1>
          {props.name}
      </h1>
    </div>
  )
}

// Render Parts
const Content = (props) => {

  let part1 = props.parts[0]
  let part2 = props.parts[1]
  let part3 = props.parts[2]

  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </div>
  )
}

// Render parts and number of exercises
const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

// Render total number of exercises
const Total = (props) => {

  let total = 0

  props.parts.forEach(part => {
    total += part.exercises
  })
  return (
    <div>
      <p>
        Number of exercises {total}
      </p>
    </div>
  )

  
}

const App = () => {
  const course = {
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
  }

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}

export default App