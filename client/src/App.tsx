import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { Loader } from './components/Loader/Loader';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { ShopCategory } from './pages/ShopCategory/ShopCategory';
import { Product } from './pages/Product/Product';
import { Cart } from './pages/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { LoginSidePanel } from './components/LoginPanel/Login';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { Profile } from './pages/Profile/Profile';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { fetchProducts } from './features/products/productsSlice';
import { fetchNewCollection } from './features/newCollection/newCollectionSlice';

function App() {
  useEffect(() => {
    store.dispatch(fetchProducts());
    store.dispatch(fetchNewCollection());
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/women' element={<ShopCategory category='women' />}/>
        <Route path='/men' element={<ShopCategory category='men' />}/>
        <Route path='/kids' element={<ShopCategory category='kids' />}/>
        <Route path="/product/:productId" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
      <LoginSidePanel />
      <ShoppingCart />
      <Footer />
    </>
  )
}

export default App;
