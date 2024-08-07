import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isLoginForm,setIsLoginForm]=useState(true);
  const toggleLoginForm=()=>{
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"/>
      </div>
      <form className='absolute bg-black/75 p-12 w-3/12 mx-auto my-36 right-0 left-0 text-white backdrop-filter backdrop-blur-sm rounded-md'>
        <h1 className='font-bold text-3xl py-4'>{isLoginForm?"Sign In":"Sign Up"}</h1>
        {!isLoginForm && <input type="text" placeholder="Name" className='p-2 my-4 w-full bg-transparent border border-white rounded-md'/>}
        <input type="text" placeholder="Email or mobile number" className='p-2 my-4 w-full bg-transparent border border-white rounded-md'/>
        <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-transparent border border-white rounded-md'/>
        <button className='p-3 my-4 bg-red-700 w-full rounded-md'>{isLoginForm?"Sign In":"Sign Up"}</button>
        <p className='py-2 cursor-pointer' onClick={()=>{
          toggleLoginForm();
        }}>{isLoginForm?"New to Netflix? Sign up now.":"Already registred? Sign In now."}</p>
      </form>
    </div>
  )
}

export default Login;
