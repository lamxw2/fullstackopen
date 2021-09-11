import React, { useState } from 'react'

const Anecdote = ({anecdote, point}) => (
  <div>
    {anecdote}<br/>
    has {point} number of votes
  </div>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
 
  const handleUpdate = (selected) => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }
    
  const [selected, setSelected] = useState(0)

  // Obtain the array index of the highest voted anecdote
  const indexOfMax = () => {

    let maxPoints = points[0]
    let maxIndex = 0

    for (let i = 1; i < points.length; i++) {
      if (points[i] > maxPoints) {
        maxIndex = i;
        maxPoints = points[i]
      }
    }

    return (maxIndex)

  }

  // Assign index to a variable
  let maxIndex = indexOfMax()

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote anecdote={anecdotes[selected]} point={points[selected]} />

        <div>
          <Button handleClick={() => handleUpdate(selected)} text='vote' />
          <Button handleClick={() => setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))} text='next anecdote' />
        </div>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <Anecdote anecdote={anecdotes[maxIndex]} point={points[maxIndex]} />

      </div>
    </>
  )
}

export default App