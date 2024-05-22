import React from 'react';
import User from '../assets/user2.svg';
import Plus from '../assets/plus.svg';
import Search from '../assets/search.svg';


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
    <div className='Navbar_navbar__container__3Q3Zl'>
      <button className='NavButtons_add__button__q_2E5 NavButtons_dropdown__btn__3hx7M'>
      +  Create Query
      </button>
    <textarea className='Search_search__box__1WtVJ'></textarea>
    </div>
    <div className='Queries_sq__home__cont__2LKRX'>
      <div className='Queries_sq__list__item__FVhGh Queries_sq__single__item__3QDru'>
        <h3 className='Queries_sq__list__item__FVhGh'></h3>
      </div>
      <div className='Queries_sq__single__item__3QDru'>
        <span>Recent Query</span>
      </div>
    </div>
    
    
    </>
  )
}

export default Navbar;