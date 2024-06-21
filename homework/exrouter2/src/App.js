import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/home/products/ProductList";
import ListOrder from "./pages/home/ListOrder";
import Student from "./pages/home/Student";
import AddStudent from "./pages/home/AddStudent";
import DetailStudent from "./pages/home/DetailStudent";
import ProductDetail from "./pages/home/products/ProductDetail";
import ProductAdd from "./pages/home/products/ProductAdd";
import ProudctEdit from "./pages/home/products/ProudctEdit";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="home" element={<Home />}>
            <Route path="" element={<ProductList />}></Route>
            <Route path="order" element={<ListOrder />}></Route>
            <Route path="student" element={<Student />}></Route>
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="/admin/products" element={<ProductList />}></Route>
            <Route path="order" element={<ListOrder />}></Route>
            <Route path="student" element={<Student />}></Route>
            <Route path="add-student" element={<AddStudent />}></Route>
            <Route path="product-add" element={<ProductAdd />}></Route>
            <Route path="detail/:id" element={<DetailStudent />}></Route>
            <Route path="product/:id" element={<ProductDetail />}></Route>
            <Route path="/admin/product/edit/:id" element={<ProudctEdit />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
