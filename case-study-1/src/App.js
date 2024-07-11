import Register from "./pages/admin/Register";
import Login from "./pages/admin/Login";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import "./App.css";
import "./dashboard.css";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/admin/products/ProductList";
import ListOrder from "./pages/home/ListOrder";
import Student from "./pages/home/Student";
import AddStudent from "./pages/home/AddStudent";
import DetailStudent from "./pages/home/DetailStudent";
import ProductDetail from "./pages/admin/products/ProductDetail";
import ProductAdd from "./pages/admin/products/ProductAdd";
import ProudctEdit from "./pages/admin/products/ProudctEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/_cpanel" element={<Admin />}>
          <Route path="/_cpanel/product-add" element={<ProductAdd />}></Route>
          <Route path="/_cpanel/products" element={<ProductList />}></Route>
          <Route path="/_cpanel/product/:id" element={<ProductDetail />}></Route>
          <Route path="/_cpanel/product/edit/:id" element={<ProudctEdit />}></Route>
        </Route>
        <Route path="home" element={<Home />}>
          <Route path="order" element={<ListOrder />}></Route>
          <Route path="student" element={<Student />}></Route>
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="/admin/products" element={<ProductList />}></Route>
          <Route path="order" element={<ListOrder />}></Route>
          <Route path="student" element={<Student />}></Route>
          <Route path="add-student" element={<AddStudent />}></Route>
          <Route path="detail/:id" element={<DetailStudent />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
