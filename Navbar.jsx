import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <>
      <nav className='navbar navbar-dark bg-dark'>
          <Link className='navbar-brand' to="contact">React Routing</Link>
          <div>
              <ul className='navbar navbar'>
                  <li className='navbar-item'>
                      <Link to='./contact'>contact</Link>
                  </li>
              </ul>
          </div>
      </nav>
      </>
    )
  }
}
export default Navbar
