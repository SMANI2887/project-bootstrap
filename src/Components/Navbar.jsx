import React from 'react';
import User from '../assets/user2.svg';

function Navbar() {
  return (
    <>
    
    <nav className='header__cont flex-y'>
    <h1 className='heading'>My Queries</h1>
    <div className='lastContents' >
        <h5 className='mt-3 mr-3'>Manikandan</h5>
        <img src={User} width={'25px'} height={'25px'}></img>
    </div>
    
    </nav>
    
    </>
  )
}

export default Navbar;