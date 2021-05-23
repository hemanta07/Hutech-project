import React, { Component } from "react";
import "./login.css";
class Login extends Component {
  
  

  

  render() {
    return (
      <div className="container-fluid1 mt-5">
        <p>
          <span className="logo21 px-5">LOGO</span>
        </p>
        <div className="row">
          <img src="img/group-4.png" class="col-lg-9" alt="" />
          <div className="col-md-3 formDiv">
            <form className=" bg-light  w-100 form p-2 shadow">
              <h1 className="text-center">Login</h1>
              <div className="form-group">
                <label>
                  <b>User Name</b>
                </label>

                <input
                  type="text"
                  placeholder="Enter email "
                  class="form-control"
                 
                />
              </div>
              <div className="form-group">
                <label>
                  <b>Password</b>
                </label>

                <input
                  type="password"
                  placeholder="Enter Password"
                  class="form-control"
                 
                />
              </div>

              <div>
                <input type="checkbox" className=" check2" />
                <b className="check">Keep Me Signed In </b>

                <a href="#" className="link">
                  Forgot Password
                </a>
              </div>

              <button class=" form-control btn btn-primary " >Login</button>
              <p className=" text-center">
                Don't have a account ? <b>SignUp</b>
              </p>
            </form>
          </div>
        </div>
        <footer className=" Foot bg-primary height-40px">
          <br />
          <p>
            <b>Con-5 @ Online Ordering system 2019</b>
          </p>
        </footer>
      </div>
    );
  }
}
export default Login;
