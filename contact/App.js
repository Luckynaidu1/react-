import React from 'react';
import ContactApp from './Contact/ContactApp'
import Navbar from './Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
 class App extends React.Component{
  render() {
    return <>
    <Router>
        <Navbar/>
        <Routes>
          
          <Route path="Contact" element={<ContactApp/>}/>
        </Routes>
    </Router>
    </>
  }
}
export default App