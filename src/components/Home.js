import React, { useState, useEffect } from "react";
import TableStructure from "./TableStructure";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userLoginData, logout } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails } = useSelector(selectUser);
  const { publicData, privateData1, privateData2 } = useSelector(selectUser);
  const [submitError, setSubmitError] = useState("");

  const email = localStorage.getItem("email");
  const [details, setDetails] = useState({
    name: "",
    data: "",
    email,
  });
  console.log(details.data);
  const handleChange = (e) => {
    setDetails(() => ({
      ...details,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (details.name || details.data) {
      setSubmitError("");
    }
  }, [details]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.name == "" || details.data == "") {
      setSubmitError("Please fill all fields");
    } else {
      dispatch(userLoginData(details));

      e.target.reset();
    }
  };

  const handleLogout = (e) => {
    //dispatch(logout())
    e.preventDefault();

    navigate("/");
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12 d-flex">
          <button
            type="button"
            onClick={handleLogout}
            className="btn btn-primary ml-auto mb-3"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card ">
            <h5 className="card-header">Add Data</h5>
            <div className="card-body">
              <form className="row " onSubmit={handleSubmit}>
                <div className="col-12 mb-3">
                  <label className="">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="inputPassword2"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 d-flex mb-3">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      value="public"
                      name="data"
                      type="radio"
                      id="flexRadioDefault1"
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Public</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data"
                      value="private"
                      id="flexRadioDefault2"
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Private</label>
                  </div>
                </div>
                <div className="text-danger text-sm ">
                  {<span>{submitError}</span>}
                </div>
                <div className="col-12 mb-3">
                  <button type="submit" className="btn btn-primary mb-3">
                    Add Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-8">
          <TableStructure />
        </div>
      </div>
    </div>
  );
};

export default Home;
