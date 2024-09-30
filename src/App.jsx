import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import Footer from "./Component/Footer/Footer";
import necklace_banner from "./Component/Assets/necklace_banner.jpg";
import rings_banner from "./Component/Assets/Rings_banner.jpg"
import jhumka_banner from "./Component/Assets/jhumka_banners.webp"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />  
        <Routes>
          <Route path="/1" element={<Shop />} />
          <Route path="/2" element={<ShopCategory banner={necklace_banner} category="a" />} />
          <Route path="/3" element={<ShopCategory banner={rings_banner} category="b" />} />
          <Route path="/4" element={<ShopCategory banner={jhumka_banner} category="c" />} />
          <Route path="/product" element={<Product />}>
          <Route part=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
