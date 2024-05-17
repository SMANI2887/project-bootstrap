import React from 'react';
import RightArrow from '../assets/right.svg';
import Plus from '../assets/plus.svg';

 
function Create() {
  return (
    <>
    <div className='back '>
       <div className='p-3' ><button className='b-button'>Back <img src={RightArrow} /></button> </div>
        </div>  
        <div className='create_main inputContainer mt-4'>
            <div className='txt'>Topic</div>
            
            <div className='inputContainer'>
                <div className='label-style mb-0 mt-4'>Category</div> 
            
            
            <select className='select d-flex mx-auto'>
                <option>---select Cateroy---</option>
                <option>ZenClass-Doubt</option>
                <option>Placement Related</option>
                <option>Coordination Related</option>
                <option>Pre-Bootcamp Related</option>
            </select>
                <div className='label-style mb-0 mt-4'>Subcategory</div> 
            
            
            <select className='select d-flex mx-auto'>
                <option>---select Cateroy---</option>
                <option>Task</option>
                <option>WebCode</option>
                <option>Class Topic</option>
                <option>Webkata</option>
                <option>Codekata</option>
                <option>Assessment</option>
            </select>
            <div className='mb-2'>
              <div className='label-style mb-0 mt-4'>Tags</div>
            <div className='css-1hwfws3'>
                 
           
            
            <div className='css-1wa3eu0-placeholder'>
                <option>Select---</option>
                <option>html</option>
                <option>css</option>
                <option>javascript</option>
                <option>array</option>
                <option>mongoDB</option>
                <option>nodejs</option>
                <option>react</option>
                <option>JS</option>
                <option>Browser</option>
                <option>DOM</option>
                <option>HTTP Methods</option>
                <option>JSON</option>
                <option>Hosting</option>
                <option>object</option>
                <option>scope-black</option>
                <option>functions</option>
                <option>HTTP Methods</option>
                <option>XML-HTTP request </option>
                <option>API request </option>
                <option>IIFL </option>
                <option>ES5 </option>
                <option>ES6</option>
            </div>
            </div>
            </div>
           
               <label for='language' className='label-style mb-0 mt-4'>Prefered Voice Communication Language</label> 
            
             <div className='div2'>
            <select className='select d-flex mx-auto'>
                <option>---select Cateroy---</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Tamil</option>
               
            </select>
            </div>
            </div>
            
            <div className='txt'>Details</div>
            <div className='inputContainer'>
            <div className='label-style mt-4'>Query Title</div>
            <input type='text' placeholder='Enter the Query title' className='select d-flex mx-auto'></input>
            <div className='label-style mb-0 mt-4'>Query Description</div>
            <input type='text' placeholder='Enter the Description' className='select d-flex mx-auto'></input>
            </div>
            <div  style={{marginLeft:'10px',marginTop:'45px'}}>Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</div>
              <div className='inputContainer'>
            <div className='label-style mt-4'>From</div>
            <input type='time' name='startTime' max={"19:00"}  value={"09:00"}className='select d-flex mx-auto formInputs'></input>
            <div className='label-style mt-4'>Till</div>
            <input type='time' name='startTime' max={"19:00"}  value={"19:00"}className='select d-flex mx-auto formInputs'></input>
            </div>
            <div style={{marginLeft:'10px'}}>Attachments (Optional)</div>
            <div className='attach'><img src={Plus} width='65px'/></div>
            <div className='last'>
                <button className='cancel'>Cancel</button>
                <button style={{marginLeft:'15px',width:'85px',height:'40px',borderRadius:'10px',backgroundColor:'#8a61d2',border:'1px solid black'}}>Create</button>
                </div>
        </div>
         </>
  )
}

export default Create;