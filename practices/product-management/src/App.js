import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/admin/Admin';
import User from './pages/user/User';
import Slides from './components/Slides';
import ListPro from './pages/user/product/ListPro';
import Home from './pages/user/Home';
import ListHotPro from './pages/user/product/ListHotPro';
import DetailPro from './pages/user/product/DetailPro';
import ListCategory from './pages/user/category/ListCategory';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Admin />}></Route>
        <Route path="home" element={<Home />}>
          <Route path='user' element={<User />}></Route>
          <Route path='hot-product' element={<ListHotPro />}></Route>
          <Route path='detail-proudct' element={<DetailPro />}></Route>
          <Route path='category' element={<ListCategory />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
