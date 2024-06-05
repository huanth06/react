import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  let navigate = useNavigate();
  return (
    <>
    <button onClick={()=> {
                navigate('/login');
            }}>Logout</button>
    </>
  )
}
