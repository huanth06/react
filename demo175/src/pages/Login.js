import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

export default function Login() {
    let navigate = useNavigate();
    let [user, setUser] = useState({
        username: '',
        password: ''
    })
    let changeInp = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    let login = () => {
        if(user.username === 'admin' && user.password === 'admin') {
            navigate('/admin')
        }else if(user.username === 'user' && user.password === 'user'){
            navigate('/home')
        }
    }
  return (
    <>
        <input value={user.username} type="" name="username" onChange={e=>{changeInp(e)}} />
        <input value={user.password} type="" name="password" onChange={e=>{changeInp(e)}} />
        <button type="" onClick={()=>{
            navigate('/register');
        }}>Register</button>
        <button onClick={()=> {
                login();
            }}>Login</button>
    </>
  )
}
