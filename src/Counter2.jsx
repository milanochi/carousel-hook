import React, { useState } from 'react'
import useCounter from './Hooks/useCounter'

function Counter2() {
  const [count2, setCount2] = useState(10)
  useCounter(count2)
  return (
    <div>
      <button onClick={() => setCount2(prevCount => prevCount + 10)}>Counter2: {count2}</button>
    </div>
  )
}

export default Counter2