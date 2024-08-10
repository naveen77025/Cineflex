import React, { useRef, useState } from 'react'
import Header from './Header';
import {loginFormValidation} from '../utils/loginFormValidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoginForm,setIsLoginForm]=useState(true);
  const [formErrorMessage,setFormErrorMessage]=useState(null);
  const dispatch= useDispatch();

  const toggleLoginForm=()=>{
    setIsLoginForm(!isLoginForm);
  };
  const email= useRef(null);
  const passwword= useRef(null);
  const name = useRef(null);
  const navigate= useNavigate();
  const handleLoginSubmissionButton = () =>{
    const errorMessage= loginFormValidation(email.current.value,passwword.current.value);
    setFormErrorMessage(errorMessage);
    if(!errorMessage){
      if(!isLoginForm){
        
        //console.log(auth);
        createUserWithEmailAndPassword(auth, email.current.value,passwword.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              //console.log(user); 
              updateProfile(user, {
                displayName: name.current.value, photoURL: "https://m.economictimes.com/thumb/msid-108493397,width-1200,height-900,resizemode-4,imgsize-31134/pawan-kalyan.jpg"
              }).then(() => {
                
                // Profile updated!
                dispatch(addUser({email:user?.auth?.currentUser?.email,photoUrl:user?.auth?.currentUser?.photoURL,displayName:user?.auth?.currentUser?.displayName}));
                navigate("/browse");
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
              
                

              //console.log(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              //console.log(errorCode);
              setFormErrorMessage(errorCode);
              // ..
            });
      }
      else{
        //const auth = getAuth();
        signInWithEmailAndPassword(auth, email.current.value,passwword.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch(addUser({email:user?.auth?.currentUser?.email,photoUrl:user?.auth?.currentUser?.photoURL,displayName:user?.auth?.currentUser?.displayName}));
            navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFormErrorMessage(errorCode);
          });
      }
    }
    console.log(errorMessage);
  };
  
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black/75 p-12 w-3/12 mx-auto my-36 right-0 left-0 text-white backdrop-filter backdrop-blur-sm rounded-md'>
        <h1 className='font-bold text-3xl py-4'>{isLoginForm?"Sign In":"Sign Up"}</h1>
        {!isLoginForm && <input ref={name} type="text" placeholder="Name" className='p-2 my-4 w-full bg-transparent border border-white rounded-md'/>}
        <input ref={email} type="text" placeholder="Email or mobile number" className='p-2 my-4 w-full bg-transparent border border-white rounded-md'/>
        <input ref={passwword} type='password' placeholder='Password' className='p-2 my-4 w-full bg-transparent border border-white rounded-md'/>
        <p className='text-red-500 py-3 '>{formErrorMessage}</p>
        <button onClick={()=>{
          handleLoginSubmissionButton();
        }} className='p-3 my-4 bg-red-700 w-full rounded-md'>{isLoginForm?"Sign In":"Sign Up"}</button>
        <p className='py-2 cursor-pointer' onClick={()=>{
          toggleLoginForm();
        }}>{isLoginForm?"New to Netflix? Sign up now.":"Already registred? Sign In now."}</p>
      </form>
    </div>
  )
}

export default Login;
