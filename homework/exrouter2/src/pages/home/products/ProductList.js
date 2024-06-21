import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListProuct() {
    let navigate = useNavigate();
    let [listShow, setListShow] = useState([]);
    let getLst = () => {
        axios.get("http://localhost:3000/products").then((res) => {
            setListShow(res.data);
        });
    };
    useEffect(() => {
        getLst();
    }, []);
    return (
        <>
            <button type="button" className='btn btn-primary'><Link to={'/admin/product-add'}>Add New</Link></button>
            <table className="table">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {listShow.map((e) => (
                        <tr key={e.id}>
                            <th scope="row">{e.id}</th>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                            <td>{e.quantity}</td>
                            <td><button className='btn btn-danger'
                                onClick={() => {
                                    if (window.confirm("Ban co chac k?")) {
                                        axios
                                            .delete("http://localhost:3000/products/" + e.id)
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
                                    navigate('/admin/product/' + e.id, { state: { obj: e } })
                                }}
                            >
                                Detail
                            </button></td>
                            <td>
                                <button className="btn btn-success"
                                >
                                    <Link to={"/admin/product/edit/" + e.id}>Edit</Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}