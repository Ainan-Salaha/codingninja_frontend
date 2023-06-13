import React, { useState } from "react";
import "./nav.css";
import MiniNav from "./MiniNav";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import { toast } from "react-toastify";

const Nav = () => {
  const [auth, setAuth] = useAuth();

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert("For Logging Out press OK");
    toast.success("Logout Successfully...");
  };
  return (
    <>
      <div className="navContainer">
        <div className="navbar">
          <ul className="nav_ul">
            <img
              src="https://files.codingninjas.in/logo_variants-white-25005.png"
              alt="404"
              className="img"
            />
            <li className="course">
              Course
              <span>
                <i className="fa-solid fa-caret-down"></i>
              </span>
              <div className="dropdown_course">
                <div className="content_course">
                  <div>
                    <h2>What is your work experience?</h2>
                    <br />

                    <span>
                      This will help us recommend the best programs for you.
                    </span>
                  </div>
                  <div className="nav_cards">
                    <Link to="/enroll" className="experience_box">
                      <div>
                        <img
                          alt="404"
                          src="https://files.codingninjas.com/student-24426.png"
                        />
                      </div>
                      <div>
                        <h1>
                          No work
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &gt;
                          <br /> experience{" "}
                        </h1>
                      </div>
                      <p>Designed as per college student schedule</p>
                    </Link>
                    <Link to="enroll" className="experience_box">
                      <div>
                        <img
                          alt="404"
                          src="https://files.codingninjas.com/professional-24427.png"
                        />
                      </div>
                      <div>
                        <h1>
                          Having work &nbsp;&nbsp; &gt;
                          <br /> experience{" "}
                        </h1>
                      </div>
                      <div>Designed as per working professional schedule</div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li>
              Scholarship <span className="scholar">UPTO 100% OFF</span>
            </li>
            <li>
              Community
              <span>
                <i className="fa-solid fa-caret-down"></i>
              </span>
            </li>
            <li className="practice">
              Practice
              <span>
                <i className="fa-solid fa-caret-down"></i>
              </span>
              <div className="dropdown_practice">
                <p>Coding Ninja's Studio</p>
                <hr />
                <p>Contest</p>
                <p>Guided Paths</p>
                <p>Code Problems</p>
                <p>Interview Experiences</p>
                <p>Mock Tests</p>
              </div>
            </li>
            <li className="new_container">
              <img
                src="https://files.codingninjas.in/careercamp-12614.svg"
                alt="404"
              />
              <span className="new_shine_container">new</span>
            </li>
            <div className="btn dropdown_nav">
              {!auth?.user ? (
                <>
                  <Link to="/login" className="loginBtn">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <span className="dropdown">
                    <span className="loginBtn">{auth?.user.name}</span>
                    <Link
                      onClick={handleLogout}
                      to="/login"
                      style={{ color: "orange", cursor: "pointer" }}
                    >
                      Logout
                    </Link>
                  </span>
                </>
              )}
              <Link to="/enroll">
                <button className="enrollBtn">Enroll More</button>
              </Link>
            </div>
          </ul>
        </div>
        {/* responsive nav bar */}
      </div>
      <div className="miniMenu">
        <button onClick={handleMenu} id="minimenu">
          <i className="fa-solid fa-bars"></i>
        </button>
        <img
          src="https://files.codingninjas.in/logo_variants-white-25005.png"
          alt="404"
          className="img"
        />
        <div className="btn dropdown_nav">
          {!auth?.user ? (
            <>
              <Link to="/login" className="loginBtn">
                Login
              </Link>
            </>
          ) : (
            <>
              <span className="dropdown">
                <span className="loginBtn">{auth?.user.name}</span>
                <Link
                  onClick={handleLogout}
                  to="/login"
                  style={{ color: "orange", cursor: "pointer" }}
                >
                  Logout
                </Link>
              </span>
            </>
          )}
        </div>
        {/* <button className='btnback'> <Link to='/' style={{ "fontSize": "2rem" }}><i className="fa-solid fa-arrow-left"></i></Link></button> */}
        {menu && <MiniNav />}
      </div>
    </>
  );
};

export default Nav;
