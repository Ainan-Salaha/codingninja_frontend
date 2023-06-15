import React from "react";
import "./nav.css";

const Footer = () => {
  return (
    <div>
      <div className="container dark_back">
        <div className="footerContainer  ">
          <div className="footleft">
            <img
              src="https://files.codingninjas.in/new-logo-03-11984.svg"
              alt="404"
              className="footerImg"
            />
            <p> Copyright © Sunrise Mentors Pvt. Ltd. </p>
          </div>
          <div className="footerMiddle">
            <div className="middleConatiner">
              <p>CODING NINJAS</p>
              <ul className="links">
                <li>About Us </li>
                <li>Careers </li>
                <li>Privacy </li>
                <li>Policy </li>
                <li>Terms & Conditions </li>
                <li>Pricing & Refund Policy </li>
                <li>Bug Bounty </li>
                <li>Our Students </li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="middleConatiner">
              <p>PRODUCTS</p>
              <ul className="links">
                <li>Courses </li>
                <li>Try courses for Free </li>
                <li>Career Camp </li>
                <li>Mock Interviews </li>
                <li>Hire Talent</li>
              </ul>
            </div>

            <div className="middleConatiner">
              <p>COMMUNITY</p>
              <ul className="links">
                <li>Coding Ninjas Studio </li>
                <li>Blog </li>
                <li>Events </li>
                <li>Campus Ninja </li>
                <li>Affiliate</li>
                <li>Scholarship Event </li>
                <li>Placement cell</li>
              </ul>
            </div>

            <div className="rightContainer">
              <p>FOLLOW US ON</p>
              <div className="containerImg">
                <img
                  src="https://files.codingninjas.in/0000000000003240.png"
                  alt="404"
                />
                <img
                  src="https://files.codingninjas.in/0000000000003241.png"
                  alt="404"
                />
                <img
                  src="https://files.codingninjas.in/0000000000003245.png"
                  alt="404"
                />
                <img
                  src="https://files.codingninjas.in/0000000000003247.png"
                  alt="404"
                />
                <img
                  src="https://files.codingninjas.in/0000000000003242.png"
                  alt="404"
                />
                <img
                  src="https://files.codingninjas.in/telegram-8247.svg"
                  alt="404"
                />
              </div>
              <p>CONTACT US</p>
              <ul className="links">
                <div className="link_div">
                  <img
                    src="https://files.codingninjas.in/0000000000003251.png"
                    alt="404"
                    className="imgg"
                  />
                  <li>1800-123-3598</li>
                  
                </div>
              </ul>
              <ul className="links">
              <div className="link_div">
                  <img
                    src="https://files.codingninjas.in/0000000000003250.png"
                    alt="404"
                    className="imgg"
                  />
                  <li>contact@codingninjas.com</li>
                  </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="payment_Div">
        <p>We accept payments using:</p>
        <img src="https://files.codingninjas.in/visa-5604.png" alt="404" />
        <img src="https://files.codingninjas.in/paypal-5603.png" alt="404" />
        <img src="https://files.codingninjas.in/upi-5602.png" alt="404" />
        <img src="https://files.codingninjas.in/secure-5600.png" alt="404" />

        <img src="https://files.codingninjas.in/razorpay-5598.png" alt="404" />
      </div>
    </div>
  );
};

export default Footer;
