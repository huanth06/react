import React from 'react'

export default function Header() {
    return (
        <>
            <div className='col-12 col-md-4 col-custom'>
                <div className='header-content logo'>
                    <h1>Logo</h1>
                </div>
            </div>
            <div className='col-12 col-md-8 col-custom'>
                <div className='header-content banner'>
                    Banner
                </div>
            </div>
            <div className='col-12 col-custom'>
                <div className='navbar'>
                    Navbar
                </div>
            </div>
        </>
    )
}
