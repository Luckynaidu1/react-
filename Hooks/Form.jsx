import React,{useState} from 'react'
let Form=()=>{
  let [state,setstate]=useState({name:'',email:''})
   
 let nameHandler=(event)=>{
   console.log(event.target.value);
  setstate({...state,name:event.target.value})
}

let emailHandler=(event)=>{
  console.log(event.target.value);
  setstate({...state,email:event.target.value})
}
let submitHandler=(e)=>{
e.preventDefault();
console.log(state);
}
  return (
    <div>
      <pre>{JSON.stringify(state)}</pre>


      <form onSubmit={submitHandler}>
      <label> enter name</label>
      <input type='text' placeholder='enter name' name='name'onChange={nameHandler} /> <br></br>
<br></br>
<br></br>
      <label> enter email</label>
      <input type='text' value={email} placeholder='enter valid email' name='name'onChange={e => setstate({...state,email:e.target.value})}/> <br></br>
      <br></br>
       <input type='submit' value='save'/> 
      </form>
    </div>
  )
}
export default Form