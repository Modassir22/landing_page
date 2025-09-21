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
<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Baloo+Bhai+2:wght@400..800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Edu+NSW+ACT+Cursive:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Michroma&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Story+Script&family=Unbounded:wght@200..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
</style>
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
        <div className="text-center mt-3">
          <p style={{ fontSize: "12px" }} className="text-primary">
            <b>BECOME A SEVEN FIGURE CREATER</b>
          </p>
          <div className="mt-4">
            <h1 style={{ fontWeight: "bold" }} className="hero-font">
              Turn your LinkedIn profile into a <i style={{fontFamily:""}} className="highlight bg-zinc-600">client-generating</i>  machine
            </h1>
          </div>
          <div className="px-3" style={{ fontWeight: "500" }}>
            <p className="fs-6 hero-para">
              I help coaches, C-Suits and founders build personal brands,
              attract inbound leads,
              <br /> and close more clients on LinkedIn — all in just 90 days.
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
            See How It Works
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
        <div className="mt-5 text-center mb-5 ">
          <button
            style={{
              backgroundColor: "#133CA4",
              border: "none",
              fontWeight: "bold",
            }}
            className="mt-1 rounded-2 text-white  hero-btn2"
          >
            Start your journey to a stronger LinkedIn brand today
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
            <h4 className="mb-2 fw-bold">Refine Your Profile</h4>
            <div className="text-start p-4">
              <li className="mb-2">
                Your profile is your first impression on LinkedIn.
              </li>
              <li className="mb-2">
                We optimize your LinkedIn so prospects instantly see your
                authority and expertise.
              </li>
              <li className="mb-2">
                Turn your LinkedIn into a lead-magnet, not just a CV.
              </li>
            </div>
            <p>
              <i className="fa-solid text-primary fa-circle-question"></i>{" "}
              Haven’t built your authority yet <br />
            </p>
            <p
              style={{ fontWeight: "500", fontSize: "1rem" }}
              className="text-primary"
            >
              Start here.
              <i
                style={{ fontSize: "12px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </p>
          </div>
          <div
            style={{ border: "0.5px solid gray", borderRadius: "5px" }}
            className="col hero-card"
          >
            <p
              style={{ fontWeight: "bold", fontSize: "12px" }}
              className="text-primary mt-3"
            >
              LEVEL TWO
            </p>
            <h4 className="mb-2 fw-bold">Influence With Content</h4>
            <div className="text-start p-3">
              <li className="mb-2">Content is your voice.</li>
              <li className="mb-2">
                We help you create posts that educate, inspire, and position you
                as the go-to expert.
              </li>
              <li className="mb-2">
                Build credibility and attract the right audience through
                thought-leadership.
              </li>
            </div>
            <p>
              <i className="fa-solid text-primary fa-circle-question"></i> Ready
              to stand out with content ? Start here. <br />
            </p>
            <p
              style={{ fontWeight: "500", fontSize: "1rem" }}
              className="text-primary"
            >
              Start here.
              <i
                style={{ fontSize: "12px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </p>
          </div>
          <div
            style={{ border: "0.5px solid gray", borderRadius: "5px" }}
            className="col hero-card"
          >
            <p
              style={{ fontWeight: "bold", fontSize: "12px" }}
              className="text-primary mt-3"
            >
              LEVEL THREE
            </p>
            <h4 className="mb-2 fw-bold">Strengthen Community</h4>
            <div className="text-start p-3">
              <li className="mb-2">
                LinkedIn isn’t just about broadcasting it's about building
                relationships.
              </li>
              <li className="mb-2">
                We help you grow
                a strong community around your brand.
              </li>
              <li className="mb-2">Build trust, not just connections.</li>
            </div>
            <p>
              <i className="fa-solid text-primary fa-circle-question"></i>{" "}
              Want to grow an engaged network ? Start here. <br />
            </p>
            <p
              style={{ fontWeight: "500", fontSize: "1rem" }}
              className="text-primary"
            >
              Start here.
              <i
                style={{ fontSize: "12px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </p>
          </div>
          <div
            style={{ border: "0.5px solid gray", borderRadius: "5px" }}
            className="col hero-card"
          >
            <p
              style={{ fontWeight: "bold", fontSize: "12px" }}
              className="text-primary mt-3"
            >
              LEVEL FOUR
            </p>
            <h4 className="mb-2 fw-bold">Elevate Conversions</h4>
            <div className="text-start p-4">
              <li className="mb-2">
                Visibility is great, but revenue is better.
              </li>
              <li className="mb-2">
                We align your offers to convert followers into paying clients
              </li>
              <li className="mb-2">
                Turn influence into consistent inbound leads.
              </li>
            </div>
            <p>
              <i className="fa-solid text-primary fa-circle-question"></i>{" "}
              Want clients, not just likes? Start here. <br />
            </p>
            <p
              style={{ fontWeight: "500", fontSize: "1rem" }}
              className="text-primary"
            >
              Start here.
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
                    Refine Your Profile
                  </h4>
                  <p style={{ fontSize: "14px" }} className="mb-2">
                    Craft a LinkedIn profile that drives revenue.
                  </p>
                  <hr />
                  <p style={{ fontSize: "13px" }} className=" mt-3">
                    <i class="text-primary fa-solid fa-circle-check"></i> Optimize your headline & banner for authority
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="text-primary fa-solid fa-circle-check"></i> Rewrite your About section to sell without sounding salesy
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="fa-solid text-primary fa-circle-check"></i> Set up your services & featured section for instant credibility
                  </p>
                  <p style={{ marginLeft: "8px" }} className="text-primary">
                    Polish My Profile
                    <i
                      style={{ fontSize: "12px" }}
                      class="fa-solid fa-arrow-right ml-1"
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
          <div class="row px-4 mx-5 info-div w-[100%] info-rev">
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
                    Influence with Content
                  </h4>
                  <p style={{ fontSize: "14px" }} className="mb-2">
                    Turn LinkedIn posts into magnets for leads, trust, and authority.
                  </p>
                  <hr />
                  <p style={{ fontSize: "13px" }} className=" mt-3">
                    <i class="text-primary fa-solid fa-circle-check"></i> Learn the psychology of viral posts
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="text-primary fa-solid fa-circle-check"></i> Share thought-leadership content consistently
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="fa-solid text-primary fa-circle-check"></i> Position yourself as the go-to expert in your niche
                  </p>
                  <p style={{ marginLeft: "8px" }} className="text-primary">
                    Ignite My Content
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
                    Strengthen Community
                  </h4>
                  <p style={{ fontSize: "14px" }} className="mb-2">
                    Don’t just grow numbers — grow an audience that believes in you.
                  </p>
                  <hr />
                  <p style={{ fontSize: "13px" }} className=" mt-3">
                    <i class="text-primary fa-solid fa-circle-check"></i> Hot Lead Comment Strategy (20–50 daily)
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="text-primary fa-solid fa-circle-check"></i> Personalized DMs that spark conversations
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="fa-solid text-primary fa-circle-check"></i> Account-Based Marketing (ABM) funnel for long-term trust
                  </p>
                  <p style={{ marginLeft: "8px" }} className="text-primary">
                    Let's Built
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
          {/* Four Section */}
          <div class="row px-4 mx-5 info-div w-[100%] info-rev">
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
                    Elevate Conversions
                  </h4>
                  <p style={{ fontSize: "14px" }} className="mb-2">
                    Turn trust and engagement into a pipeline of ready-to-buy prospects.
                  </p>
                  <hr />
                  <p style={{ fontSize: "13px" }} className=" mt-3">
                    <i class="text-primary fa-solid fa-circle-check"></i> Conversion-optimized DMs
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="text-primary fa-solid fa-circle-check"></i> Sales call scripts tailored for LinkedIn leads
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <i class="fa-solid text-primary fa-circle-check"></i> Closing framework to seal high-ticket deals
                  </p>
                  <p style={{ marginLeft: "8px" }} className="text-primary">
                    Generate My Leads
                    <i
                      style={{ fontSize: "12px" }}
                      class="fa-solid fa-arrow-right"
                    ></i>
                  </p>
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
                      For LinkedIn Creators: Coaches, C-Suits & Founders
                    </p>
                    <h1
                      style={{ fontWeight: "700" }}
                      className="text-start fs-3 text-white"
                    >
                      Build Your Personal Brand ? Generate Inbound Leads On LinkedIn <br />No Ad Spend.
                    </h1>
                    <div className="text-start mt-4">
                      <button
                        style={{ marginLeft: "8px", fontWeight: "bold" }}
                        className="bg-white  w-[45%] info-testimonial h-[50px] rounded-pill text-black"
                      >
                        Book Your Appointment
                        <i
                          style={{ fontSize: "12px" }}
                          className="ml-1 fa-solid fa-arrow-right "
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
                      Join 100+ Creators!
                    </h1>
                    <p style={{ fontSize: "0.82rem" }}>
                      Coaches, C-Suites & Founders are turning LinkedIn into their #1 client acquisition channel are you next ?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 peop-div mb-1 text-start flex items-center justify-end flex-col">
                <Peoples />
                <p className="ml-7 peop-div fs-6">
                  Choose Your Service Now...
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
              <i className="resource">Get Your First $1K on LinkedIn - Free Resource</i>
              <p className="resource-para">Finally, a proven LinkedIn sales system that turns profile views into paying clients.</p>
            </h1>
            <button
              style={{ fontWeight: "bold" }}
              className="rounded-pill bg-primary choose-button text-white h-12 w-52"
            >
              Teach Me How to Sell on LinkedIn
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
