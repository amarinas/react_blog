import React from 'react';


import Card from '../../components/UI/Card';

import './style.css';


const Home = props => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight+'px',
    overflow: 'hidden'
  }

  const sideImage = galleryHeight / 3;

  return(
    <div>
      <Card>
        <div className="galleryPost" style={{galleryStyle}}>
        <section style={{width:'70%'}} >
          <div >
            <img src="https://images.unsplash.com/photo-1605812276723-c31bb1a68285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt ="not found"></img>
          </div>
          
        </section>

        <section className="sideImageWrapper" style={{width:'30%'}}>
          <div sytle={{height: `${sideImage}px`}}>
            <img src="https://images.unsplash.com/photo-1605812276723-c31bb1a68285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt ="not found"></img>
          </div>
          <div sytle={{height: `${sideImage}px`}}>
            <img src="https://images.unsplash.com/photo-1605812276723-c31bb1a68285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt ="not found"></img>
          </div>
          <div sytle={{height: `${sideImage}px`}}>
            <img src="https://images.unsplash.com/photo-1605812276723-c31bb1a68285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt ="not found"></img>
          </div>
        </section>         
        </div>

      </Card>
    </div>
  );
}

export default Home;