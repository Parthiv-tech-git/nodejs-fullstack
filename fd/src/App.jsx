import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('')
  const [count1, setCount1] = useState([])
const ad =()=>{
  if(count.length===0){
    alert("please enter your task to add")
  }
else{
  fetch('http://localhost:3000/additems',{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body: JSON.stringify({count})
  })
    console.log(count)
   alert("data is added")
    setCount('')
}
}
 

const shouu = async()=>{
  console.log("cilked sho")
  let dat = await fetch('http://localhost:3000/additems')
let b =  await dat.json();
let c= Object.entries(b)
 console.log(c)
 setCount1(c)


}



  return (
    <>
    <div className="bo">
      <div className="cont">
        <h2>to-do list</h2>
        <input type="text" placeholder='enter the task' onChange={(e)=>{
         setCount(e.target.value)
        }} value={count} />
        <div className="btnc">
          <button onClick={ad}>add</button>
          <button onClick={shouu}>show all</button>
        </div>
        <div className="dat">
  {count1.map((x) => (
    <div className='ite' key={x[0]}>
      {x[1].itemss}
      <button className='re'>remove</button>
    </div>
  ))}
</div>

      </div>
      
    </div>
    
    </>
  )
}

export default App
