import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import cart from "../Assets/cart.jpg"
import { Link } from "react-router-dom";


const Navbar = () => {

    const[menu,setMenu] = useState("1");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width='60' height='50' />
        <p>JEWELLERY</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/1'>Home</Link>{menu==="1"?<hr/>:<></>}</li> 
        <li onClick={()=>{setMenu("11")}}><Link style={{textDecoration:'none'}} to='/2'>Necklace</Link>{menu==="2"?<hr/>:<></>}</li> 
        <li onClick={()=>{setMenu("22")}}><Link style={{textDecoration:'none'}} to='/3'>Ring</Link>{menu==="3"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("33")}}><Link style={{textDecoration:'none'}} to='/4'>Jhumka & Others</Link>{menu==="4"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" width='60' /></Link>
      <div className="nav-cart-count">0</div></div>
    </div>
  );
};

export default Navbar;
