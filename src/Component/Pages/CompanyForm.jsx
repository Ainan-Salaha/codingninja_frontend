import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    yrs_of_exp: "",
    company_city: "",
    company_state: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-codingninja.onrender.com/formcompany", formData);
      console.log("company form")
    } catch (error) {
      console.log("Error in formData", error);
    }
  };

  const handleSubmit = () => {
    alert("Form Submited SucessFully");
  };
  return (
    <div>
      <div className="classroom_nav">
        <img
          src="data:image/jpeg;base64,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"
          alt="404"
          className="class_img"
        />
        <h2>Classroom</h2>
        <Link to="/" style={{ textDecoration: "none" }}>
          <i className="fa-solid fa-house"></i>
          Home
        </Link>
      </div>
      <div className="formContainer">
        <div className="formData">
          <h2>Company Details </h2>
          <div className="minus">
            <span>
              <i className="fa-solid fa-minus"></i>
            </span>
            <span>
              <i className="fa-solid fa-minus"></i>
            </span>
            <span>
              <i className="fa-solid fa-minus"></i>
            </span>
          </div>
          <p style={{ color: "rgb(189, 185, 185)" }}>
            If fresher then put NA in all fields{" "}
          </p>
          <div className="form">
            <form className="inputLable" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Company Name *"
                required
                onChange={handleChange}
              />
              
              <input
                type="text"
                name="yrs_of_exp"
                id="yrs_of_exp"
                placeholder="Year of Experience *"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="company_city"
                id="company_city"
                placeholder="City *"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="company_state"
                id="company_state"
                placeholder="State *"
                required
                onChange={handleChange}
                //   value={logindata.email}
              />
              <div className="formBtn">
                <Link to="/form_data">
                  <button className="prevBtn">Previous</button>
                </Link>
                <Link to="/">
                  <button
                    type="submit"
                    className="nextBtn"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
