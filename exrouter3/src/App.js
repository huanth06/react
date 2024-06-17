import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import MainContent from './pages/MainContent';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
   <>
    <Routes>
      <Route path='' element={<Home />}>
        <Route path='/' element={<MainContent />}></Route>
        <Route path='/detail' element={<ProductDetail />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Route>
    </Routes>
   </>
  );
}

export default App;
