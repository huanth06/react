import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    return (
        <>
            <div className="container d-flex align-items-center text-center">
                <div className="form-signin">
                    <Formik
                        initialValues={
                            {
                                username: '',
                                password: '',
                            }
                        }
                        onSubmit={values => {
                            axios.post('http://localhost:3000/users/login',values).then(()=>{
                                alert('Dang nhap thanh cong!');
                                navigate('/admin')
                            }).catch(()=>{
                                alert('Tai khoan hoac mat khau khong dung.');
                            })
                        }}
                    >
                        <Form>
                            <h1 className="h3 mb-3 fw-normal">Please Login</h1>
                            <div className="form-floating">
                                <Field className="form-control username" type="text" name="username" placeholder="Username" ></Field>
                            </div>
                            <div className="form-floating">
                                <Field className="form-control password" type="password" name="password" placeholder="Password"></Field>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary btn-register mb-2" type="" >Login</button>
                            <button className="w-100 btn btn-lg btn-danger" type="button" ><Link to={'/'}>Register</Link></button>
                            <p className="mt-4 mb-3 text-muted">© {new Date().getFullYear()}</p>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}