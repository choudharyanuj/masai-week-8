import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';  
import Bill from './component/bill.js';
import Home from './component/home.js'
class App extends React.Component {
  render() {
    return(
      <div>
        <div>
          <React.Fragment>
            <nav className=" navbar navbar-dark bg-dark fixed-top">
              <a href="component/home.js"><img src="http://www.apnapunjabparattha.com/ApnaPunjabParatha/logo.png" className="logo-img ml-5" alt="logo"></img> </a>
               <Link to="/" className="text-decoration-none text-light">Home</Link><br />
              <Link to="/bill" className="text-decoration-none text-light">Generate Bill</Link><br />  
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/bill" component={Bill} />
          </React.Fragment>
        </div>
      </div>
    )
  }
}

export default App;
