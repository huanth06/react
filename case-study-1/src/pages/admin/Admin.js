import { Outlet } from "react-router-dom";
import AdminMenu from "../../components/AdminMenu";
import AdminSideBar from "../../components/AdminSideBaar";
import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebarMenu from "../../components/AdminSidebarMenu";

export default function Admin() {
  return (
    <>
      <AdminNavbar />
      <div className="container-fluid">
        <div className="row">
          <AdminSidebarMenu />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <Outlet></Outlet>
          </main>
        </div>
      </div>
    </>
  );
}
