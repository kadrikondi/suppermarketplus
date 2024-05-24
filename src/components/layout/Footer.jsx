import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faTiktok,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

export default function Footer() {
  return (
   <footer>
     <div className='containers'>
      <div className='row'>
        <div className='col'>
        <h2 style={{fontSize:'30px'}}>Supermarketplus</h2>
          <p>About us</p>
          <p>Privacy policy</p>
          <p>Our services</p>
          <p>More info</p>
        </div>
        <div className='col'>
          <h2>About us</h2>
          <p>SupermarketPlus is your one-stop destination for all your grocery needs. We offer a wide range of products including fresh produce, dairy, meats, pantry staples, and more. Our mission is to provide high-quality products at affordable prices while delivering exceptional customer service.</p>

        </div>
        <div className='col'>
          <h2>Online-Shop</h2>
        <ul>
        <li>Shop Bags</li>
        <li>Shop Shoes</li>
        <li>Shop Belt</li>
        <li>Grocery </li>
        <li>Home appliance</li>
        <li>kitchen accessories</li>
      </ul>
        </div>
        <div className='col'>
          <h2>contact us </h2>
          <p><strong>Address:</strong> 3rd Floor, The City Mall, beside TBS, Lagos Island, Lagos 102273, Lagos</p>
          <p><strong>Email:</strong> info@supermarketplus.com</p>
          <p><strong>Phone:</strong> +234 90 3095 9063</p>
        </div>
        <div className='col'>
          <h2>Follow us</h2>
          <a href="https://facebook.com/example">
           <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/example">
          <FontAwesomeIcon icon={faTwitter} />
           </a>
           <a href="https://twitter.com/example">
          <FontAwesomeIcon icon={faTiktok} />
           </a>
           <a href="https://twitter.com/example">
          <FontAwesomeIcon icon={faLinkedin} />
           </a>
        </div>

      </div>
      
     </div>
     <hr />
     <p className='six'>© 2024 SupermarketPlus. All rights reserved.</p>
   </footer>
  )
}
