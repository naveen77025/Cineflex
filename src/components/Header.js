import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user=useSelector((store)=>store.user);
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const handleSingOut =()=>{
    dispatch(removeUser());
    navigate("/");
  };

  return (
      <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between w-screen'>
          <img  className="flex w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
          {user && <div className='flex'>
            <img className='w-20 h-20 px-2' src={user?.photoUrl}/>
            <button onClick={()=>{
              handleSingOut();
            }} className='border-2 text-white font-bold border-red-800 p-3 rounded-lg bg-red-700 '>Sign Out</button>
          </div>}
      </div>
      
    )
}

export default Header
