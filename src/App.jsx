import { useState } from 'react'
import AppRoutes from "../src/Router/Index.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes/>
    </>
  )
}

export default App
