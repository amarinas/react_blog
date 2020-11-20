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
           {/* <img src={require('../../blogPostImages/image6.png')} alt="post image cannot be loaded" /> */}
         </div>

       </Card>
     </div>
 
)
}

export default BlogPost