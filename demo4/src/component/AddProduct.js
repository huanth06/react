import React, { Component } from 'react'

export default class AddProduct extends Component {
    constructor(){
        super();
        this.state={
            productList : [
                {
                    id: 1,
                    name: 'Product 1',
                    
                }
            ]
        }
    }
  render() {
    return (
      <div>AddProduct</div>
    )
  }
}
