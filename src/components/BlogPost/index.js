import React from 'react';
import Card from '../UI/Card';
import './style.css';

const BlogPost = (props) => {
  
return(
     <div className="blogPostContainer">
       <Card>
         <div className="blogHeader">
          <span className="blogCategory">Feature Post</span>
          <h1 className="postTitle">Be the King</h1>
          <span className="postedBy">posted on sept 23, 2020 by mike hike</span>
         </div>
         <div className="postImageContainer">
         <img className="image" src="https://images.unsplash.com/photo-1605812830455-2fadc55bc4ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="not found" />
         </div>

       </Card>
     </div>
 
)
}

export default BlogPost