import React, { useState } from "react";
import "./home.css";

const Home2 = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);

  const handleMouseOver = (event) => {
    event.target.classList.add('increase_width');
    setActive(true);
    setActive1(true);
  };

  const handleMouseOut = (event) => {
    event.target.classList.remove('increase_width');
    setActive(false);
    setActive1(false);
  };

  return (
    <div className="home2Container">
      <center>
        {/* <div className="box">
          <h2>
            If you have the courage and the commitment to learn coding, then
            Coding Ninjas will empower you.
          </h2>
          <h3>NO MATTER WHAT IT TAKES!</h3>
          <div className="box_div">
            <span className="box_span1">
              <img
                src="https://files.codingninjas.in/boxicon1-9659.svg"
                alt="404"
              />
              <p>Content designed by IIT & Stanford alumni</p>
            </span>
            <span className="box_span2">
              <img
                src="https://files.codingninjas.in/boxicon2-9658.svg"
                alt="404"
              />
              <p>Instant 1:1 doubt resolution</p>
            </span>
            <span className="box_span3">
              <img
                src="https://files.codingninjas.in/boxicon3-9657.svg"
                alt="404"
              />
              <p>
                Practical learning with 100+ problems & 10+ projects in each
                course
              </p>
            </span>
          </div>
          <img
            src="https://files.codingninjas.in/mask-group-2-min-9746.png"
            alt="404"
            className="box_img"
          />
        </div> */}
        <h2 className="box_text">14,000+ CODING NINJAS TO INSPIRE YOU</h2>
      </center>
      <section className="image_accordian">
        <div className="boxTable">
          <div onMouseOver={handleMouseOver} onMouseOut ={handleMouseOut} className={`table table1 ${active ? 'increase_width':null}`}></div>
          <div onMouseOver={handleMouseOver} onMouseOut ={handleMouseOut} className={`table table2 ${active1 ? 'increase_width':null}`}></div>
          <div className="table table3"></div>
          <div className="table table4"></div>
          <div className="table table5"></div>
        </div>
      </section>
      <center>
        <button className="btn_alumni">
          Hear more stories from our alumni
        </button>
      </center>
      <div className="hexa_div">
        <div className="hexa_div2">
          <div className="hexa_text">
            <span>Why Join Us?</span>
            <h1>Great students deserve the best jobs</h1>
            <p>Coding Ninjas Makes it Happen...</p>
          </div>
          <div>
            <img
              src="https://files.codingninjas.in/group-4456-9842.svg"
              alt="404"
              className="hexadiv_img2"
            />
            <div className="hexaFour">
              <img
                src="https://files.codingninjas.in/hex-9602.svg"
                alt="404"
                className="hexaFour"
              />
              <div className="hexatext1">
                <h1>150+</h1>
                <p>
                  Students working in <br /> FAANG
                </p>
              </div>
              <img
                src="https://files.codingninjas.in/hex-9602.svg"
                alt="404"
                className="hexaFour"
              />
              <div className="hexatext2">
                <h1>10</h1>
                <p>
                  Students started their <br />
                  own companies
                </p>
              </div>
            </div>
            <div className="hexaFour1">
              <img src="https://files.codingninjas.in/hex-9602.svg" alt="404" />
              <div className="hexatext3">
                <h1>50+</h1>
                <p>
                  Students having 5 <br />
                  Stars on CodeChef
                </p>
              </div>
              <img src="https://files.codingninjas.in/hex-9602.svg" alt="404" />
              <div className="hexatext4">
                <h1>100+</h1>
                <p>
                  Students received <br /> International Job Offers
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://files.codingninjas.com/group-4457-9843.svg"
          alt="404"
          className="hexadiv_img"
        />
      </div>
      <div className="root">
        <h2>Our students are placed at</h2>

        <div className="root_Container">
          <div className="company_img_container">
            <img
              src="https://files.codingninjas.in/google-9542.svg"
              alt="404"
            />
            <img
              src="https://files.codingninjas.in/microsoft-9541.svg"
              alt="404"
            />
            <img src="https://files.codingninjas.in/adobe-9540.svg" alt="404" />
            <img
              src="https://files.codingninjas.in/walmart-9539.svg"
              alt="404"
            />
            <img
              src="https://files.codingninjas.in/amazon-9538.svg"
              alt="404"
            />
            <img src="https://files.codingninjas.in/oyo-9537.svg" alt="404" />
          </div>
          <div className="company_img_container">
            <img
              src="https://files.codingninjas.in/flipkart-9536.svg"
              alt="404"
            />
            <img
              src="https://files.codingninjas.in/morganstanley-9535.svg"
              alt="404"
            />
            <img
              src="https://files.codingninjas.in/samsung-9534.svg"
              alt="404"
            />
            <img
              src="https://files.codingninjas.in/expedia-9533.svg"
              alt="404"
            />
            <img
              src="https://files.codingninjas.in/facebook-9532.svg"
              alt="404"
            />
          </div>
        </div>
        <button className="placement_btn">Download Placement Report</button>
      </div>
    </div>
  );
};

export default Home2;
