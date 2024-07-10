import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function ProductAdd() {
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/categories').then(x => {
            setCates(x.data)
        })
    }, [])
    let navigate = useNavigate();
    return (
        <>
            <div className='product-add mt-4'>
                <button type="" className="btn btn-light"><Link to={'/_cpanel/products'}>Back To List</Link></button>
                <hr />
                <Formik
                    initialValues={
                        {
                            name: '',
                            price: '',
                            quantity: ''
                        }
                    }
                    onSubmit={(values)=> {
                        let category = cates.find(e => e.id == selected);
                        if(category === undefined) {
                            category = cates[0];
                        }
                        values = {...values, category};
                        axios.post('http://localhost:3000/products',values).then(x => {
                            alert('Product Added Successfully!');
                            navigate('/_cpanel/products');
                        })
                    }}
                >
                    <Form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <Field id="name" className="form-control" type="text" name='name'  ></Field>
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <Field id="price" className="form-control" type="text" name='price'  ></Field>
                        </div>
                        <div class="form-group">
                            <label for="quantity">Quantity</label>
                            <Field id="quantity" className="form-control" type="number" name='quantity'  ></Field>
                        </div>
                        <div class="form-group">
                            <label for="category">Categories</label>
                            <select id="category" class="form-control" onChange={(e) => {
                                setSelected(e.target.value);
                            }}>
                                {cates.map(e => (<option value={e.id}>{e.name}</option>))}
                            </select>
                        </div>
                        <div class="form-group">
                            <button className='btn btn-primary'>Add</button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </>
    )
}
