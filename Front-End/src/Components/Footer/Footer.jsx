import React from 'react'
import './Footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiFillApple } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="contact">सम्पर्क</div>
      <div className="contact-line"></div>
      <div className="contact-info">
        <div className="contact-phone">
          <div className="contact-phone-title">phone num</div>
          <div className="contact-phone-number"><FaPhoneAlt />
            9841</div>
        </div>
        <div className="contact-phone">
          <div className="contact-phone-title">इमेल</div>
          <div className="contact-phone-number"><CiMail />
          nfo@aspssp.org.np</div>
        </div><div className="contact-phone">
          <div className="contact-phone-title">कार्यालय</div>
          <div className="contact-phone-number"><FaUser />
          पोखरा</div>
        </div>
      </div>
      <div className="responsive-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449955.21213662054!2d83.62765658215685!3d28.22932883952663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1729918512837!5m2!1sen!2snp" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="icon-line">
        <div className="icon-circle"><AiOutlineFacebook /></div>
        <div className="icon-circle"><CiTwitter /></div>
        <div className="icon-circle"><AiOutlineYoutube /></div>
      </div>
      <div className="install-line">
        <div className="playstore"><IoLogoGooglePlaystore />Google Play</div>
        <div className="company-name">आर्थर सरादिखोला पौडेल सेवा समाज ,पोखरा द्वारा संचालित</div>
        <div className="appstore"><AiFillApple />App Store</div>
      </div>
    </div>
  )
}

export default Footer