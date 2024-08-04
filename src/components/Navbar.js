import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export default class Navbar extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() 
{
    return (
      <div>
        
        <nav className={`navbar   navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">
    <a className="navbar-brand" to="/navbar">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/homec">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/Business">Business</Link>
        </li>
        \
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}
