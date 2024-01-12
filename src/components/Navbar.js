import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props)=> {

  
    return (
      <>
      <div className="mb-2">
      <nav className="navbar  fixed-top navbar-expand-sm navbar-dark bg-danger">
  <a className="navbar-brand" href="/title"><h4>{props.title}</h4></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
       {/* <a className="nav-link" href="/">Home</a> */}
          <Link className="nav-link" to="/home">Home</Link>
        </li>
    
        <li className="nav-item">
          {/* <a className="nav-link" href="/business">business</a>  */}
          <Link className="nav-link" to="/business">Business</Link>                     
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/entertainment">entertainment</a> */}
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>

        <li className="nav-item">
       {/* <a className="nav-link" href="/general">general</a> */}
          <Link className="nav-link" to="/general">General</Link>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link" href="/health">health</a> */}
          <Link className="nav-link" to="/health">Health</Link>
        </li> 

        <li className="nav-item">
        {/* <a className="nav-link" href="/science">science</a> */}
        <Link className="nav-link" to="/science">Science</Link>
        </li> 

         <li className="nav-item">
          {/* <a className="nav-link" href="/sports">sports</a> */}
          <Link className="nav-link" to="/sports">Sports</Link>
        </li> 
         <li className="nav-item">
          {/* <a className="nav-link" href="/technology">technology</a> */}
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div> 
      </>
    );
  }
export default Navbar
  
