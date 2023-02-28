import React, { useState, useEffect } from "react";
import TableStructure from "./TableStructure";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userLoginData } from "../slice/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { publicData, privateData } = useSelector(selectUser);
  const [submitError, setSubmitError] = useState("");
  // const [formError, setFormError] = useState({
  //   emailError: "",
  //   passError: "",
  // })
  const [details, setDetails] = useState({
    name: "",
    data: "",
  });

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
      setSubmitError("Please fill this field");
    } else {
      dispatch(userLoginData(details));
      e.target.reset();
    }
 
  };

  return (
    <div className="container p-4">
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
                  <div className="text-danger text-sm ">
                    {<span>{submitError}</span>}
                  </div>
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
                    <div className="text-danger text-sm ">
                      {<span>{submitError}</span>}
                    </div>
                    
                  </div>
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data"
                      value="private"
                      id="flexRadioDefault2"
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Private</label>
                    <div className="text-danger text-sm ">
                      {<span>{submitError}</span>}
                    </div>
                    
                  </div>
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
