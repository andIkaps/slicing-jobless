import { useState } from 'react'
import Button from './components/Button/Button'
import { Header } from './parts/Header'
import Hero from './parts/Hero'
import Jobs from './parts/Jobs'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app container py-4'>
      <Header />
      <Hero />
      <Jobs />
    </div>
  )
}

export default App
