import React, { useState } from 'react'

export const Contact = () => {
  const [help,sethelp]=useState(false)
  const [contact,setcontact]=useState(false)
  const [order,setorder]=useState(false)
  const [shoping,setshoping]=useState(false)
  return (
    <div>
      <h1> 
         test contact
         </h1>
    </div>
  {/* <div>      
        <div className="container">


        
            <div className="row">
        <div className="col-md-8">
    <div className='lucky'>  <img src="https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" height='550px'  className="card-img" alt="Backgroung" />
     </div>
      <div className="card-img-overlay d-flex flex-column justify-content-cente" >
         
            <div className="card-header ">
                <div className="card-title">
                </div>
                
                <div className="card-body">
              <h5> Contact page </h5>

                  <button className='btn btn-plain' onClick={()=>setcontact(!contact)}><h5>Lifcart contact number</h5></ button>
                  {
                    contact ?<h6 className='bold'><p>customer care  number:7799224405 <br></br>
                    <br></br>
                                                  gmail:shamballilakshmiprasann@gmail.com </p> </h6>:null
                  }
                 <button className='btn btn' onClick={()=>sethelp(!help)}><h4>Help</h4></button>                 
                { 
                  help ? <h6 className='bold'><button className='btn btn' onClick={()=>setorder(!order)}>how to order,</button><br></br>
                 <button className='btn btn' onClick={()=>setshoping(!shoping)}>about shipping</button> 
                  </h6>:null
                }
                {
                  order ? <h6 className=''><p> 1.please select <br></br>
                                                              2.Add to Cart <br></br>
                                                              3.buy it  </p></h6>:null
                }
                </div>
                {
                  shoping ? <h4 className='bold'>we care your products, we are genuine in payment delivery and also availbe cash on delivery</h4>:null
                }
          </div>   
                </div>
                </div>
                </div>
            </div>
        </div> */}
    
  )
}
export default Contact