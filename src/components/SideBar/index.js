import React,{useEffect, useState} from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
  const[posts, setPost] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPost(posts);
  }, posts);

return(

  <div className="sidebarContainer" >
  <Card style={{marginBottom: '20px', padding: '20px', boxSizing:'border-box'}}>
   <div className="cardHeader">
     <span>About Us</span>
    </div>
    <div className="profileImageContainer">
    <img src={'https://images.unsplash.com/photo-1549991191-5362425682ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'} alt="no image found" />
    </div>

  <div className="cardBody">
    <p className="personalBio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Frater et T. Semper enim ex eo, quod maximas partes continet latissimeque .
    </p>
  </div>

  </Card>
  <Card style={{marginBottom: '20px', padding: '20px', boxSizing:'border-box'}}>
   <div className="cardHeader">
     <span>Social Network</span>

    </div>
  </Card>

  <Card style={{marginBottom: '20px', padding: '20px', boxSizing:'border-box'}}>
   <div className="cardHeader">
     <span>Recent Posts</span>
    </div>
    <div className="recentPosts">

      {
        posts.map(post =>{
          return(
            
            <NavLink to={`/post/${post.id}`}>
            <div className="recentPost">
              <h3>{post.blogTitle}</h3>
              <span>{post.postedOn}</span>
            </div>
            </NavLink>
           
          )
          })
      }

    </div>    
  </Card>



   
  </div>

)
}

export default SideBar