import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/store";
const Homepage = () => {
  const [view, setView] = useState("actions");
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.getActions();
  }, []);
  console.log(store);
  return (
    <div
      className="containder-fluid"
      style={{ backgroundColor: "rgba(0,0,0,.05)" }}
    >
      <div className="row align-items-end">
        <div
          className="col-3 pt-2 text-white text-center text-capitalize"
          style={{ backgroundColor: "black" }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4>License Automation</h4>
          </Link>
        </div>
        <div
          className="col-9 text-right pr-4 pb-2 shadow"
          style={{ cursor: "pointer" }}
        >
          sign in with google
          <span
            className="material-icons ml-2"
            style={{ verticalAlign: "middle", fontSize: "2em" }}
          >
            account_circle
          </span>
        </div>
      </div>
      <div className="row">
        <div
          className="col-3 pt-2"
          style={{ backgroundColor: "rgba(0,0,0,.80)" }}
        >
          <ul className="nav flex-column pl-4 text-muted">
            <li
              className={`nav-item my-3 ${
                view === "events" && "shadow text-white"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setView("events")}
            >
              <span
                className="material-icons mr-2"
                style={{ verticalAlign: "middle" }}
              >
                calendar_today
              </span>
              Events
            </li>
            <li
              className={`nav-item my-3 ${
                view === "actions" && "shadow text-white"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setView("actions")}
            >
              <span
                className="material-icons mr-2"
                style={{ verticalAlign: "middle" }}
              >
                directions_run
              </span>
              Actions
            </li>
            <li
              className={`nav-item my-3 ${
                view === "data" && "shadow text-white"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setView("data")}
            >
              <span
                className="material-icons mr-2"
                style={{ verticalAlign: "middle" }}
              >
                storage
              </span>
              Data
            </li>
          </ul>
        </div>
        <div className="col-9">
          {/* actions */}
          <div
            className="container"
            style={
              view === "actions" ? { display: "inherit" } : { display: "none" }
            }
          >
            <div className="row">
              <div
                className="col-3 mt-4 mb-3 shadow-sm"
                style={{ backgroundColor: "white", height: "90vh" }}
              >
                <div className="row">
                  <div className="col-12 shadow-sm">
                    <div className="row">
                      <div className="col-12 p-1">ACTION NAME</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 p-1 border-bottom">
                        Default actions
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12"
                    style={{ backgroundColor: "rgba(0,0,0,.05)" }}
                  >
                    <div className="row">
                      <div className="col-12 p-1 border-bottom">CEO action</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 p-1 border-bottom">VIP action</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9">
                {/* action view */}
                <div className="row m-0 p-0">
                  <div
                    className="col-12 mt-4 mr-5 ml-2 py-4 px-4 shadow-sm border"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="row">
                      <div className="col-12 mb-2">Actions:</div>
                      <div className="col-12 my-2">
                        <input type="checkbox" name="" id="" /> OnIngress
                      </div>
                      <div className="col-12 my-2">
                        <input type="checkbox" name="" id="" /> OnEgress
                      </div>
                      <div className="col-12 my-2">
                        <input type="checkbox" name="" id="" /> on licence
                        plate: <input type="text" />
                      </div>
                      <div className="col-12 my-2">
                        <input type="checkbox" name="" id="" checked /> on
                        license plate owner: <input type="text" />
                      </div>
                      <div className="col-12 my-2">
                        <input type="checkbox" name="" id="" /> send email:{" "}
                        <input type="text" placeholder="populated by default" />
                      </div>
                      <div className="col-12 my-2">
                        <input type="checkbox" name="" id="" /> send text:{" "}
                        <input type="text" placeholder="populated by default" />
                      </div>
                      <div className="col-12 my-2">
                        <input type="checkbox" name="" id="" /> send browser
                        Notification
                      </div>
                      <div className="col-12 my-2">
                        <input type="checkbox" name="" id="" /> send API
                        payload:
                      </div>
                      <div className="col-12 my-2 pl-5">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="API"
                        />
                      </div>
                      <div className="col-12 my-2 pl-5">
                        <div className="row">
                          <div className="col-3">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="custom key"
                            />
                          </div>
                          <div className="col-9">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="custom value"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 my-2 pl-5">
                        <div className="row">
                          <div className="col-12">
                            Add payload info from license data
                          </div>
                          <div className="col-12">
                            <select className="form-control" name="" id="">
                              <option value="">PlateNumber</option>
                              <option value="">Name</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 pl-5">
                        <button className="btn btn-block btn-primary">
                          Add another field +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* data */}
          <div
            className="container"
            style={
              view === "data" ? { display: "inherit" } : { display: "none" }
            }
          >
            <div className="row">
              <div className="col-3">
                <div className="row">
                  <div className="col-12 p-1 text-center">Data</div>
                  <div
                    className="col-12 p-1 border shadow"
                    style={{ cursor: "pointer" }}
                  >
                    plate# 007-0007 | Judy Dench
                  </div>
                  <div
                    className="col-12 p-1 border"
                    style={{ cursor: "pointer" }}
                  >
                    plate# 007-0008 | Josh Walrath
                  </div>
                  <div
                    className="col-12 p-1 border"
                    style={{ cursor: "pointer" }}
                  >
                    plate# 007-0009 | (no name data)
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="row p-3">
                  <div className="col-6 ">
                    <input
                      type="text"
                      className="form-control"
                      value="plateNumber"
                      disabled
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value="007-0007"
                      disabled
                    />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" value="name" />
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value="Judy Dench"
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-block btn-primary">
                      Add More data fields
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* events */}
          <div
            className="container"
            style={
              view === "events" ? { display: "inherit" } : { display: "none" }
            }
          >
            <div className="row">
              <div
                className="col-7 mt-4 mb-3 shadow-sm"
                style={{ backgroundColor: "white", height: "90vh" }}
              >
                <div className="row">
                  <div className="col-12 shadow-sm">
                    <div className="row">
                      <div className="col-4 p-1">PLATE ID</div>
                      <div className="col-5 p-1">DATE</div>
                      <div className="col-3 p-1">Time</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-4 p-1 border-bottom">007-0007</div>
                      <div className="col-5 p-1 border-bottom">2020-09-22</div>
                      <div className="col-3 p-1 border-bottom">17:55:02</div>
                    </div>
                  </div>
                  <div
                    className="col-12"
                    style={{ backgroundColor: "rgba(0,0,0,.05)" }}
                  >
                    <div className="row">
                      <div className="col-4 p-1 border-bottom">007-0008</div>
                      <div className="col-5 p-1 border-bottom">2020-09-22</div>
                      <div className="col-3 p-1 border-bottom">17:30:02</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-4 p-1 border-bottom">007-0007</div>
                      <div className="col-5 p-1 border-bottom">2020-09-22</div>
                      <div className="col-3 p-1 border-bottom">17:15:02</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="row px-4">
                  <div
                    className="col-12 mt-4 text-center"
                    style={{ backgroundColor: "white" }}
                  >
                    CURRENT SELECTION
                  </div>
                  <div
                    className="col-12 mx-auto p-4"
                    style={{ backgroundColor: "white" }}
                  >
                    <img
                      src="http://via.placeholder.com/150"
                      className="img-fluid w-100"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div
                    className="col-12 py-3 text-center"
                    style={{ backgroundColor: "white" }}
                  >
                    Plate# 007-0007
                  </div>
                  <div
                    className="col-12 mb-4 py-3 text-center"
                    style={{ backgroundColor: "white" }}
                  >
                    <button className="btn btn-success mx-auto d-block p-1">
                      {" "}
                      90% accuracy
                    </button>
                  </div>
                  <div
                    className="col-12 text-center p-4"
                    style={{ backgroundColor: "white" }}
                  >
                    CONFIRM SELECTION
                  </div>
                  <div
                    className="col-12 mx-auto text-center px-5 pb-5"
                    style={{ backgroundColor: "white" }}
                  >
                    <b>Is this license correct?</b>
                    <input
                      className="form-control"
                      type="text"
                      value="007-0007"
                    />{" "}
                  </div>
                  <div
                    className="col-12 mx-auto text-center px-5 pb-5"
                    style={{ backgroundColor: "white" }}
                  >
                    <button className="btn btn-block btn-primary">
                      Save correction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
