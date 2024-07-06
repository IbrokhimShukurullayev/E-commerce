import './App.css';
import Header from './components/header/Header';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/home/Home';
import Blog from "./pages/blog/Blog"
import Contact from "./pages/contact/Contact"
import Wishlist from './pages/wishlist/Wishlist';
import Cart from './pages/cart/Cart';
import About from './pages/about/About';
import Admin from "./pages/admin/Admin"
import Auth from './Auth/Auth';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Return from './pages/return/Return';
import NotFound from './components/404/NotFound';
import Garant from './pages/garants/Garants';
import DeliveryPayment from './pages/deliveryPayment/DeliveryPayment';
import CreateProduct from './pages/admin/create-product/CreateProduct';
import ManageProduct from './pages/admin/manage-product/ManageProduct';
import CreateCategory from './pages/admin/create-category/CreateCategory';
import ManageCategory from './pages/admin/manage-category/ManageCategory';
import Single from './components/single/Single';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/return" element={<Return />} />
        <Route path="/login" element={<Login />} />
        <Route path="/garants" element={<Garant />} />
        <Route path="/payment" element={<DeliveryPayment />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Auth />}>
            <Route path="/admin" element={<Admin />}>
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="manage-product" element={<ManageProduct />} />
              <Route path="create-category" element={<CreateCategory />} />
              <Route path="manage-category" element={<ManageCategory />} />
            </Route>
          </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
