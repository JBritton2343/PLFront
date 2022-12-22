import React, { useState, useContext } from "react";
//import PropTypes from "prop-types";
import { Link ,useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const checkPass=()=>{
    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

          

      if (input["password"] != input["confirm_password"]) {
  
        isValid = false;
  
        errors["password"] = "Passwords don't match.";
  
      }
  
  }
  }

  return (
    
    <div>
      <form>
      <div className="mb-3">
    
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            onChange={(e) => setUser(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => setUser(e.target.value)}
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="password1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </div>
        <div>
        <label for="password2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password2"
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="showPass"
          ></input>
          <label className="form-check-label" for="showPass">
            view password
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={(checkPass)}>                
         Submit
        </button>
      </form>
    </div>
    
  );
};

