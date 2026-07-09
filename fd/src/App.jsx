import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('')
  const [count1, setCount1] = useState([])
const ad =()=>{

  fetch('http://localhost:3000/additems',{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body: JSON.stringify({count})
  })
    console.log(count)
    if(Response.ok){
      alert('data enter successfully')
    }
    setCount('')
}
 

const shouu = async()=>{
  console.log("cilked sho")
  let dat = await fetch('http://localhost:3000/additems',{
    method:'GET',
    headers:{'content-Type':'application/json'},
  })

let b =  await dat.json();
 console.log(b)
 setCount1(b)


}



  return (
    <>
    <div className="bo">
    <div id="mainn">
     <input type="text" placeholder='enter your data' value={count} onChange={(e)=>setCount(e.target.value)}  />
     <button onClick={ad}>add</button>
     </div>
     <button onClick={shouu}>show all</button>
     <p>{count1.map((u)=>(<li>{u.da}</li>))}</p>
     </div>
    </>
  )
}

export default App
