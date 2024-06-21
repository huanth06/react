import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Field, Formik } from 'formik'
import axios from "axios";
export default function Register() {
    let navigate = useNavigate();
    return (
        <>
            <div className="container d-flex align-items-center text-center">
                <div className="form-signin">
                    <Formik
                        initialValues={
                            {
                                name: '',
                                username: '',
                                password: ''
                            }
                        }
                        onSubmit={values => {
                            axios.post('http://localhost:3000/users/register',values).then(()=>{
                                alert('Dang ky thanh cong!');
                                navigate('/login');
                            });
                        }}
                    >
                        <Form>
                            <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                            <div className="form-floating">
                                <Field className="form-control name" type="text" name="name" placeholder="Name"></Field>
                            </div>
                            <div className="form-floating">
                                <Field className="form-control username" type="text" name="username" placeholder="Username"></Field>
                            </div>
                            <div className="form-floating">
                                <Field className="form-control password" type="password" name="password" placeholder="Password"></Field>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary btn-register mb-2" type="">Register</button>
                            <button className="w-100 btn btn-lg btn-danger" type="button" ><Link to={'login'}>Login</Link></button>
                            <p className="mt-4 mb-3 text-muted">© {new Date().getFullYear()}</p>
                        </Form>
                    </Formik>
                    
                </div>
            </div>
        </>
    )
}