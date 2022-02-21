import React,{useState} from 'react'
 let Form = () => {
  let [state,setState]=useState({name:"",email:""})
    
  let submitHandler=(e)=>{
    e.preventDefaulsubmitHandlert();
    console.log(state);
    }
  return (
    <div>Form
        <div className="container-8">
          <pre>{JSON.stringify(state)}</pre>
          <div className="row md-6">
            <div className="col-md-4">
              </div>
              <form onSubmit={submitHandler}>
              <label>name</label>
        <br></br>
         <input type='text' placeholder='enter name' className='form-control'onChange={e=>setState({...state,name:e.target.value})} />
        <br></br>
        <label>enter email</label>
          
        <input type='text' placeholder='enter email' name='email' className='form-control' onChange={e=>setState({...state,email:e.target.value})} /> <br></br>
          </form>
        <br></br>
        <input type='button' value='submit'/>
             
              </div>
          </div>
    </div>
  )
}
export default Form 