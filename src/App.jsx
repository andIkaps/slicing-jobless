import { useState } from 'react'
import Button from './components/Button/Button'
import { Header } from './parts/Header'
import Hero from './parts/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mt-4'>
      <Header />
      <Hero />
    </div>
  )
}

export default App
