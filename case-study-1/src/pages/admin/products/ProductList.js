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
            <div className="product-list mt-4">
                <button type="button" className='btn btn-primary'><Link to={'/_cpanel/product-add'}>Add New</Link></button>
                <table className="table">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Category</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listShow.map((e) => (
                            <tr key={e.id}>
                                <th scope="row">{e.id}</th>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                                <td>{e.quantity}</td>
                                <td>{e.category.name}</td>
                                <td><img src={'http://localhost:3000/images/'+e.images[0]} alt="" width={50}/></td>
                                <td className="btn-container">
                                    <button className='btn btn-danger'
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
                                    </button>
                                    <button className='btn btn-info'
                                        onClick={() => {
                                            navigate('/_cpanel/product/' + e.id, { state: { obj: e } })
                                        }}
                                    >
                                        Detail
                                    </button>
                                    <button className="btn btn-success"
                                    >
                                        <Link to={"/_cpanel/product/edit/" + e.id}>Edit</Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}