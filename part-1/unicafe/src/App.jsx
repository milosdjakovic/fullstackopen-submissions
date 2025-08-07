import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
)

const StatisticsLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
)

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
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="All" value={all} />
      <StatisticsLine text="Average" value={average()} />
      <StatisticsLine text="Positive" value={`${positive()} %`} />
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
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App