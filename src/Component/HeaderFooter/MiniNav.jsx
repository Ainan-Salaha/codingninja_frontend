import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { useAuth } from "../Context/Auth";
import { toast } from "react-toastify";


const MiniNav = () => {
  const [auth, setAuth] = useAuth();

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
    <div className='mini'>
        <div style={{"background": "transparent","lineHeight":"35px" , "width": "100%", "textAlign": "center"}} >
        
        <ul className="nav_ul1 ">
          
          <li className="course">
            <Link to='/enroll'>
            Course
            <span>
              <i className="fa-solid fa-caret-down"></i>
            </span>
            </Link>
           
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
          </ul>
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
                    <Link to="/classroom" className="classroom">
                      My Classroom
                    </Link>
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
          </div>
        

    </div>
  )
}

export default MiniNav