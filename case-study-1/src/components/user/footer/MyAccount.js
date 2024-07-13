import React from 'react'
import { Link } from 'react-router-dom'

export default function MyAccount() {
    return (
        <>
            <div className="col-12 col-md-4 text-md-left">
                <ul className="nav flex-column">
                    <li className="nav-item"><h4 className="nav-link py-0">My Account</h4></li>
                    <li className="nav-item"><Link to="/_myacct/login" className="nav-link">Login</Link></li>
                    <li className="nav-item"><Link to="/_myacct/register" className="nav-link">Register</Link></li>
                </ul>
            </div>
        </>
    )
}
