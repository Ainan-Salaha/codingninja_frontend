import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify'
import "./login.css";
import { useAuth } from "../Context/Auth";

const Login = () => {
  const [logindata, setLogindata] = useState({ email: "", password: "" });
  const [auth, setAuth] = useAuth();
  const navigate= useNavigate()

  const handleChange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(logindata);

      try {
          const res =await axios.post("https://backend-codingninja.onrender.com/login",logindata)
          if(res){
            console.log("login sucess")
            toast.success(res.data.message)
            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token
            });
            localStorage.setItem("auth",JSON.stringify(res.data));
            navigate('/')
        }
      } catch (error) {
        console.log('Error in login',error)
        toast.error("Kindly fill the repected field Or Checking details are enter correctly..")

      }
  };

  return (
    <>
      <div className="loginContainer">
        <div className="login_text">
          <h2 style={{ textAlign: "center" }}>
            Login/Sign Up
            <Link to="/">
              <span style={{ color: "#d6d1e1" }}>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </Link>
          </h2>
        </div>

        <div className="login">
          {/* google div */}
          <div className="social_div">
            <img
              alt="404"
              style={{ display: "inline" }}
              src="https://files.codingninjas.in/icon-google-24742.png"
            />
            <span style={{ display: "inline" }}>
              <a
                target="blank"
                href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=974791617509-tbrgtb2s7r15h1pqe6qb9rhvvk3mh161.apps.googleusercontent.com&prompt=select_account&redirect_uri=https%3A%2F%2Fadmin.codingninjas.com%2Fusers%2Fauth%2Fgoogle_oauth2%2Fcallback&response_type=code&scope=email%20profile&state=edb35552d0d5cdc2c804131eb3bbf00723367fbd5aab37c8&service=lso&o2v=1&flowName=GeneralOAuthFlow"
              >
                Login with Google
              </a>
            </span>
          </div>
          {/* facebook div  */}
          <div className="social_div">
            <img
              alt="404"
              style={{ display: "inline" }}
              src="https://files.codingninjas.in/icon-fb-24743.png"
            />
            <span style={{ display: "inline" }}>Login with facebook</span>
          </div>

          {/* naukri div */}
          <div className="social_div">
            <img
              alt="404"
              style={{ display: "inline", height: "40px", width: "20px" }}
              src="https://files.codingninjas.in/naukri-21404.svg"
            />
            <span style={{ display: "inline" }}>Login with Naukri</span>
          </div>
          <div className="horizontal_divder">
            <h3>OR</h3>
          </div>
          <p>use your email addresss</p>

          <form className="loginForm" onSubmit={submitHandler}>
            <input
              type="email"
              name="email"
              id="email"
            //   required
              placeholder="Email *"
              onChange={handleChange}
            //   value={logindata.email}
            />
            <input
              type="password"
              name="password"
              id="password"
            //   required
              placeholder="Password *"
              onChange={handleChange}
            />

            <button type="submit" className="inputBtn">Proceed</button>
          </form>
          <div>
            Not have an account? <Link to="/signup" className="link">Signup</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

//  import React, { useState } from "react";
//  import { Link } from "react-router-dom";
//  import Home from "../Home/Home";
// import "./login.css";
// import axios from "axios";
// import { toast } from "react-toastify";
//  import { useAuth } from "../Context/Auth";

//  const Login = () => {
// //   const navigate = useNavigate();
//   const [logindata, setLogindata] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const [auth, setAuth] = useAuth();

//   async function login() {
//     let errorObj = {};
//     if (!logindata.email) {
//       errorObj.email = "Email is required";
//     }
//     if (!logindata.password) {
//       errorObj.password = "Password is required";
//     }
//     if (Object.keys(errorObj).length > 0) {
//         setError(errorObj);
//         return;
//       }

//     // try {
//     //   let axioxlogin = await axios.post(
//     //     `http://localhost:8000/login`,
//     //     logindata
//     //   );
//     //   console.log(logindata)
//     //   toast.success(axioxlogin.data.message);

//     //   setAuth({
//     //     ...auth,
//     //     user: axioxlogin.data.user,
//     //     token: axioxlogin.data.token,
//     //   });

//     //   localStorage.setItem("userDetails", JSON.stringify(axioxlogin.data));
//     //   navigate("/");
//     // } catch (error) {
//     //   toast.error(
//     //     "Kindly fill the repected field Or Checking details are enter correctly.."
//     //   );
//     // }

//   }
//   const submitHandler=async(e)=>{
//     e.preventDefault();
//     console.log(logindata)
//     try {
//       const res=await axios.post("http://localhost:8080/login",logindata);
//       if(res){
//         alert(`Welcome Ninja!`)
//        toast.success(res.data.message);

//         // navigate('/*')
//         console.log("Login Successfully");
//         setAuth({
//           ...auth,
//           user:res.data.user,
//           token:res.data.token
//         });
//         localStorage.setItem("auth",JSON.stringify(res.data));
//       }
//     } catch (error) {
//       console.log('Error in login',error)
//     }
//   }
//   function onChange(e) {
//     setLogindata({ ...logindata, [e.target.name]: e.target.value });
//   }
//   return (
//     <>
//       <Home />

//       <div className="loginContainer">
//         <div className="login_text">
//           <h2 style={{ textAlign: "center" }}>
//             Login/Sign Up
//             <Link to="/">
//               <span style={{ color: "#d6d1e1" }}>
//                 <i className="fa-solid fa-xmark"></i>
//               </span>
//             </Link>
//           </h2>
//         </div>

//         <div className="login">
//           {/* google div */}
//           <div className="social_div">
//             <img
//               alt="404"
//               style={{ display: "inline" }}
//               src="https://files.codingninjas.in/icon-google-24742.png"
//             />
//             <span style={{ display: "inline" }}>
//               <a
//                 target="blank"
//                 href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=974791617509-tbrgtb2s7r15h1pqe6qb9rhvvk3mh161.apps.googleusercontent.com&prompt=select_account&redirect_uri=https%3A%2F%2Fadmin.codingninjas.com%2Fusers%2Fauth%2Fgoogle_oauth2%2Fcallback&response_type=code&scope=email%20profile&state=edb35552d0d5cdc2c804131eb3bbf00723367fbd5aab37c8&service=lso&o2v=1&flowName=GeneralOAuthFlow"
//               >
//                 Login with Google
//               </a>
//             </span>
//           </div>

//           {/* facebook div */}
//           <div className="social_div">
//             <img
//               alt="404"
//               style={{ display: "inline" }}
//               src="https://files.codingninjas.in/icon-fb-24743.png"
//             />
//             <span style={{ display: "inline" }}>Login with facebook</span>
//           </div>

//           {/* naukri div */}
//           <div className="social_div">
//             <img
//               alt="404"
//               style={{ display: "inline", height: "40px", width: "20px" }}
//               src="https://files.codingninjas.in/naukri-21404.svg"
//             />
//             <span style={{ display: "inline" }}>Login with Naukri</span>
//           </div>

//           <div className="horizontal_divder">
//             <h3>OR</h3>
//           </div>

//           <p>use your email addresss</p>
//           {/* <form  onClick={submitHandler}> */}
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="inputLogin"
//             value={logindata.email}
//             onChange={onChange}
//             placeholder="Email address *"
//           />
//           {error.email && <p style={{ color: "red"}}>{error.email}</p>}
//           {/* {error && <div className="error_msg">error</div>} */}

//           <input
//             type="password"
//             name="password"
//             id="password"
//             className="inputLogin"
//             placeholder="Password *"
//             value={logindata.password}
//             onChange={onChange}
//           />
//           {error.password && <p style={{ color: "red"}}>{error.password}</p>}

//           {/* <Link > */}
//             <input
//               type="submit"
//               value="Continue"
//               className="inputBtn inputLogin"
//               onClick={login}
//             />
//           {/* </Link> */}
//           {/* </form> */}
//          <span>Not have an account ?</span> <Link to='/signup' className="signBtn">Signup</Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
