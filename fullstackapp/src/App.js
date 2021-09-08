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

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Part name={part1} exercises={exercises1} />
      <Part name={part2} exercises={exercises2} />
      <Part name={part3} exercises={exercises3} />
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

  props.exercises.forEach(exercise => {
    total += exercise
    console.log(exercise)
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header name={course} />
      <Content />
      <Total exercises={[exercises1, exercises2, exercises3]}/>
    </>
  )
}

export default App