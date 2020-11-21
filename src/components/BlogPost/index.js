import React, {useState, useEffect} from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';

const BlogPost = (props) => {
  const[post, setPost] = useState({});

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId);
    setPost(post);
  }, post);


return(
     <div className="blogPostContainer">
       <Card>
         <div className="blogHeader">
          <span className="blogCategory">Feature Post</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
         </div>
         <div className="postImageContainer">
         <img className="image" src="https://images.unsplash.com/photo-1605812830455-2fadc55bc4ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="not found" />
        {/* <img className="image" alt="notFound">{post.blogImage}</img> */}
         </div>
        <div className="postContent">
          <h3>Post Title</h3>
          <p>{post.blogText}</p>
        </div>
       </Card>
     </div>
 
)
}

export default BlogPost