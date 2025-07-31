import { useState } from 'react'
import './index.css'
import './App.css'
import CredOperation from './CredOperation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CredOperation />
      </>
  )
}

export default App
