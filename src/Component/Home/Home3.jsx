import React from "react";
import "./home.css";

const Home3 = () => {
  return (
    <>
      <div className="home3Conatiner">
        <div className="flexBox">
          <div className="box1">
            <h1>4.9</h1>
            <img src="https://files.codingninjas.in/stars-9613.svg" alt="404" />
            <p>100+ reviews</p>
            <img
              src="https://files.codingninjas.in/fblogo-9599.svg"
              alt="404"
              className="flexboximg"
            />
          </div>
          <div className="box1">
            <h1>4.8</h1>
            <img src="https://files.codingninjas.in/stars-9613.svg" alt="404" />
            <p>100+ reviews</p>
            <img
              src="https://files.codingninjas.in/glogo-9600.svg"
              alt="404"
              className="flexboximg"
              style={{ height: "44px" }}
            />
          </div>
          <div className="box1">
            <h1>50+</h1>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              <p>Questions asked</p>
              <p>5000 answered</p>
            </div>
            <img
              src="https://files.codingninjas.in/qlogo-9611.svg"
              alt="404"
              className="flexboximg"
              style={{ height: "44px" }}
            />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Home3;
