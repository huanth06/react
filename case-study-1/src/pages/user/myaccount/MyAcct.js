import React from 'react'
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'

export default function MyAcct() {
    return (
        <>
            <div className='col-12'>
                <div className="page-header"><h1>My Account</h1></div>
                <div className='row'>
                    <UserLogin />
                    <UserRegister />
                </div>
            </div>
        </>
    )
}
