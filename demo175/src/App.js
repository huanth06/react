import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';

function App() {
  return (
    <>
    <h1>Demo</h1>
    <hr />
    <ul className='menu'>
      <li><Link to={'/home'}>Home</Link></li>
      <li><Link to={'login'}>Login</Link></li>
      <li><Link to={'register'}>Register</Link></li>
      <li><Link to={'admin'}>admin</Link></li>
    </ul>
    <hr />
    <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='admin' element={<Admin></Admin>}></Route>
    </Routes>
    </>
  );
}

export default App;
