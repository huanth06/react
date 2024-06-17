import React from 'react'
import Header from '../components/Header'
import LeftCol from '../components/LeftCol'
import RightCol from '../components/RightCol'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <Header />
                <LeftCol />
                <Outlet></Outlet>
                <RightCol />
                <Footer />
            </div>
        </div>
    </>
  )
}
