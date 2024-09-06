import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import ProdsByCategory from './components/Products/ProdsByCategory';
import AllProducts from './components/Products/AllProducts';
import SingleProductPage from './components/Products/SingleProductPage';
import Cart from './components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import About from './components/About/About';
import LogIn from './components/Login/LogIn';
import SignUp from './components/Login/SignUp';
import LoggedIn from './components/Login/LoggedIn';
import ProfilePage from './components/Login/ProfilePage';
import Payment from './components/Cart/Payment';

function App() {
  return (
    <div className="mobile-container">
      <CartProvider>
        <Router>
          <Header />

          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero /> <Categories />
                  </>
                }
              ></Route>
              <Route
                path="/category/:id/products"
                element={<ProdsByCategory />}
              ></Route>
              <Route path="/allproducts" element={<AllProducts />}></Route>
              <Route
                path="/products/:id"
                element={<SingleProductPage />}
              ></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<LogIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/logged-in" element={<LoggedIn />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route path="/payment" element={<Payment />}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
