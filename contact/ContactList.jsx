import React from 'react'

 const ContactList = (props) => {
  return (
    <div>ContactList
       <div className="container mt-5">
           <div className="row ">
               <div className="col ">
                   <table className='table table-over'>
                       <thead className='bg-dark text-warning'>
                         <tr>
                         <th>id</th>
                         <th>Name</th>
                         <th>City</th>
                         </tr>
                       </thead>
                       <tbody>
                           
                       {
                           props.contact.map((contact)=>{
                               return<tr key={contact.login.uuid} >
                              <td>{contact.login.uuid.substring(32,34)}</td>
                              <td>{contact.name.first}</td>
                              <td>{contact.location.country}</td>
                               </tr>
                           })
                       }
                       </tbody>
                   </table>
               </div>
           </div>
       </div>
    </div>
  )
}
export default ContactList