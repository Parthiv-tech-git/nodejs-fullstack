import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('')
const ad =()=>{

  fetch('http://localhost:3000/additems',{
    method:'POST',
    headers:{'content-Type':'appliction/json'},
    body: JSON.stringify({count})
  })
    console.log(count)
}




  return (
    <>
     <input type="text" placeholder='enter your data' value={count} onChange={(e)=>setCount(e.target.value)}  />
     <button onClick={ad}>add</button>
    </>
  )
}

export default App
