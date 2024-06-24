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
import BlogList from "./pages/home/posts/BlogList";
import BlogDetail from "./pages/home/posts/BlogDetail";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="/blog" element={<BlogList />}>
          </Route>
          <Route path="/blog/blog-detail/:id" element={<BlogDetail />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
