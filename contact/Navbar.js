import React, { Component } from "react"
import { Link } from "react-router-dom"
class Navbar extends Component{
    render(){
        return(
        <>
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to='contact'>React Component</Link>
           <div>
               <ul className="navbar-nav">
                   <li className="nav-item">
                       <Link to='contact' className="nav-link">Contact</Link>
                   </li>
               </ul>
           </div>
        </nav>
        </>
        )
    }
}
export default Navbar

