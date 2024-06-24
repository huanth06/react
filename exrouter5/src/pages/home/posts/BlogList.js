import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BlogList() {
    let navigate = useNavigate();
    let [listShow, setListShow] = useState([]);
    let getLst = () => {
        axios.get("http://localhost:3000/posts").then((res) => {
            setListShow(res.data);
        });
    };
    useEffect(() => {
        getLst();
    }, []);
    return (
        <>
            <table className="table">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {listShow.map((e) => (
                        <tr key={e.id}>
                            <th scope="row">{e.title}</th>
                            <td><img width={100} src={e.image} alt={e.title} /></td>
                            <td><button className='btn btn-info'
                                onClick={() => {
                                    navigate('/blog/blog-detail/' +  e.id, { state: { obj: e } })
                                }}
                            >
                                Detail
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}