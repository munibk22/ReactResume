import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import {} from "react-bootstrap";
import myImage from "./pics/munib.jpg";

function SideNav() {
  return (
    <nav
      expand="md"
      className=""
      style={{
        margin: "0",
        maxWidth: "15.5rem",
        height: "",
        overflow: "",
        maxHeight: "",
        display: "flex",
      }}
    >
      <div>
        <form
          style={{
            backgroundColor: "white",
            width: "100%",
            border: "1px solid grey",
            height: "",
            borderRadius: "1%",
          }}
        >
          <div className="alert alert-primary" role="alert">
            <h3 style={{ color: "white", textAlign: "center" }}>
              <strong> Welcome</strong>
            </h3>
          </div>

          <div style={{ textAlign: "center" }}>
            <NavLink to="/">
              <img
                alt=""
                src={myImage}
                className="munib"
                style={{
                  borderRadius: "50%",
                  boxShadow: "8px 5px 5px slategrey, -.2em 0 .4em slategrey",
                  width: "170px",
                  height: "200px",
                }}
              ></img>
            </NavLink>
          </div>
          <div
            className=" text-muted"
            style={{ fontSize: ".8em", textAlign: "center" }}
          >
            <h5>Munib Khan-Software Developer</h5>
          </div>

          <ul
            className=""
            style={{ fontSize: ".9em", color: "red", display: "inline-block" }}
          >
            <br></br>

            <NavLink to="/" exact className="active">
              <li
                className="btn-link active"
                style={{ backgroundColor: "#737373", color: "powderblue" }}
              >
                Home
              </li>
            </NavLink>
            <br></br>
            <NavLink to="/about" className="active">
              <li
                className=" btn-link active"
                style={{ backgroundColor: "#737373", color: "wheat" }}
              >
                About
              </li>
            </NavLink>
            <br></br>
            <NavLink to="/friends">
              <li
                className="li btn-link active "
                style={{ backgroundColor: "#737373 ", color: "powderblue" }}
              >
                Friends
              </li>
            </NavLink>
            <br></br>
            <NavLink to="/cars">
              <li
                className="li btn-link  active "
                style={{ backgroundColor: "#737373", color: "wheat" }}
              >
                Cars
              </li>
            </NavLink>

            <br></br>
            <NavLink to="/events">
              <li
                className="li btn-link active"
                style={{ backgroundColor: "#737373", color: "powderblue" }}
              >
                Events
              </li>
            </NavLink>
            <br></br>
            <NavLink to="/userregister">
              <li
                className="li btn-link active"
                style={{ backgroundColor: "#737373", color: "wheat" }}
              >
                Register{" "}
              </li>
            </NavLink>
            <br></br>
            <NavLink to="/userform">
              <li
                className="li btn-link active"
                style={{ backgroundColor: "#737373", color: "powderblue" }}
              >
                Product Info Form{" "}
              </li>
            </NavLink>
            <br></br>
            <NavLink to="/scrolling">
              <li
                className="li btn-link active"
                style={{ backgroundColor: "#737373", color: "wheat" }}
              >
                Scrolling App{" "}
              </li>
            </NavLink>
            <br></br>
            <NavLink to="/increment">
              <li
                className="li btn-link active"
                style={{ backgroundColor: "#737373", color: "powderblue" }}
              >
                Increment App{" "}
              </li>
            </NavLink>

            <br></br>
            <NavLink to="/pokemon">
              <li
                className="li btn-link active"
                style={{ backgroundColor: "#737373", color: "wheat" }}
              >
                Pokemon App{" "}
              </li>
            </NavLink>
          </ul>

          <br></br>

          <div
            style={{ textAlign: "center", fontSize: ".6em" }}
            className=" text-muted"
          >
            Need to Signup?
          </div>

          <div style={{ textAlign: "center", fontSize: ".7em" }}>
            <a href="./userregister" className="btn btn-link btn-sm">
              {" "}
              Register Now
            </a>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default SideNav;
