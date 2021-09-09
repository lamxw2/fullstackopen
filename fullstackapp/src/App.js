import React, { useState } from 'react'

const Header = ({name}) => {
  return (
    <h1>
      {name}
    </h1>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, count}) => {
  return (
    <div>
      {text} {count}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const textGood = 'good'
  const textNeutral = 'neutral'
  const textBad = 'bad'

  const calcTotal = (counts) => {
    return (
      counts[0] + counts[1] + counts[2]
    )
  }

  const average = (total) => {
    return (
      total/3
    )
  }

  const positive = (good, total) => {
    return (
        good/total*100 + ' %'
      )
  }

  let total = calcTotal([good, neutral, bad])

  const display = () => {
    if (total == 0) {
      return <p>No feedback given</p>
    }
    else {
      return (
        <>
          <StatisticLine text={textGood} count={good} />
          <StatisticLine text={textNeutral} count={neutral} />
          <StatisticLine text={textBad} count={bad} />

          <StatisticLine text='all' count={total} />
          <StatisticLine text='average' count={average(total)} />
          <StatisticLine text='positive' count={positive(good, total)} />
        </>
      )
    }
  }

  

  return (
    <div>
      <div>
        <Header name='give feedback' />
        <Button handleClick={() => setGood(good + 1)} text={textGood} />
        <Button handleClick={() => setNeutral(neutral + 1)} text={textNeutral} />
        <Button handleClick={() => setBad(bad + 1)} text={textBad} />
      </div>
      <div>
        <Header name='statistics' />

        {display()}

      </div>
    </div>
  )
}

export default App