import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddStudent() {
    let navigate = useNavigate();
    let [list, setList] = useState([]);
    let [listShow, setListShow] = useState([]);
    let [data, setData] = useState({
        name: '',
        score: ''
    });
    let changeInp = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>  
            <input type="" name="name" value={data.name} onChange={(e)=>{changeInp(e)}} />
            <input type="" name="score" value={data.score} onChange={(e)=>{changeInp(e)}} />
            <button type="" onClick={()=>{
                axios.post('http://localhost:3000/students/',data).then(()=>{
                    alert('Them sinh vien thanh cong');
                    navigate('/students');
                });
            }}>Add</button>
        </>
    )
}
