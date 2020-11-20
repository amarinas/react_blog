import React from 'react';
import Card from '../UI/Card';
import './style.css';

const SideBar = (props) => {
return(

  <div className="sidebarContainer" >
  <Card style={{marginBottom: '20px'}} >
   <div className="cardHeader">
     <span>About Us</span>
    </div>
    <div className="profileImageContainer">
    <img src={'https://images.unsplash.com/photo-1549991191-5362425682ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'} alt="no image found" />
    </div>
  </Card>
  <Card >
   <div className="socialHeader">
     <span>Social Network</span>
     <div></div>
    </div>
  </Card>
    
  </div>

)
}

export default SideBar