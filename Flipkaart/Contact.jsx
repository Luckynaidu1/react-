import React, { useState } from 'react'

export const Contact = () => {
  const [help,sethelp]=useState(false)
  const [contacts,setcontact]=useState(false)
  const [order,setorder]=useState(false)
  const [shoping,setshoping]=useState(false)
   const Contact=()=>{
         return <>
         <h5>
           ph no: 7799224405,  <br></br>
           gamil: shamballilakshmiprasann@gmail.com
         </h5>
 
         </>
   }
 
   const Ship=()=>{
     return<>
     <h5> we care your products, we are genuine in payment delivery and also availbe cash on delivery</h5>
     </>
   }
   const Helpo=()=>{
     return <>
    <button className='btn btn-plain'onClick={()=>setorder(!order)}><h4>How to order</h4></button>
    <button className='btn btn-plain' onClick={()=>setshoping(!shoping)}><h4>About shipping</h4></button>
     </>
   }

   const Orders=()=>{
     return<>
    <h4> 1.please select <br></br>2.Add to Cart <br></br> 3.buy it  </h4>
     </>
   }
  
  return (
  <div>
        <div className='lucky'>  <img src="https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" height='550px'  className="card-img" alt="Backgroung" />
     </div>      
    <h3>Contact page</h3> 
     <div className='container'>
       <div className="row">
         <div className="col-md-6">
           <div className="card">
             <div className="card-header">
               <div className="card-body">
                 <button className='btn  btn-plain' onClick={()=>setcontact(!contacts)}><h4>Lifcart contact</h4> </button>
               
               </div>
               <div className='lead'>
                     <button className='btn btn-palin' onClick={()=>sethelp(!help)}><h3>help</h3></button>
               </div>
               
       {
           contacts ?< Contact/>:null
       }  
       {
         help ? <Helpo/> : null
       }

       {
         order?<Orders/> : null         
       }
       {
         shoping ? <Ship/>: null
       }
             </div>
           </div>
         </div>
       </div>
       </div>
    </div>
  )
}
export default Contact