import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Register() {
    let navigate = useNavigate();
  return (
    <>
        <button onClick={()=> {
                navigate('/login');
            }}>Login</button>
    </>
  )
}
