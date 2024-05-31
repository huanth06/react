import { useState, useEffect } from "react"
import axios from 'axios';
export default function Student() {
    let [list, setList] = useState([]);
    let [data,setData]= useState({
        id: '',
        name:'',
        description:'',
        action:'',
        score: ''
    })
    let getList = () => {
        axios.get('http://localhost:3000/students').then((res) => {
            console.log(res.data);
            setList(res.data)
        });
    }
    useEffect(() => {
        getList();
    }, [])
    let changeInp = (e) =>{
        setData({...data,[e.target.name]: e.target.value});
    }
    let add = () =>{
        
        axios.post('http://localhost:3000/students',data).then((res)=>{
            alert('Thanh Cong');
            getList();
            setData({
                id: '',
                name:'',
                description:'',
                action:'',
                score: ''
            });
        });
    }
    return (
        <>
            <h2>Country List</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        <th scope="col">Score</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.action}</td>
                            <td>{item.score}</td>
                            <td>
                                <button type="" onClick={()=>{
                                    if(window.confirm('Are you sure to delete.')){
                                        axios.delete('http://localhost:3000/students/'+item.id).then((res)=>{
                                            alert("Deleted successfully.");
                                            getList();
                                        })
                                    }
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="col-12 mb-2">
                <input name='id' type="text"  value={data.id} onChange={e=>{
                    changeInp(e)
                }}/>
                <input name='name' type="text"  value={data.name} onChange={e=>{
                    changeInp(e)
                }}/>
                <input name='description' type="text"  value={data.description} onChange={e=>{
                    changeInp(e)
                }}/>
                <input name='action' type="text"  value={data.action} onChange={e=>{
                    changeInp(e)
                }}/>
                <input name='score' type="text"  value={data.score} onChange={e=>{
                    changeInp(e)
                }}/>
                <button type="" onClick={()=>{ add()
                }}>Add</button>
            </div>
            
        </>
    )
}