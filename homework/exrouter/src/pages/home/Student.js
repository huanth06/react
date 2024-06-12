import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import AddStudent from './AddStudent';

export default function Student() {
    let navigate = useNavigate();
  let [list, setList] = useState([]);
  let [listShow, setListShow] = useState([]);
  let [data, setData] = useState({
    name: "",
    score: "",
  });
  let getLst = () => {
    axios.get("http://localhost:3000/students").then((res) => {
      setList(res.data);
      setListShow(res.data);
    });
  };
  useEffect(() => {
    getLst();
  }, []);
  return (
    <>
        <Outlet></Outlet>
        <button type=""><Link to={'./add-student'}>Add</Link></button>
        {listShow.map((e) => (
        <h2>
          {e.name}, {e.score}
          <button
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
            Xoa
          </button>
          <button
            onClick={() => {
                navigate('/detail-student', { state: { obj: e } })
            }}
          >
            Chi tiet
          </button>
        </h2>
      ))}
    </>
  )
}
