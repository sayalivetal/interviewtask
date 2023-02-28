import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";


const Test = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails } = useSelector(selectUser);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [submitError, setSubmitError] = useState("")
  const [formError, setFormError] = useState({
    emailError: "",
    passError: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setUserData((userData) => {
        return {
            ...userData,
            [name]: value,
        }
    });
    if (
      name == "email" &&
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        value
      )
    ) {
      setFormError((state) => {
        return {
          ...state,
          emailError: "",
        };
      });
    } else if (name == "email") {
      setFormError((state) => {
        return {
          ...state,
          emailError: "Incorrect email",
        };
      });
    }
    if (name == "password" && value.length > 7) {
      setFormError((state) => {
        return {
          ...state,
          passError: "",
        };
      });
    } else if (name == "password") {
      setFormError((state) => {
        return {
          ...state,
          passError: "Password must be greater than 8 characters",
        };
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (userData.email == "" || userData.password == "" || formError.emailError || formError.passError) {
       
        setSubmitError("Please fill this field");
      } else {
       dispatch(login(userData));
       e.target.reset();
      }
  };
  useEffect(() => {
    //alert("csdd")
    if(userDetails?.email) {
      navigate("/home");
    }
  }, [userDetails]);
  return (
    <div className="col-3 m-auto">
        <div className="card ">
        <h4 className="card-header">
            Login Form
        </h4>
        <div className="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                <label className="visually-hidden">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter Email"
                />
                <div className="text-danger text-sm ">{!userData.email ? <span>{submitError}</span> : <span>{formError.emailError}</span>}</div>
                </div>
                <div className="col-12">
                <label className="visually-hidden">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleChange}
                />
                <div className="text-danger text-sm ">{!userData.password ? <span>{submitError}</span> : <span>{formError.passError}</span>}</div>
                </div>
                <div className="col-12">
                <button type="submit" className="btn btn-primary mb-3">
                    Login
                </button>
                </div>
            </form>
        </div>
        </div>
    </div>
  );
};
export default Test;