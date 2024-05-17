import React from 'react'

function Login() {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center bg-danger vh-100">
    
    <div className='login '> 
    <form>
        <h3>Login Page</h3>
        <label>UserName</label><br/>
        <input></input><br/><br/>
        <label>Password</label><br/>
        <input></input><br/><br/>

        <button className=''>Login</button>
        <div>
        <button>Sign Up</button>
        <button>Forget Password?</button>
        </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default Login;