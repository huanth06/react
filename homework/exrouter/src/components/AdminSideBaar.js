import { Link } from "react-router-dom";
export default function AdminSideBar() {
  return (
    <>
      <div className="col-2 sidebar">
        <div className="title">
          Admin Side Bar
        </div>
        <ul>
          <li><Link className="nav-link" to={""}>
            Products
          </Link></li>
          <li><Link className="nav-link" to={"order"}>
            Order
          </Link></li>
          <li><Link className="nav-link" to={"student"}>
            Students
          </Link></li>
        </ul>
      </div>
    </>
  );
}
