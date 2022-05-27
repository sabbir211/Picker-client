import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Registration from './Pages/Login/Registration';
import Header from './Pages/Home/Header/Header';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/dashboard/Dashboard';
import MyOrders from './Pages/dashboard/MyOrders';
import AddReview from './Pages/dashboard/AddReview';
import MyProfile from './Pages/dashboard/MyProfile';
import PaymentPage from './Pages/dashboard/PaymentPage';
import MakeAdmin from './Pages/dashboard/MakeAdmin';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import ManageAllOrder from './Pages/dashboard/AdminCompo/ManageAllOrder';
import ManageATool from './Pages/dashboard/AdminCompo/ManageATool';
import AddTool from './Pages/dashboard/AdminCompo/AddTool';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/Shared/Notfound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Registration />}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
        <RequireAuth>
           <Dashboard></Dashboard>
        </RequireAuth>
       }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='paymentpage/:id' element={<PaymentPage></PaymentPage>}></Route>
          <Route path='makeadmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='manageAllOrder' element={<RequireAdmin><ManageAllOrder></ManageAllOrder></RequireAdmin>}></Route>
          <Route path='manageTools' element={<RequireAdmin><ManageATool></ManageATool></RequireAdmin>}></Route>
          <Route path='addTool' element={<RequireAdmin><AddTool></AddTool></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
