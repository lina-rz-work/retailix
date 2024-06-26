import './App.css';
import { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { ShopCategory } from './pages/ShopCategory/ShopCategory';
import { Product } from './pages/Product/Product';
import { Cart } from './pages/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { LoginSidePanel } from './components/LoginPanel/Login';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { store, persistor } from './store/store';
import { Profile } from './pages/Profile/Profile';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { fetchProducts } from './features/products/productsSlice';
import { Loader } from './components/Loader/Loader';

function App() {
  useEffect(() => {
    store.dispatch(fetchProducts());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
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
        </BrowserRouter> 
      </PersistGate> 
    </Provider>
  )
}

export default App;
