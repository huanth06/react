import { useLocation, Link, useParams } from "react-router-dom"

export default function ProductDetail() {
    let data = useLocation();
    let product = data.state.obj;
    let {id} = useParams();
    return (
        <>
            <button type="" className="btn btn-light"><Link to={'/admin/products'}>Back To Liproduct</Link></button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}