import { useLocation, Link, useParams } from "react-router-dom"

export default function BlogDetail() {
    let data = useLocation();
    let item = data.state.obj;
    console.log(item);
    return (
        <>
            <button type="" className="btn btn-light"><Link to={'/blog'}>Back To Liproduct</Link></button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{item.title}</th>
                        <td><img width={100} src={item.image} alt={item.title} /></td>
                        <td>{item.time}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}