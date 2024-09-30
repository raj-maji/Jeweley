import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_logo from '../Assets/Instagram_logo.jpg'
import pinterest_logo from '../Assets/pinterest_logo.jpg'
import whatsapp_logo from '../Assets/whatsapp.jpg'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" width='60' height='50'/>
        <p>JEWELLERY</p>

        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-logo">
            <div className="footer-logo-container">
                <img src={instagram_logo} alt="" width='50' height='50' />
            </div>
            <div className="footer-logo-container">
                <img src={pinterest_logo} alt="" width='50' height='50'/>
            </div>      
            <div className="footer-logo-container">
                <img src={whatsapp_logo} alt=""width='50' height='50' />
            </div>
        </div>
            <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer