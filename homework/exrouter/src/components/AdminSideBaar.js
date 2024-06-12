import { Link } from "react-router-dom";
export default function AdminSideBar() {
  return (
    <>
      <div className="col-2">
        Admin Side Bar
        <br />
        <Link className="nav-link" to={""}>
          Products
        </Link>
        <br />
        <Link className="nav-link" to={"order"}>
          Order
        </Link>
        <br />
        <Link className="nav-link" to={"student"}>
          Students
        </Link>
      </div>
    </>
  );
}
