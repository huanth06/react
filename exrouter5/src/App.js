import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import BlogList from "./pages/home/posts/BlogList";
import BlogDetail from "./pages/home/posts/BlogDetail";
import BlogEdit from "./pages/home/posts/BlogEdit";

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
          <Route path="/blog/blog-detail/edit/:id" element={<BlogEdit />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
