import React, { useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import './style.css'


const Navbar= (props) => {

  const [search, setSearch] = useState(false);
  
  const submitSearch=(e) =>  {
    e.preventDefault();
    alert("searched");
  }

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search ? 'searchInput active' : 'searchInput';


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
      <input type="text" className={searchClass} placeholder="Search"/>
      <BiSearchAlt img onClick={openSearch} className="searchIcon" src="" alt="search" />
      </form>
    </div>
  </div>
)
}

export default Navbar