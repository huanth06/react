import axios from 'axios';
import { Field,  Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function ProductAdd() {
    let [data, setData] = useState ([]);
    let navigate = useNavigate();
    return (
        <>
            <button type="" className="btn btn-light"><Link to={'/admin/products'}>Back To List</Link></button>
            <Formik
                initialValues={
                    {
                        name: '',
                        price: '',
                        quantity: ''
                    }
                }
                enableReinitialize={true}
                onSubmit={values => {
                    axios.post('http://localhost:3000/products', values).then(() => {
                        alert('Added successfully.');
                        navigate('/admin/products');
                    })
                }}
            >
                <Form>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <Field type="text" name='name' placeholder="Name" ></Field>
                                </td>
                                <td>
                                    <Field type="text" name='price' placeholder="Price"></Field>
                                </td>
                                <td>
                                    <Field type="text" name='quantity' placeholder="Quantity"></Field>
                                </td>
                                <td>
                                    <button>Add</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>
        </>
    )
}
