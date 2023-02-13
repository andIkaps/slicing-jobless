import { useState } from 'react'
import Button from './components/Button/Button'
import { Header } from './parts/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mt-4'>
      <Header />
    </div>
  )
}

export default App
