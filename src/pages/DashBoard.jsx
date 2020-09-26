import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/store";
const Homepage = () => {
  const [view, setView] = useState("events");
  const { actions, store } = useContext(Context);
    useEffect(() => {
        actions.getActions()
    });
  return (
    <div className="containder-fluid">
      <div className="row px-2 py-2" style={{ backgroundColor: "grey" }}>
        <div className="col-9">Plate Gate Dashboard</div>
        <div className="col-3 text-right">sign in with google</div>
      </div>
      <div className="row">
        <div className="col-2 pl-4 pt-2">
          <ul className="nav flex-column">
            <li
              className={`nav-item p-1 border ${view === "events" && "shadow"}`}
              style={{ cursor: "pointer" }}
              onClick={() => setView("events")}
            >
              Events
            </li>
            <li
              className={`nav-item p-1 border ${
                view === "actions" && "shadow"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setView("actions")}
            >
              Actions
            </li>
            <li
              className={`nav-item p-1 border ${view === "data" && "shadow"}`}
              style={{ cursor: "pointer" }}
              onClick={() => setView("data")}
            >
              Data
            </li>
          </ul>
        </div>
        <div className="col-10">
          {/* actions */}
          <div
            className="container"
            style={
              view === "actions" ? { display: "inherit" } : { display: "none" }
            }
          >
            <div className="row">
              <div className="col-3">
                <div className="row">
                  <div className="col-12 p-1 text-center">Actions</div>
                  <div className="col-12 p-1 border">Default plate scan</div>
                  <div className="col-12 p-1 border shadow">VIP plate scan</div>
                </div>
              </div>
              <div className="col-9">
                {/* crud actions */}
                <div className="row">
                  <div className="col-4 p-1 border text-center">New</div>
                  <div className="col-4 p-1 border text-center">Update</div>
                  <div className="col-4 p-1 border text-center">Delete</div>
                </div>
                {/* action view */}
                <div className="row">
                  <div className="col-12 p-1 border">
                    <div className="row p-4">
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
              <div className="col-5">
                <div className="row">
                  <div className="col-12 p-1 border shadow">
                    Egress: plate# 007-0007 2020-09-22 17:55:02
                  </div>
                  <div className="col-12 p-1 border">
                    Ingress: plate# 007-0007 2020-09-22 17:55:02
                  </div>
                  <div className="col-12 p-1 border">
                    Egress: plate# 007-0008 2020-09-22 17:55:02
                  </div>
                  <div className="col-12 p-1 border">
                    Ingress: plate# 007-0008 2020-09-22 17:55:02
                  </div>
                  <div className="col-12 p-1 border">
                    Egress: plate# 007-0009 2020-09-22 17:55:02
                  </div>
                  <div className="col-12 p-1 border">
                    Ingress: plate# 007-0009 2020-09-22 17:55:02
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="row p-1">
                  <div className="col-12 mt-5 text-center">
                    Plate# 007-0007 | 90% accuracy
                  </div>
                  <div className="col-6 mx-auto p-5 m-3">
                    <img
                      src="http://via.placeholder.com/150"
                      className="img-fluid h-100 w-100"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="col-12 text-center">
                    Is the license incorrect?
                  </div>
                  <div className="col-8 mx-auto text-center mb-1">
                    <input
                      className="form-control"
                      type="text"
                      value="007-0007"
                    />{" "}
                  </div>
                  <div className="col-8 mx-auto text-center">
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
