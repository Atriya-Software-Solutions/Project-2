import React from 'react'
import './Navbar.css'
import web_logo from '../../assets/web-logo.png'
import menu from '../../assets/Menu.png'
import globe from '../../assets/Globe.png'
import search from '../../assets/Search.png'

const Navbar = () => {
  return (
    <div className='navbar'>
  <img src={web_logo} alt="" className='logo' />
  <ul>
    <li>आर्थर सरादिखोला पौडेल सेवा समाज, पोखरा</li> 
    <li><div className="search"><img src={search} alt='' /></div></li>
    <li><div className="globe"><img src={globe} alt='' /> English</div></li> 
    <li><div className="naya">नयाँ सदस्यता</div></li> 
    <li><img src={menu} alt='' className='menu' /></li> 
  </ul>
</div>

  )
}

export default Navbar