import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Navbar extends Component {
  render() {

    return <>
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='#'>React form handling</Link>  
        <div className='collapse navbar-collapse'>
            <ul className='collapse navbar-collapse'>
            <li className='nav-item'>
                <Link to='/Services' className='nav-link'>Services</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Contact' className='nav-link'>Contact</Link>
            </li>
            
            </ul>
        </div>
          </nav>
    </>;
  }
}
export default Navbar