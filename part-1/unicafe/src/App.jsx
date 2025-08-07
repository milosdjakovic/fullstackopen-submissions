import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  const noFeedback = all === 0

  if (noFeedback) {
    return (
      <>
        <p>Statistics</p>
        <p>No feedback given</p>
      </>
    )
  }

  const average = () => {
    if (all === 0) {
      return 0
    }
    return (good - bad) / all
  }

  const positive = () => {
    if (all === 0) {
      return 0
    }
    return (good / all) * 100
  }

  return (
    <>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average()}</p>
      <p>Positive {positive()} %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button type="button" onClick={() => setGood(good + 1)}>good</button>
      <button type="button" onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button type="button" onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App