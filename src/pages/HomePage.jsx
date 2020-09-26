import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span className="navbar-brand">Navbar</span>
          <ul className="nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item text-capitalize">
              <a className="nav-link" href="#/#about">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/#features">
                features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/#team">
                team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/#contact">
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
              style={{ height: "40em", width: "100%", position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  zIndex: "100",
                  top: "10em",
                }}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-8 mx-auto text-center mt-5">
                      <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo tempora maxime dolorem eligendi omnis, veniam
                        possimus, earum nostrum eaque accusantium asperiores eos
                        fugit. Modi distinctio quidem culpa tenetur. Quis, odit?
                      </h4>
                    </div>
                    <div className="col-8 mx-auto">
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
                  src="https://via.placeholder.com/160x90"
                  className="img-fluid d-block h-100 w-100"
                  style={{ zIndex: "99" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* about */}
        <div className="row">
          <div className="col-8 mx-auto mt-5">
            <div className="row">
              {" "}
              <div className="col-auto mx-auto text-center">
                <h2 className="text-capitalize">about</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos iure rem dolor non voluptatem reprehenderit
                eligendi? Ipsa quo, ut voluptatibus, optio accusantium debitis
                numquam, molestias sed ex recusandae explicabo quam.
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                perferendis dolorum ratione excepturi quas provident soluta cum
                ea dignissimos nihil. Omnis eos maxime non numquam dolorum
                blanditiis explicabo neque in.
              </div>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="row">
          <div className="col-8 mx-auto mt-5">
            <div className="row">
              <div className="col-auto mx-auto text-center mb-3">
                <h2>features</h2>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-5">
                <img
                  src="https://via.placeholder.com/160x90"
                  className="img-fluid d-block h-100 w-100"
                  alt=""
                />
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <h4>sub heading</h4>
                  </div>
                  <div className="col-12">
                    {" "}
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <h4>sub heading</h4>
                  </div>
                  <div className="col-12">
                    {" "}
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test{" "}
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <img
                  src="https://via.placeholder.com/160x90"
                  className="img-fluid d-block h-100 w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <img
                  src="https://via.placeholder.com/160x90"
                  className="img-fluid d-block h-100 w-100"
                  alt=""
                />
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <h4>sub heading</h4>
                  </div>
                  <div className="col-12">
                    {" "}
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* team */}
        <div className="row">
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
        <div className="row">
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
    </>
  );
};

export default Homepage;
