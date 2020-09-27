import React from "react";
import { Link } from "react-router-dom";
import car1 from "../media/car-1.png";
import customer from "../media/customer.jpg";
import cloud from "../media/cloud.jpg";
import sms from "../media/sms.png";
const Homepage = () => {
  return (
    <>
      <nav id="top" class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span className="navbar-brand">License Automation</span>
          <ul className="nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item text-capitalize">
              <a className="nav-link" href="#about">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                contact
              </a>
            </li>
          </ul>
          <Link to="/dashboard">
            <button class="btn btn-outline-success" type="submit">
              Dashboard
            </button>
          </Link>
        </div>
      </nav>

      <div className="container-fluid p-0">
        {/* header */}
        <div className="row m-0 p-0">
          <div className="col-12 p-0">
            <div
              className="border"
              style={{ height: "35em", width: "100%", position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  zIndex: "100",
                  paddingTop: "10em",
                  backgroundColor: "rgba(200,255,200,.7)",
                }}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-8 mx-auto text-center mt-5">
                      <h2>
                        Enhance any security camera with Plategate to speed up
                        check-in process
                      </h2>
                    </div>
                    <div className="col-8 mx-auto mt-5">
                      <button className="text-capitalize d-block mx-auto btn btn-primary">
                        register today
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  zIndex: "0",
                }}
              >
                <img
                  src={car1}
                  className="img-fluid d-block h-100 w-100"
                  style={{ zIndex: "99", filter: "blur(4px)" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* about */}
        <div id="about" className="row">
          <div className="col-8 mx-auto mt-5">
            <div className="row">
              {" "}
              <div className="col-auto mx-auto text-center">
                <h2 className="text-capitalize">about</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3 text-center">
                At Playgate, we believe that great technology should benefit
                everyone. In 2020, we founded our company with the goal of
                harnessing the power of robotics and artificial intelligence to
                solve challenges at a global scale. We built Nuro to make life
                easier, to help connect us to the things we need, and to give us
                time back with the people we love. Today we are one of the
                leading autonomous delivery companies, committed to using the
                power of technology for the greater good.
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3 text-center">
                {" "}
                We are a team of over 500 people, all working together and
                motivated by a driving belief to improve the way we live through
                robotics. We believe that the only way to change the world is to
                have the best possible team come together, and it is the people
                at Nuro that make us the most proud. Together, we are pushing
                the boundaries of robotics to improve human life. We are
                creating vehicles that will change, simplify, and enhance the
                way we live.
              </div>
            </div>
          </div>
        </div>
        {/* Features */}
        <div id="features" className="row">
          <div className="col-8 mx-auto mt-5">
            <div className="row">
              <div className="col-auto mx-auto text-center mb-3">
                <h2>features</h2>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-5">
                <img
                  src={customer}
                  className="img-fluid d-block h-100 w-100"
                  alt=""
                />
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <h4>Personalized customer experience</h4>
                  </div>
                  <div className="col-12">
                    Monitor the health and revenue of your channel program and
                    streamline your campaign to win more customers within
                    Zomentum.
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <h4>Cloud-based license plate recognition solution</h4>
                  </div>
                  <div className="col-12">
                    Gain brand authority and visibility with the help of the
                    largest IT service ecosystem. Find customers who are looking
                    for your solution right now!
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <img
                  src={cloud}
                  className="img-fluid d-block h-100 w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <img
                  src={sms}
                  className="img-fluid d-block h-100 w-100"
                  alt=""
                />
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <h4>Recieve text notifications</h4>
                  </div>
                  <div className="col-12">
                    Share collaterals and documents that are automatically
                    branded. Leverage a rich partner network that sells your
                    solution exactly the way your best salesman would.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* team */}
        <div id="team" className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-auto mx-auto text-center my-5">
                <h2>team</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="col-12 p-3">
                  <img
                    src="https://via.placeholder.com/150"
                    className="img-fluid d-block h-100 w-100 rounded-circle"
                    alt=""
                  />
                </div>
                <div className="col-12 text-center text-capitalize">
                  <h5>your name here</h5>
                </div>
                <div className="col-12 text-center">your role goes here</div>
              </div>
              <div className="col-3">
                <div className="col-12 p-3">
                  <img
                    src="https://via.placeholder.com/150"
                    className="img-fluid d-block h-100 w-100 rounded-circle"
                    alt=""
                  />
                </div>
                <div className="col-12 text-center text-capitalize">
                  <h5>your name here</h5>
                </div>
                <div className="col-12 text-center">your role goes here</div>
              </div>
              <div className="col-3">
                <div className="col-12 p-3">
                  <img
                    src="https://via.placeholder.com/150"
                    className="img-fluid d-block h-100 w-100 rounded-circle"
                    alt=""
                  />
                </div>
                <div className="col-12 text-center text-capitalize">
                  <h5>your name here</h5>
                </div>
                <div className="col-12 text-center">your role goes here</div>
              </div>
              <div className="col-3">
                <div className="col-12 p-3">
                  <img
                    src="https://via.placeholder.com/150"
                    className="img-fluid d-block h-100 w-100 rounded-circle"
                    alt=""
                  />
                </div>
                <div className="col-12 text-center text-capitalize">
                  <h5>your name here</h5>
                </div>
                <div className="col-12 text-center">your role goes here</div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div id="contact" className="row">
          <div className="col-12 mx-auto text-center my-5">
            <h2>Contact</h2>
          </div>
          <div className="col-8 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  placeholder="Your Email here"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">
                  Subject
                </label>
                <input
                  placeholder="Your subject here"
                  type="text"
                  class="form-control"
                  id="subject"
                />
              </div>
              <div class="mb-3">
                <label for="contacttextarea" class="form-label">
                  Message:
                </label>
                <textarea
                  type="email"
                  class="form-control"
                  id="contacttextarea"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" class="btn btn-block btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* footer */}
        <div
          className="row mt-5 text-white p-0"
          style={{ backgroundColor: "black" }}
        >
          <div className="col-10 mx-auto mt-5 mb-2">
            <div className="row mb-2">
              <div className="col-3 text-capitalize">
                <h5>product</h5>
              </div>
              <div className="col-3 text-capitalize">
                <h5>company</h5>
              </div>
              <div className="col-3 text-capitalize">
                <h5>user</h5>
              </div>
              <div className="col-3 text-capitalize">
                <h5>contact us</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <ul className="nav flex-column">
                  <li class="nav-item">testa</li>
                  <li class="nav-item">testa</li>
                  <li class="nav-item">testa</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="nav flex-column">
                  <li class="nav-item">testa</li>
                  <li class="nav-item">testa</li>
                  <li class="nav-item">testa</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="nav flex-column">
                  <li class="nav-item">testa</li>
                  <li class="nav-item">testa</li>
                  <li class="nav-item">testa</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="nav flex-column">
                  <li class="nav-item">testa</li>
                  <li class="nav-item">testa</li>
                  <li class="nav-item">testa</li>
                </ul>
              </div>
            </div>
            <div className="row mt-5 mb-2">
              <div className="col-auto mx-auto text-center">
                copywright info
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-dark rounded shadow p-1"
        style={{
          position: "fixed",
          backgroundColor: "white",
          bottom: "10px",
          right: "10px",
          zIndex: "1000",
          textDecoration: "none",
        }}
      >
        <a
          href="#top"
          style={{
            textDecoration: "none",
          }}
          className="text-capitalize"
        >
          to top
        </a>
      </div>
    </>
  );
};

export default Homepage;
