import React, { useState } from "react";
import TableStructure from "./TableStructure";
import { useDispatch,useSelector } from "react-redux";
import { selectUser, userLoginData } from "../slice/userSlice";
const Home = () => {
    const dispatch = useDispatch()
    const {publicData,privateData} = useSelector(selectUser)
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    dispatch(userLoginData(details))
  };
  return (
    <div className="container">
      <div className="grid text-center">
        <div className="g-col-4"></div>
        <div className="g-col-4">
          <form className="row g-col-4" onSubmit={handleSubmit}>
            <div className="g-col-4">
              <label className="">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="inputPassword2"
                onChange={handleChange}
              />
            </div>
            <div className="form-check">
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
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                add
              </button>
            </div>
          </form>
        </div>
        <div className="g-col-4"></div>
        <TableStructure />
      </div>
    </div>
  );
};

export default Home;
