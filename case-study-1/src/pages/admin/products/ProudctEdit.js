import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ProudctEdit() {
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState();
    let navigate = useNavigate();
    let { id } = useParams();
    let [data, setData] = useState({
        id: '',
        name: '',
        price: '',
        quantity: ''
    });
    useEffect(() => {
        axios.get('http://localhost:3000/categories').then(x => {
            setCates(x.data)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:3000/products/" + id).then((res) => {
            console.log(res);
            setData(res.data);
        });
    }, []);
    return (
        <>
            <div className='product-add mt-4'>
                <button type="" className="btn btn-light"><Link to={'/_cpanel/products'}>Back To List</Link></button>
                <hr />
                <Formik
                initialValues={data}
                enableReinitialize={true}
                onSubmit={values => {
                    let category = cates.find(e => e.id == selected);
                        if(category === undefined) {
                            category = cates[0];
                        }
                        values = {...values, category};
                    axios.put("http://localhost:3000/products/" + id, values).then((res) => {
                        alert("Edited successfully!");
                    });
                }}
            >
                <Form>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <Field name={'id'} ></Field>
                                </td>
                                <td>
                                    <Field name={'name'}></Field>
                                </td>
                                <td>
                                    <Field name={'price'}></Field>
                                </td>
                                <td>
                                    <Field name={'quantity'}></Field>
                                </td>
                                <td>
                                    <label for="category">Categories</label>
                                    <select id="category" class="form-control" onChange={(e) => {
                                        setSelected(e.target.value);
                                    }}>
                                        {cates.map(e => (<option value={e.id} selected={data?.category?.id === e.id}>{e.name}</option>))}
                                    </select>
                                </td>
                                <td>
                                    <button className='btn btn-success'>Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>
            </div>
        </>
    )
}
