import React from 'react'
import ContactList from './ContactList'
import ConatctDeatiles from './ConatctDeatiles'
import Axios from 'axios'
import {useEffect} from 'react'
import {useState} from 'react'
const ContactApp = () => {
    let [contact, setContact]=useState([])
    useEffect(()=>{
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
             .then((response)=>{
                 setContact(response.data)
             })
             .catch()
    
    },[])   
  return (
    <div>

      
         <div className="container mt-4">
           <div className="row">
             <div className="col">
             <ContactList contact={contact}/>
             </div>
           </div>
         </div>
         <ConatctDeatiles contact={contact}/>
        </div>
  )
}
export default ContactApp