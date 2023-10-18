import React, { useState } from 'react';
import './Logindabba.css';
import dabbaImage from '../../img/db_per-removebg-preview.png';
import logoImage from '../../img/Db_logo-removebg-preview.png'

const Logindabba = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <section className="login_container section">
      <div className="container">
        <div className="row">

          <div className="logo">
            <img src={logoImage} alt="Logo" />
          </div>
          <div className="col-md-6 col-image d-flex justify-content-center align-items-center">
            <img src={dabbaImage} alt="" className="custom-img" />

          </div>
          <div className="col-md-6 col-login d-flex justify-content-center align-items-center">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" className="btn mt-4">submit</a>
                        <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="form-group">
                          <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                          <i className="input-icon uil uil-user"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div className="form-group mt-2 w-[350px]">
                          <input
                            type="file"
                            name=""
                            className="form-style"
                            placeholder=""
                            onChange={handleChange}
                          />
                          {/* <i className="input-icon uil uil-lock-alt"></i> */}
                          <img src={file} alt="" className="mx-12 -mt-4 py-2 object-contain w-20 z-20" />
                        </div>
                        <a href="#" className="btn mt-4">submit</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Logindabba;
