import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function ProudctEdit() {
    let navigate = useNavigate();
    let { id } = useParams();
    let [data, setData] = useState({
        id: '',
        name: '',
        price: '',
        quantity: ''
    });
    useEffect(() => {
        axios.get("http://localhost:3000/products/" + id).then((res) => {
            console.log(res);
            setData(res.data);
        });
    }, []);
    return (
        <>
            <Formik
                initialValues={data}
                enableReinitialize={true}
                onSubmit={values => {
                    axios.put("http://localhost:3000/products/" + id, values).then((res) => {
                        alert("Edited successfully!");
                        navigate('/admin/products');
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
                                    <button className='btn btn-success'>Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>
        </>
    )
}
