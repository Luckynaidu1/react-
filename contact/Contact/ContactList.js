import React, { Component } from 'react';
class ContactList extends Component {
 selectedContactHandler=(contacts)=>{
     this.props.selContacts(contacts)
    
 } 
 render() {
    return <div>
       <h1>contact ContactList...d</h1>
      {/*  <pre>{JSON.stringify(this.props)}</pre> */}
       <div className='container'>
           <div className='row  '>
               <table className='table table-hover'>  
               <thead className="bg-dark text-white">
                   <tr>                       
                           <th>id</th>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Country</th>
                       
                   </tr>
               </thead>
               <tbody>
               {
                   this.props.contacts.map((contact)=>{
                       return <tr key={contact.login.uuid} onMouseOver={this.selectedContactHandler.bind(this,contact)}>
                           <td>{contact.login.uuid.substring(32,36)}</td>
                           <td>{contact.name.last}</td>
                           <td>{contact.email}</td>
                           <td>{contact.location.country}</td>
                       </tr>
                   })
               }
               </tbody>
               </table>
               </div>
           </div>
       </div>
    
  }
}
export default ContactList