import { useState } from 'react'
import { Login } from './components/login/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    
     <main className='principal'>
       <Login/>
     </main>
    
  )
}

export default App
