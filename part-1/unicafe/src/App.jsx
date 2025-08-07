import { useState } from 'react'

const Average = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return <p>Average 0</p>
  }
  return <p>Average {(good - bad) / all}</p>
}

const Positive = ({ good, all }) => {
  if (all === 0) {
    return <p>Positive 0 %</p>
  }
  return <p>Positive {(good / all) * 100} %</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  return (
    <div>
      <h1>Give feedback</h1>
      <button type="button" onClick={() => setGood(good + 1)}>good</button>
      <button type="button" onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button type="button" onClick={() => setBad(bad + 1)}>bad</button>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} all={all} />
    </div>
  )
}

export default App