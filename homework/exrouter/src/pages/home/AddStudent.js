import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
export default function AddStudent() {
    let navigate = useNavigate();
    let [data, setData] = useState({
        name: '',
        score: ''
    })
    let changeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    return (
        <>
            <button type="" className="btn btn-light"><Link to={'/admin/student'}>Back To List</Link></button>
            <table class="table">
                <tbody>
                    <tr>
                        <td><input value={data.name} type="text" name='name' placeholder="Name" onChange={e => {
                    changeInput(e);
                }} /></td>
                        <td><input value={data.score} type="text" name='score' placeholder="Score" onChange={e => {
                    changeInput(e);
                }} /></td>
                        <td><button className="btn btn-primary" onClick={() => {
                    axios.post('http://localhost:3000/students', data).then(() => {
                        setData({ name: '', score: '' });
                        alert('Added successfully.');
                    })
                }}>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}