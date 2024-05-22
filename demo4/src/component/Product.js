import React, { Component } from 'react'

export default class AddProduct extends Component {
    constructor(){
        super();
        this.state={
            productList : [
                {
                    id: 1,
                    name: 'Product 1',
                    price: 99
                },
                {
                    id: 2,
                    name: 'Product 2',
                    price: 98
                },
                {
                    id: 3,
                    name: 'Product 3',
                    price: 97
                }
            ],
            inpID: '',
            inpName: '',
            inPrice: ''
        }
    }
    changeInp = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    add = () => {
        this.setState((state)=>{
            return {
                productList:[
                    ...state.productList,
                    {
                        id: state.inpID,
                        name: state.inpName,
                        price: state.inpPrice
                    }
                ],
                inpID: '',
                inpName: '',
                inpPrice: ''
            }
        });
    }
  render() {
    return (
      <>
        <table border={1}>
                <tr>
                    <th>Product ID</th>
                    <th>Product Title</th>
                    <th>Price</th>
                </tr>
                {
                    this.state.productList.map((product,key)=>(
                        <tr key={key}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
        </table>
        <h2>Add new product:</h2>
        <input type="text" value={this.state.inpID}  name="inpID"  placeholder='Product ID' onChange={this.changeInp} />
        <input type="text" value={this.state.inpName}  name="inpName" placeholder='Product Name' onChange={this.changeInp}/>
        <input type="text" value={this.state.inpPrice} name="inpPrice" placeholder='Price' onChange={this.changeInp} />
        <button onClick={this.add}>Add New Product</button>
      </>
    )
  }
}
