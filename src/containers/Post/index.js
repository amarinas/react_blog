import React from 'react';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import './style.css';

const Post = (props) => {
return(
  <section className="container">
    <BlogPost />
    <SideBar />
  </section>
)
}

export default Post

