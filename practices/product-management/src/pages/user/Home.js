import React from 'react'
import Menu from '../../components/Menu'
import {Outlet} from 'react-router-dom'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
        <Menu />
        <Outlet></Outlet>
        <Footer />
    </>
  )
}
