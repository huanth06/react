import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    let [data, setData] = useState({
        usn: '',
        pass: ''
    })
    return (
        <>
            <div className="container d-flex align-items-center text-center">
                <div className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please Login</h1>
                        <div className="form-floating">
                            <input className="form-control username" type="text" name="name" placeholder="Username" onChange={(e) => {
                                setData({ ...data, usn: e.target.value })
                            }} />
                        </div>
                        <div className="form-floating">
                            <input className="form-control password" type="password" name="password" placeholder="Password" onChange={(e) => {
                                setData({ ...data, pass: e.target.value })
                            }} />
                        </div>
                        <button className="w-100 btn btn-lg btn-primary btn-register mb-2" type="button" onClick={() => {
                            if (data.usn == 'admin' && data.pass == 'admin') {
                                navigate('/admin')
                            }
                            if (data.usn == 'user' && data.pass == 'user') {
                                navigate('/home')
                            }
                        }}>Login</button>
                        <button className="w-100 btn btn-lg btn-danger" type="button" ><Link to={'register'}>Register</Link></button>
                        <p className="mt-5 mb-3 text-muted">© {new Date().getFullYear()}</p>
                    </form>
                </div>
            </div>
        </>
    )
}