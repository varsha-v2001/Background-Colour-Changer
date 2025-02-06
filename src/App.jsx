import { useState } from 'react'
import './App.css'

function App() {

  const [colour,setColour]=useState("white")
  return (
    <>
      <div className='row'>
        <div className="col"></div>
        <div className="col">
          <h1 style={{ color: "white" ,fontWeight:"bolder"}} className='text-center mt-5'>Background colour changer</h1>
          <div style={{ height: "450px", width: "690px", backgroundColor:colour }} className='border border-dark mt-5 d-flex justify-content-center align-items-center rounded-4'>
              <button onClick={()=>setColour("red")} style={{ backgroundColor: "red" }} type="button" className="btn border border-3 border-dark me-5 ms-5 text-light fs-5 fw-bold">Red</button>
              <button onClick={()=>setColour("Orange")} style={{ backgroundColor: "Orange" }} type="button" className="btn border border-3 border-dark me-5 text-light fs-5 fw-bold">Orange</button>
              <button onClick={()=>setColour("green")} style={{ backgroundColor: "green" }} type="button" className="btn border border-3 border-dark me-5 text-light fs-5 fw-bold">Green</button>
              <button onClick={()=>setColour("blue")} style={{ backgroundColor: "blue" }} type="button" className="btn border border-3 border-dark me-5 text-light fs-5 fw-bold">Blue</button>
              <button onClick={()=>setColour("purple")} style={{ backgroundColor: "Purple" }} type="button" className="btn border border-3 border-dark me-5 text-light fs-5 fw-bold">Purple</button>
          </div>
          <div>
          <button onClick={()=> setColour("white")} style={{ backgroundColor: "white",color:"rgb(31, 20, 43)",fontFamily:'"Inter", serif' }} type="reset" className="btn border border-3 border-dark mt-4 d-grid gap-2 col-6 mx-auto rounded-3 p-2 fs-5 fw-bold">Reset</button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  )
}

export default App
