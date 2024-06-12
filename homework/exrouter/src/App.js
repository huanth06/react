import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListProuct from "./pages/home/ListProduct";
import ListOrder from "./pages/home/ListOrder";
import Student from "./pages/home/Student";
import AddStudent from "./pages/home/AddStudent";
import DetailStudent from "./pages/home/DetailStudent";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="home" element={<Home />}>
            <Route path="" element={<ListProuct />}></Route>
            <Route path="order" element={<ListOrder />}></Route>
            <Route path="student" element={<Student />}></Route>
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="" element={<ListProuct />}></Route>
            <Route path="order" element={<ListOrder />}></Route>
            <Route path="student" element={<Student />}></Route>
            <Route path="add-student" element={<AddStudent />}></Route>
            <Route path="detail/:id" element={<DetailStudent />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
