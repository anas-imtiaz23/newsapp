import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
       <Router>
        <Navbar/>
        {/* <News pageSize={5} country="us" category="entertainment"/> */}
      <Routes>
   <Route exact path="/" element={<News key={"general"} pageSize={5} country="us" category="general"/>} /> 
   <Route exact path="/Business" element={<News key={"Business"} pageSize={5} country="us" category="Business"/>} /> 
   <Route exact path="/entertainment" element={<News key={"entertainment"} pageSize={5} country="us" category="entertainment"/>} /> 
   <Route exact path="/health" element={<News key={"health"} pageSize={5} country="us" category="health"/>} /> 
   <Route exact path="/science" element={<News key={"science"} pageSize={5} country="us" category="science"/>} /> 
   <Route exact path="/sports" element={<News key={"sports"} pageSize={5} country="us" category="sports"/>} /> 
</Routes>
        </Router>
      </div>
    )
  }
}


// export default App;
