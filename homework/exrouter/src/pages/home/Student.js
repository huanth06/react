import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Student() {
    let navigate = useNavigate();
    let [listShow, setListShow] = useState([]);
    let getLst = () => {
        axios.get("http://localhost:3000/students").then((res) => {
            setListShow(res.data);
        });
    };
    useEffect(() => {
        getLst();
    }, []);
    return (
        <>
            <button type="button" className='btn btn-primary'><Link to={'/admin/add-student'}>Add New</Link></button>
            <table class="table">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Score</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {listShow.map((e) => (
                        <tr>
                            <th scope="row">{e.name}</th>
                            <td>{e.score}</td>
                            <td><button className='btn btn-danger'
                                onClick={() => {
                                    if (window.confirm("Ban co chac k?")) {
                                        axios
                                            .delete("http://localhost:3000/students/" + e.id)
                                            .then(() => {
                                                getLst();
                                            });
                                    }
                                }}
                            >
                                Delete
                            </button></td>
                            <td><button className='btn btn-info'
                                onClick={() => {
                                    navigate('/admin/detail/' + e.id, { state: { obj: e } })
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
