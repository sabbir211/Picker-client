import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Registration from './Pages/Login/Registration';
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/Register' element={<Registration/>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
