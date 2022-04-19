import React, { useEffect }   from 'react'
import {useState} from 'react'
export const Todofform = () => {                
  const [data, setdata] =useState({       
  Name:"",
  number:"",
  email:"",
  project:"",
  desciption:"",
  start_date:"",
  end_date:"",
  Task:""})
    const [todo,settodo]=useState([])
    const [show, setshow]=useState(false)
    const [error, seterror] =useState({})
    const [issubmit,setSubmit]=useState(false)
    const [view, setview]=useState(false)
    const ChangeHandler=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
               
    }
    const submithandler=(e)=>{ 
        e.preventDefault()
      
        seterror(validate(data))
        validate(data)
        setSubmit(true)
    }
    useEffect(()=>{
        if((Object.keys(error).length ===0 && issubmit )){
          const newTodo=[data,...todo];settodo(newTodo)
              
        }
    },[error])
     const validate=(values)=>{
         const errors={}
         seterror(errors)
        const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
if(!values.Name){
    errors.Name='user name is required'
}
else if(!values.email.match(regex)){
    errors.email='user email is required'
}

else if (!values.number){
    errors.number='enter vaild mobile number'
}
else if(values.number.length<10){
    errors.number='Mobile number should contain atleast 10 characters'
}
else if(values.number.length>10){
    errors.number='Mobile number max 10 Digit'
}
 else if((values.number.charAt(0)===1)){
        errors.number='should not start with 1,2,3'}
    else if((values.number.charAt(0)===2)){
        errors.number='Should not start with 1,2,3'
    }else if((values.number.charAt(0)===3)){
        errors.number='Should not start with 1,2,3'
    }
else if(!values.project){
    errors.project='enter project description'
}
else if(!values.desciption){
    errors.desciption='enter project desicription'
}
else if (!values.start_date){
    errors.start_date='enter the date'
}
else if (!values.end_date){
   errors.end_date='enter the date'
}
else if (!values.Task){
    errors.Task='pease select task'
}
else{
    setshow(true)
}
     }
    // const DelateHandler=(indexvalue)=>{
    //      const Filtertodo=todo.filter((elem,index)=>index!==indexvalue)
    //      settodo(Filtertodo)
    // }
    const DelateHandler=(indexvalue)=>{
        const FilterTodo=todo.filter((elem,index)=>index!==indexvalue);
        settodo(FilterTodo)
      }
        const editHandler = (editIndexValue)=>{
        const FilteredTodo = todo.filter((elem,index)=> index!==editIndexValue);
        settodo(FilteredTodo);
        const editSelector = todo.find((elem,index)=>index===editIndexValue);
        setdata({
            Name:editSelector.Name,
            email:editSelector.email,
            number:editSelector.number,
            project:editSelector.project,
            desciption:editSelector.desciption,
            start_date:editSelector.start_date,
            end_date:editSelector.end_date,
            Task:editSelector.Task
        })
    }
      
  return (
    <>
    <form onSubmit={submithandler}>
        <div className="container">
        <div className="row">
            <div className="col-md-8">
                <h3 className='text-center'>Todo list</h3>
                    <div className='mb-3'>
                        <input className='form-control'name='Name' onChange={ChangeHandler} type='text' placeholder='enter name'/>
                        <p className='text-danger'>{error.Name}</p>
                        
                    </div>
                    <div className='mb-3 d-md-flex '>
                        <input className='form-control me-2'name='number' onChange={ChangeHandler} type='number' placeholder='enter mobile number'/>
                        <p className='text-danger'>{error.number}</p>
                        <input className=' form-control'name='email'onChange={ChangeHandler}  placeholder='enter gmail '/>  <br/>
                        <br/>
                         <p className='text-danger'>{error.email}</p>
                    </div>
                    <div className='mb-3'>
                        <input className='form-control' type='text'name='project' onChange={ChangeHandler} placeholder='project description' />
                        <p className='text-danger'>{error.project}</p>
                    </div>
                    <div className='mb-3'>
                        <input className='form-control' name="desciption" onChange={ChangeHandler} placeholder='task-description'/>
                         <p className='text-danger'>{error.desciption}</p>    
                    </div>
                    <div className='mb-3 d-md-flex'>
                        
                     <input className='form-control me-2'onChange={ChangeHandler} name="start_date" type='date'/>
                      <p className='text-danger'>{error.start_date}</p>
                     <input className='form-control me-2'onChange={ChangeHandler} name="end_date" type='date'/>
                      <p className='text-danger'>{error.end_date}</p>
                    </div>
                    <div className='mb-3'>
                        <div className='d-md-flex align-items-center radio-status'>
                            <p>Task</p>
                        </div>
                        </div>
                        <div>
                        <input type='radio' name="Task" onChange={ChangeHandler} value='planned' className='form-check-input ml-4'/>Planned
                            <input type='radio' name="Task" onChange={ChangeHandler} value='progress' className='form-check-input ml-5' />Progress
                            <input type='radio'name="Task" onChange={ChangeHandler} value='Done' className='form-check-input ml-5' />Done     
                          <p className='text-danger'>{error.Task}</p>
                         <input type='submit' className='btn btn-info me-2'/>
                        <button type='button' className='btn btn-danger' onClick={()=>setview(!view)} >View</button>
                    </div>
            </div>
        </div>   
                </div>  
    </form>
        <div className="container">
            <div className="row">
            { view ?<>
        {
            Object.keys(todo).length>0? <table className='table table-hover'>
                       <thead className='bg-dark text-white'>
                           <tr>
                          <th>Name</th>
                          <th>Number</th>
                          <th>email</th>
                          <th>Project</th>
                          <th>description</th>
                          <th>Start date</th>
                          <th>End date</th>
                          <th>task</th>
                          </tr>
                       </thead>
                          <tbody>
                              {
                                 show && todo.map((res,index)=>{
                                     return <tr key={index}>
                                        <td>{res.Name}</td>
                                         <td>{res.number}</td>
                                         <td>{res.email}</td>
                                         <td>{res.project}</td>
                                         <td>{res.desciption}</td>
                                         <td>{res.start_date}</td>
                                         <td>{res.end_date}</td>
                                         <td>{res.Task}</td>
                        
                                         <td>{<i className="fas fa-trash text-danger" onClick={()=>DelateHandler(index)}></i>}
                                             {<i className='fas fa-edit text-success mx-3' onClick={()=>editHandler(index)}></i> }
                                         </td>
                                     </tr>
                                  })
                              }
                          </tbody>
                     </table> 
                     :null
                    }
        
                    </>:null}
                     </div>            
                    </div>    
        </>
  )
}
export default Todofform