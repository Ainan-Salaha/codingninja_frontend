import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Component/HeaderFooter/Nav";
import Home from "./Component/Home/Home";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Enroll from "./Component/Pages/Enroll";
import Courses from "./Component/Pages/Courses";
// import Payment from './Component/Pages/Payment/Payment';
import PaymentPage from "./Component/Pages/Payment/Payment";
import NoExp from "./Component/Pages/NoExp";
import Exp from "./Component/Pages/Exp";
import CourseDetail from "./Component/Pages/CourseDetail";
import Classroom from "./Component/Pages/Classroom";
import FormClass from "./Component/Pages/FormClass";
import Footer from "./Component/HeaderFooter/Footer";
import FormData from "./Component/Pages/FormData";
import CompanyForm from "./Component/Pages/CompanyForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <Home/> */}
        <Routes>
          <Route path="*"></Route>
          <Route path="/" element={<Home />} />
          {/* <Route path='/home' element={<Home/>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/noexp" element={<NoExp />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/formclass" element={<FormClass />} />
          <Route path="/form_data" element={<FormData />} />
          <Route path="/companydetail" element={<CompanyForm />} />
          <Route path="/course_detail" element={<CourseDetail />} />

          {/* <Route path='/course_detail' element={<CourseDetail/>} /> */}
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
