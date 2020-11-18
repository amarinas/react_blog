import React from 'react';
import './style.css'


const Navbar= (props) => {
  
  const submitSearch=(e) =>  {
    e.preventDefault();
    alert("searched");

  }
return(
  <div className="navbar">
    <ul className="navbarMenu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Post</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    <div className="search">
      <form onSubmit={submitSearch}>
      <input type="text" className="searchInput" placeholder="Search"/>
      <img src={require('../../assets/icons/search2.png')} alt="search" />
      </form>
    </div>
  </div>
)
}

export default Navbar