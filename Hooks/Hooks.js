import React, { useState } from 'react'

 function Hooks() {
     let [msg, setMsg]=useState('hello.....')
  return (
    <div>
        <h1>{msg}</h1>
        <button onClick={()=>{setMsg('hello gm')}}>gm</button>
        <button onClick={()=>{setMsg('hello gn')}}>gn</button>
    </div>

  )
}
export default Hooks