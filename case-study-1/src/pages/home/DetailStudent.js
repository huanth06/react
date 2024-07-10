import { useLocation, Link } from "react-router-dom"

export default function DetailStudent() {
    let data = useLocation();
    let st = data.state.obj;
    return (
        <>
            <button type="" className="btn btn-light"><Link to={'/admin/student'}>Back To List</Link></button>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Score</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{st.id}</th>
                        <td>{st.name}</td>
                        <td>{st.description}</td>
                        <td>{st.score}</td>
                        <td>{st.action}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}