import React from 'react';
import Plus from '../assets/plus.svg';
import Search from '../assets/search.svg';
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <>
    <div className='main'>
      <div style={{border: '1px solid black', borderRadius: '5px',width: '200px',textAlign: 'center'}}>
     <img src={Plus}/> Create Query 
      </div>
      <div>
        <img src={Search} style={{ width:'20px', border:'1px solid #93a4b7'}}/>
        <input type='text' style={{width:'240px'}}></input>
        </div>
      
    </div>
    </>
  )
}

export default Main;