import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Student() {
    let [list, setList] = useState([]);
    let [listShow, setListShow] = useState([]);
    let [data, setData] = useState({
        name: '',
        score: ''
    });
    let [key,setKey] = useState({
        from: 0,
        to: 0
    });
    let getList = () => {
        axios.get('http://localhost:3000/students').then(res => {
            setList(res.data);
            setListShow(res.data);
        });
    }
    useEffect(()=>{
        getList();
    },[]);
    let deleteStudent = (id) =>{
        if (window.confirm('Ban co chac chan mua xoa khong')) {
            axios.delete('http://localhost:3000/students/'+id).then(()=>{
                getList();
            });
        }
    }
    return (
        <>  
            <input type="text" name="search" onChange={e=>{
                let searchList = list;
                let newlist = searchList.filter(item=>item.name.toLowerCase().includes(e.target.value.toLocaleLowerCase()));
                setListShow(newlist);
            }} />
            <br />
            <input value={key.from} onChange={e=>{
                setKey({
                    ...key,
                    from: e.target.value
                });
            }} />
            <input value={key.to} onChange={e=>{
                setKey({
                    ...key,
                    to: e.target.value
                });
            }} />
            <button type="" onClick={()=>{
                let newList = list;
                let rsList = newList.filter(item=>item.score >= key.from && item.score <= key.to);
                setListShow(rsList);
                setKey({
                    from: 0,
                    to: 0
                });
            }}>Search</button>
            {
                listShow.map(item=>(
                    <h2>{item.name}, {item.score} <button type="" onClick={()=>{deleteStudent(item.id)}}>Delete</button></h2>
                ))
            }
        </>
    )
}
