import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import BoxMaker from './BoxMaker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoxMaker />
      <ToDo />
    </>
  )
}

export default App
