import React from 'react'
import Carousel from '../components/Carousel'
import ProductList from './ProductList'

export default function MainContent() {
  return (
    <>
        <div className='col-12 col-md-7 col-custom'>
            <div className='main-cotent'>
                <Carousel />
                <ProductList />
            </div>
        </div>
    </>
  )
}
