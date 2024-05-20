import { useState } from 'react'
import FirstPage from './Components/FirstPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstPage/>
    </>
  )
}

export default App
