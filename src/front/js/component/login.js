import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/home.css";
export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //const token = sessionStorage.getItem("token");
  console.log("This is your token", store.token);
  const handleClick = () => {
    actions.login(email, password);
  };
  if (store.token && store.token != "" && store.token != undefined) {
    navigate("/");
  }
  return (
    <div className="text-center my-5">
      {store.token && store.token != "" && store.token != undefined ? (
        "You are logged in with this token" + store.token
      ) : (
        <div className="container-fluid">
          <div className="row d-flex main-content text-center w-50 rounded shadow-lg my-5 mx-auto p-4">
            <div className="col-md-8 col-xs-12 col-sm-12 login-form mx-auto bg-white rounded">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <h1 className="font-weight-light">Login</h1>
                </div>
                <div className="row justify-content-center"></div>
                <form
                  // onChange={(e) => onChange(e.target)}
                  // onSubmit={handleClick}
                  control=""
                  className="form-group p-2 w-100"
                >
                  <div className="row justify-content-center mt-2">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="row justify-content-center mt-2">
                    <input
                      type="password"
                      value={password}
                      name="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
                      placeholder="Password"
                    />
                  </div>
                  <div className="row justify-content-center mt-4">
                    <input
                      onClick={handleClick}
                      type="button"
                      value="Login"
                      className="btn-primary rounded w-100 border-0 py-2"
                    />
                  </div>
                </form>
              </div>
              <div className="row justify-content-center">
                <p>
                  Don't have an account? <Link to="/signup">Signup here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
















