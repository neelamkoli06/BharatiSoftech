import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span style={{ color: "#61399f" ,fontWeight:'bold'}}>Upstox</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  aria-current="page"
                  href="#"
                >
                  Invest
                </a>
              </li>
              <li className="nav-item" id="navbarTogglerDemo03">
                <a
                  className="nav-link active"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  aria-current="page"
                  href="#"
                >
                  Trade
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  News
                  <sup>
                    <span
                      class="badge badge-secondary"
                      style={{
                        background: "#41246E",
                        color: "white",
                        fontSize: "8px",
                        marginLeft: "3px",
                        fontWeight: "bold",
                      }}
                    >
                      New
                    </span>
                  </sup>
                </a>
              </li>
              <li className="nav-item" id="navbarTogglerDemo03">
                <a
                  className="nav-link active"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  aria-current="page"
                  href="#"
                >
                  UpLearn
                </a>
              </li>
              <li className="nav-item" id="navbarTogglerDemo03">
                <a
                  className="nav-link active"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  aria-current="page"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Partner with Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control border-dark me-2"
                type="search"
                placeholder="Search any stock, MF, etc."
                aria-label="Search"
                style={{ height: "38px" }}
              />
              <button
                className="btn btn-outline-dark me-2"
                id="btn1"
                type="submit"
                style={{
                  height: "38px",
                  padding: "0 15px",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  whiteSpace: "nowrap",
                  borderRadius: "25px",
                  backgroundcolor: "#61399f",
                }}
              >
                Open a Demat Account
              </button>
              <button
                className="btn btn-outline-dark"
                id="btn2"
                type="button"
                style={{
                  height: "38px",
                  padding: "0 15px",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  whiteSpace: "nowrap",
                  borderRadius: "25px",
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="collapse" id="collapseExample">
        <div
          className="card card-body"
          style={{ background: "#5A2989", color: "white" }}
        >
          <ul>
            <h6>Invest</h6>
            <li>Stocks</li>
            <li> Mutual </li>
            <li>Funds </li>
            <li>IPOs</li>
            <li>Sovereign</li>
            <li>Gold </li>
            <li>Bonds</li>
          </ul>
          <ul>
            <h6>Tools</h6>
            <li>Income Tax Calculator</li>
            <li>MF Return Calculator</li>
            <li> SIP Calculator</li>
            <li>ELSS Calculator</li>
            <li>Gold Rate Tracker</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
