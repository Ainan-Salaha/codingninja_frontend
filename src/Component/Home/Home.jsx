import React from "react";
import "../Home/home.css";
import ConsoleText from "./SlideText";
import Home2 from "./Home2";
import Home3 from "./Home3";

const Home = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="mainDiv">
          <ConsoleText />
          <h1 className="h1_text">Be a Coding Ninja</h1>
          <p>50,000 Students from 300 colleges have trusted us</p>
          <button className="exploreBtn">Explore Our Programs</button>
        </div>
        <div className="homeImg">
          <img
            src="https://files.codingninjas.in/438375-17407.webp"
            alt="404"
            className="updown_animation"
          />
          <div>
            {/* <img
              src="https://files.codingninjas.com/circuits-8828.svg"
              alt="404"
              className="homeimg2"
            /> */}
            <img
              src="https://files.codingninjas.com/group-3931-8996.svg"
              alt="404"
              className="homeimg3"
            />
          </div>
        </div>
      </div>
      <center>
        <div className="box">
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
        </div>
      </center>
      {/* <div className="hr"></div> */}
      {/* <hr style={{border:"0.1px solid #e1dedd"}}/> */}
      {/* <center>
        <div class="triangle"></div>
      </center> */}
      <Home2 />
      <Home3 />
    </>
  );
};

export default Home;
