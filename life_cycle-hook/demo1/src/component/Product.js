import React, { useState } from 'react'

export default function Product() {
  let [list,setList] = useState([
    {
        id: 1,
        name: 'A',
        price: 99
    },
    {
        id: 2,
        name: 'B',
        price: 98
    },
    {
        id: 3,
        name: 'C',
        price: 97
    },
    {
        id: 4,
        name: 'AB',
        price: 95
    }
  ])
  let [id,setID] = useState('');
  let [name,setName] = useState('');
  let [price,setPrice] = useState('');
  return (
    <>
        <table border={1} width={500}>
            <thead>
                <th>Product ID</th>
                <th>Product Title</th>
                <th>Price</th>
            </thead>
            <tbody>
            {
                list.map((product,key)=>(
                    <tr key={key}>
                        <td align='center'>{product.id}</td>
                        <td align='center'>{product.name}</td>
                        <td align='center'>{product.price}</td>
                    </tr>
                ))
            }
            </tbody>
            <tfoot>
                
            </tfoot>
        </table>
        <hr />
        <h2>{id},{name},{price}</h2>
        <input type="text" name="inpID" placeholder='Product ID' value={id}  onChange={(e)=>{
            setID(e.target.value)
        }} />
        <input type="text" name="inpName" placeholder='Product Name' value={name}  onChange={(e)=>{
            setName(e.target.value)
        }} />
        <input type="text" name="inpPrice" placeholder='Product Price' value={price}  onChange={(e)=>{
            setPrice(e.target.value)
        }} />
        <button type="submit" onClick={()=>{
            setList([
                ...list,
                {
                    id: id,
                    name: name,
                    price: price
                },
            ]);
            setID('');
            setName('');
            setPrice('');
        }}>Add</button>
    </>
  )
}
