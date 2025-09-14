import { useState } from "react";
import "./App.css";
import FAQ from "./pages/Faqs";
import Footer from "./pages/Footer";
import Infinite from "./pages/Infinite";
import Peoples from "./pages/Peoples";

function App() {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="">
        <nav
          style={{ height: "50px", width: "100%" }}
          className="bg-primary d-flex align-items-center justify-content-between"
        >
          <div style={{ marginLeft: "50px" }} className="text-white">
            Logo
          </div>
          <div className="d-none d-lg-block">
            <a
              style={{ textDecoration: "none" }}
              className="text-white mx-lg-2 "
              href="#"
            >
              Program
            </a>
            <a
              style={{ textDecoration: "none" }}
              className="text-white mx-lg-2 "
              href="#"
            >
              Why Join
            </a>
            <a
              style={{ textDecoration: "none" }}
              className="text-white mx-lg-2 "
              href="#"
            >
              Free Content
            </a>
          </div>
          <div className="d-flex mx-md-4 align-items-center justify-content-center">
            <button
              style={{
                background: "white",
                border: "none",
                height: "30px",
                width: "90px",
              }}
              className="mx-3 mx-md-3 mx-lg-2 fw-medium rounded-pill"
            >
              <i>Join Now</i>
            </button>
            {menu ? (
              <i
                onClick={handleMenu}
                style={{ height: "20px", marginRight: "8px" }}
                className="fa-solid fa-bars menu text-white"
              ></i>
            ) : (
              <i
                style={{ height: "20px", marginRight: "8px" }}
                onClick={handleMenu}
                className="fa-solid fa-xmark text-white"
              ></i>
            )}
          </div>
        </nav>
        <div className={`colapse-menu bg-primary ${!menu ? "open" : ""}`}>
          <li style={{ textDecoration: "none" }} className="text-white mx-lg-2">
            Program
          </li>
          <li style={{ textDecoration: "none" }} className="text-white mx-lg-2">
            Why Join
          </li>
          <li style={{ textDecoration: "none" }} className="text-white mx-lg-2">
            Free Content
          </li>
        </div>
        <div className="text-center mt-4">
          <p style={{ fontSize: "12px" }} className="text-primary">
            <b>BECOME A SEVEN FIGURE CREATER</b>
          </p>
          <div>
            <h1 style={{ fontWeight: "bold" }} className="hero-font">
              Taking LinkedIn creators from zero <br />
              to <i className="highlight bg-zinc-600">Seven</i> figure income
            </h1>
          </div>
          <div className="px-3" style={{ fontWeight: "500" }}>
            <p className="fs-6 hero-para">
              Helping creators and buisnesses at any level get more leads,
              <br /> make more sales, and earn life changing income
            </p>
          </div>
          <button
            style={{
              backgroundColor: "#29E9F6",
              border: "none",
              height: "80px",
              width: "300px",
              fontWeight: "bold",
            }}
            className="mt-4 rounded-pill fs-5 hero-btn"
          >
            Choose Your Program
          </button>
          <div style={{ fontWeight: "500" }} className="mt-3 fs-5">
            <p className="h-para">Take the first step...</p>
          </div>
          <div className="flex justify-content-center mt-4">
            <video
              autoPlay
              muted
              loop
              controls
              style={{ width: "40%" }}
              className="hero-video"
              src="/assets/video.mp4"
            ></video>
          </div>
        </div>
        <div className="text-center mt-4 flex items-center justify-center">
          <Peoples border={2} />
          <span style={{ marginBottom: "9px" }} className="mx-3">
            <i
              data-tip="+ 1"
              style={{ color: "#E9C226" }}
              className="fa-solid fa-star star-tooltip"
            ></i>
            <i
              data-tip="+ 2"
              style={{ color: "#E9C226" }}
              className="fa-solid fa-star star-tooltip"
            ></i>
            <i
              data-tip="+ 3"
              style={{ color: "#E9C226" }}
              className="fa-solid fa-star star-tooltip"
            ></i>
            <i
              data-tip="+ 4"
              style={{ color: "#E9C226" }}
              className="fa-solid fa-star star-tooltip"
            ></i>
            <i
              data-tip="+ 5"
              style={{ color: "#E9C226" }}
              className="fa-solid fa-star star-tooltip"
            ></i>
          </span>
        </div>
        <div className="mt-5 text-center mb-5">
          <button
            style={{
              backgroundColor: "#133CA4",
              border: "none",
              fontWeight: "bold",
            }}
            className="mt-1 rounded-2 fs-6 text-white  hero-btn2"
          >
            Seven-Figure Creators 3-Star Roadmap
          </button>
        </div>
        {/* Card */}
        <div
          style={{ padding: "100px", gap: "5px" }}
          className="hero-main-card text-center row"
        >
          <div
            style={{ border: "0.5px solid gray", borderRadius: "5px" }}
            className="col hero-card"
          >
            <p
              style={{ fontWeight: "bold", fontSize: "12px" }}
              className="text-primary mt-3"
            >
              LEVEL ONE
            </p>
            <h4 className="mb-4">Start Selling on LinkedIn</h4>
            <p>
              create an offer that you can sell online with <br />
              the FREE course
            </p>
            <p>
              <i className="fa-solid text-primary fa-circle-question"></i>{" "}
              Haven't made a sale? Start here
            </p>
            <p style={{ fontWeight: "500" }} className="text-primary">
              Get the free course{" "}
              <i
                style={{ fontSize: "12px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </p>
          </div>
          <div
            style={{ border: "0.5px solid gray", borderRadius: "5px" }}
            className="col"
          >
            <p
              style={{ fontWeight: "bold", fontSize: "12px" }}
              className="text-primary mt-3"
            >
              LEVEL TWO
            </p>
            <h4 className="mb-4">Start Selling on LinkedIn</h4>
            <p>
              create an offer that you can sell online with <br />
              the FREE course
            </p>
            <p>
              <i class="fa-solid text-primary fa-circle-question"></i> Haven't
              made a sale? Start here
            </p>
            <p style={{ fontWeight: "500" }} className="text-primary">
              Get the free course{" "}
              <i
                style={{ fontSize: "12px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </p>
          </div>
          <div
            style={{ border: "0.5px solid gray", borderRadius: "5px" }}
            className=" col"
          >
            <p
              style={{ fontWeight: "bold", fontSize: "12px" }}
              className="text-primary mt-3"
            >
              LEVEL THREE
            </p>
            <h4 className="mb-4">Start Selling on LinkedIn</h4>
            <p>
              create an offer that you can sell online with <br />
              the FREE course
            </p>
            <p>
              <i class="fa-solid text-primary fa-circle-question"></i> Haven't
              made a sale? Start here
            </p>
            <p style={{ fontWeight: "500" }} className="text-primary">
              Get the free course{" "}
              <i
                style={{ fontSize: "12px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </p>
          </div>
        </div>
        {/* info sec */}
        <div className="w-[100%] d-flex justify-content-center align-items-center flex-col info-main-div">
          <div class="row px-4 mx-5 info-div">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card info-sec mt-3">
                <div class="card-body text-start p-2 mt-2 info-div2">
                  <h4 style={{ fontWeight: "bold" }} className="fs-2">
                    Start Selling on LinkedIn
                  </h4>
                  <p style={{ fontSize: "14px" }} className="mb-2">
                    A free course showing you exactly how to create an offer
                    that sets, so you can start making money online
                  </p>
                  <hr />
                  <p style={{ fontSize: "13px" }} className=" mt-3">
                    <i class="text-primary fa-solid fa-circle-check"></i> Find
                    your super power & ideal clients
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="text-primary fa-solid fa-circle-check"></i> Pitch
                    with confidents & start closing deals
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="fa-solid text-primary fa-circle-check"></i> Get
                    ready to use offers and pitch check template
                  </p>
                  <p style={{ marginLeft: "8px" }} className="text-primary">
                    Get the free course{" "}
                    <i
                      style={{ fontSize: "12px" }}
                      class="fa-solid fa-arrow-right"
                    ></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3 mt-3">
              <div class="card info-sec">
                <div class="card-body info-img-div">
                  <img
                    src="/assets/OIP (1).jpeg"
                    alt="picture"
                    className="info-img w-[100%] rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* second section */}
          <div class="row px-4 mx-5 info-div w-[100%]">
            <div class="col-sm-6 mb-3 mt-3">
              <div class="card info-sec">
                <div class="card-body info-img-div">
                  <img
                    src="/assets/OIP (1).jpeg"
                    alt="picture"
                    className="info-img w-[100%] rounded-3"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card info-sec mt-3">
                <div class="card-body text-start p-2 mt-2 info-div2">
                  <h4 style={{ fontWeight: "bold" }} className="fs-2">
                    Start Selling on LinkedIn
                  </h4>
                  <p style={{ fontSize: "14px" }} className="mb-2">
                    A free course showing you exactly how to create an offer
                    that sets, so you can start making money online
                  </p>
                  <hr />
                  <p style={{ fontSize: "13px" }} className=" mt-3">
                    <i class="text-primary fa-solid fa-circle-check"></i> Find
                    your super power & ideal clients
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="text-primary fa-solid fa-circle-check"></i> Pitch
                    with confidents & start closing deals
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="fa-solid text-primary fa-circle-check"></i> Get
                    ready to use offers and pitch check template
                  </p>
                  <p style={{ marginLeft: "8px" }} className="text-primary">
                    Get the free course{" "}
                    <i
                      style={{ fontSize: "12px" }}
                      class="fa-solid fa-arrow-right"
                    ></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Third Section */}
          <div class="row px-4 mx-5 info-div w-[100%]">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card info-sec mt-3">
                <div class="card-body text-start p-2 mt-2 info-div2">
                  <h4 style={{ fontWeight: "bold" }} className="fs-2">
                    Start Selling on LinkedIn
                  </h4>
                  <p style={{ fontSize: "14px" }} className="mb-2">
                    A free course showing you exactly how to create an offer
                    that sets, so you can start making money online
                  </p>
                  <p style={{ fontSize: "13px" }} className=" mt-3">
                    <i class="text-primary fa-solid fa-circle-check"></i> Find
                    your super power & ideal clients
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="text-primary fa-solid fa-circle-check"></i> Pitch
                    with confidents & start closing deals
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="fa-solid text-primary fa-circle-check"></i> Get
                    ready to use offers and pitch check template
                  </p>
                  <p style={{ marginLeft: "8px" }} className="text-primary">
                    Get the free course{" "}
                    <i
                      style={{ fontSize: "12px" }}
                      class="fa-solid fa-arrow-right"
                    ></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3 mt-3">
              <div class="card info-sec">
                <div class="card-body info-img-div">
                  <img
                    src="/assets/OIP (1).jpeg"
                    alt="picture"
                    className="info-img w-[100%] rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* bottom info sec */}
          <div className="w-[100%] mt-5 bg-primary">
            <div class="row px-4  mx-5 info-div info-bottom-div w-[100%]">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card info-sec info-bottom-div  mt-3">
                  <div class="card-body text-start p-2 mt-2 info-div2 info-bottom-div1">
                    <p
                      style={{ fontSize: "14px", fontWeight: "600" }}
                      className="mb-2 text-start text-white"
                    >
                      FOR BUSINESS OWNER
                    </p>
                    <h1
                      style={{ fontWeight: "700" }}
                      className="text-start fs-3 text-white"
                    >
                      Run a business? Get 5+ Warm Leads Per Week on LinkedIn -
                      No Ad Spend
                    </h1>
                    <div className="text-start mt-4">
                      <button
                        style={{ marginLeft: "8px", fontWeight: "bold" }}
                        className="bg-white w-[45%] info-testimonial h-[50px] rounded-pill text-black"
                      >
                        Interested? Learn more
                        <i
                          style={{ fontSize: "12px" }}
                          class="fa-solid fa-arrow-right"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mb-3  mt-3">
                <div class="card info-sec info-bottom-div">
                  <div class="card-body info-img-div">
                    <img
                      src="/assets/OIP (1).jpeg"
                      alt="picture"
                      className="info-img w-[100%] rounded-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial */}
        <div className="text-center main-info ">
          <div className="w-[100%]">
            <div class="row px-4 mx-5 info-div info-bottom-div w-[100%]">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card info-sec info-bottom-div ">
                  <div class="card-body text-start p-2 info-div2 info-bottom-div1">
                    <h1
                      className="char-info"
                      style={{ fontSize: "2.5rem", fontWeight: "bold" }}
                    >
                      Join 500+ creators!
                    </h1>
                    <p style={{ fontSize: "0.82rem" }}>
                      People just like you are getting life changing results and
                      breaking free from 9-to-5 grind.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 peop-div mb-1 text-start flex items-center justify-end flex-col">
                <Peoples />
                <p className="ml-24 peop-div fs-6">
                  Join our Growing creator community...
                </p>
                <button
                  style={{ fontWeight: "bold" }}
                  className="rounded-pill bg-primary text-white h-12 w-52"
                >
                  Choose Your Program
                </button>
              </div>
            </div>
          </div>
        </div>
        <Infinite />
        <div>
          <FAQ />
          <div className="flex justify-around mb-5 mt-5 mx-5 items-center choose-prog">
            <h1 style={{ fontWeight: "bold" }} className="font-bottom">
              <i>Ready to ask questions?</i>
            </h1>
            <button
              style={{ fontWeight: "bold" }}
              className="rounded-pill bg-primary choose-button text-white h-12 w-52"
            >
              Choose Your Program
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
