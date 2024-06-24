import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function ProudctEdit() {
    let navigate = useNavigate();
    let { id } = useParams();
    let [data, setData] = useState({
        id: '',
        title: '',
        content: '',
    });
    useEffect(() => {
        axios.get("http://localhost:3000/posts/" + id).then((res) => {
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
                    axios.put("http://localhost:3000/posts/" + id, values).then((res) => {
                        alert("Edited successfully!");
                        navigate('/blog');
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
                                    <Field name={'title'}></Field>
                                </td>
                                <td>
                                    <Field name={'content'}></Field>
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
