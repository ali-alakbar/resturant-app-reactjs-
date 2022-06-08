import "./App.css";
// import Home from "./routes/home/Home";
import Contact from "./routes/contact/Contact";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Wishlist from "./routes/Wishlist/Wishlist";
import Checkout from "./routes/Checkout/Checkout";
import Policy from "./routes/Policy/Policy";
import Account from "./routes/Account/Account";
import { useState } from "react";
import Data from "./Data/Data.json";
import Cart from "./routes/Cart/Cart";
import FAQ from "./routes/FAQ/FAQ";
import Terms from "./routes/Terms/Terms";
import History from "./routes/OurHistory/History";
import Blog from "./routes/Blog/Blog";
import BlogSingle from "./routes/BlogSingle/BlogSingle";
import BlogGrid from "./routes/BlogGrid/BlogGrid";
import Shop from "./routes/Shop/Shop";
import About from "./routes/About/About";
import Menu from "./routes/Menu/Menu";
import HomeOne from "./routes/home/HomeOne/HomeOne"
import HomeTwo from "./routes/home/HomeTwo/HomeTwo";

const App = () => {
  const { products } = Data;
  const [cart, setCart] = useState([]);

  const onAdd = (pro) => {
    setCart([...cart, { ...pro }]);
  };

  const onRemove = (pro) => {
    setCart(cart.filter((product) => product !== pro));
  };

  return (
    <main className="App">
      <BrowserRouter>
        <NavBar productsLength={products.length} cartLength={cart.length} />
        <Routes>
          <Route
            path={"/HomeOne"}
            className="page-activated"
            element={<HomeOne cart={cart} onAdd={onAdd} />}
          />
          <Route
            path={"/resturant-app-reactjs-"}
            className="page-activated"
            element={<HomeTwo cart={cart} onAdd={onAdd} />}
          />
          <Route
            path={""}
            className="page-activated"
            element={<HomeOne cart={cart} onAdd={onAdd} />}
          />
          <Route
            path={"/"}
            className="page-activated"
            element={<HomeOne cart={cart} onAdd={onAdd} />}
          />

          <Route
            path={"/HomeTwo"}
            className="page-activated"
            element={<HomeTwo cart={cart} onAdd={onAdd} />}
          />
          <Route
            path="/Contact"
            className="page-activated"
            element={<Contact />}
          />
          <Route
            path="/Wishlist"
            className="page-activated"
            element={
              <Wishlist
                cartLength={cart.length}
                cart={cart}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/Checkout"
            className="page-activated"
            element={<Checkout cart={cart} />}
          />
          <Route
            path="/Policy"
            className="page-activated"
            element={<Policy />}
          />
          <Route
            path="/Cart"
            className="page-activated"
            element={
              <Cart cart={cart} onRemove={onRemove} cartLength={cart.length} />
            }
          />
          <Route
            path="/Account"
            className="page-activated"
            element={<Account />}
          />
          <Route path="/FAQ" className="page-activated" element={<FAQ />} />
          <Route path="/Terms" className="page-activated" element={<Terms />} />
          <Route
            path="/History"
            className="page-activated"
            element={<History />}
          />
          <Route
            path="/BlogList"
            className="page-activated"
            element={<Blog />}
          />
          <Route
            path="/BlogGrid"
            className="page-activated"
            element={<BlogGrid />}
          />
          <Route
            path="/BlogSingle"
            className="page-activated"
            element={<BlogSingle />}
          />
          <Route
            path="/Shop"
            className="page-activated"
            element={
              <Shop
                cart={cart}
                resultNumber={products.length}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route path="/About" className="page-activated" element={<About />} />
          <Route
            path="/Menu"
            className="page-activated"
            element={<Menu cart={cart} onAdd={onAdd} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
