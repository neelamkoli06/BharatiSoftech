import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="col-md-12 text-center" id="home">
        <div className="" id="div1">
          <div className="col-sm-12" id="div1-1"></div>
          <div className="col-md-12" id="div1-2">
            <h3 className="fw-bold text-start" style={{ color: "#41246E" }}>
              Invest Right, Invest Now With Upstox
            </h3>
            <h3 className="fw-normal text-start" style={{ color: "#41246E" }}>
              Trusted by 1 Crore+ Indians
            </h3>
            <input
              type="text"
              placeholder="Enter your mobile number"
              style={{
                height: "14%",
                width: "70%",
                borderRadius: "20px",
                padding: "2%",
              }}
              className="mt-4 mb-4"
            />

            <button
              className="btn btn-light mx-4 px-3 pe-3"
              style={{
                background: "#61399F",
                color: "white",
                fontWeight: "bold",
                padding: "3%",
                borderRadius: "25px",
              }}
            >
              Sign In
            </button>
            <p
              className="mb-4 mt-3"
              style={{ fontSize: "10px", textAlign: "start" }}
            >
              By signing up, you agree to receive transaction updates on
              Whatsapp. You may also receive a call from an Upstox
              representative to help you open the account.
            </p>
            <hr className="w-25" style={{ color: "#61399F" }} />
            <div className="d-flex align-item-center justify-content-between mt-4 mb-0">
              <p className="fw-bold d-inline">
                4.5+{" "}
                <span className="text-warning">
                  <i class="fa-solid fa-star"></i>
                </span>
              </p>
              <p className="fw-bold d-inline">₹0</p>
              <p className="fw-bold d-inline">₹20</p>
              <img src="/Assest/images/global_tiger.svg" alt="" />
            </div>
            <div
              className="text-start d-flex align-item-center justify-content-between mt-0"
              style={{ color: "#6E6E6E", fontSize: "12px" }}
            >
              <p>Avg. App rating</p>
              <p>AMC</p>
              <p>Brokerage*</p>
              <p>Backed by the best</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12" id="div2">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/Assest/images/mobile-images/home_banner_slide_1.png"
                  class="d-block"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/Assest/images/mobile-images/home_banner_slide_2.png"
                  class="d-block"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/Assest/images/mobile-images/home-slide3.png"
                  class="d-block"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
