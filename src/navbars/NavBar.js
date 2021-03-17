import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

//import { Route} from 'react-router-dom';

let NavBar = () => {
  return (
    <Navbar
      bg=""
      variant="light"
      expand="md"
      style={{ color: "white", height: "60px", zIndex: '5' }}
      className=""
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <BrowserRouter>
            <Nav.Link href="about" style={{ color: "white" }}>
              About Me
            </Nav.Link>

            <Nav.Link href="reactresume" style={{ color: "white" }}>
              React Resume
            </Nav.Link>
          </BrowserRouter>
        </Nav>
        <div
            style={{
              width: "",
              fontFamily: "Arial",
              textAlign: "center",
              fontSize: '2.2rem',
              marginLeft:'-5%'
            }}
            className="center"
          >
            Home Page
                   
          </div>
        <span style={{ marginLeft: "0px" }}>
          <button
            className="btn btn-sm"
            style={{ fontSize: ".8rem", padding: "-1%", marginRight: "5px" }}
          >
            <Nav.Link href="/login" style={{ color: "white" }}>
              <img
                type="button"
                src="
https://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/actions/gnome-session-logout.png

"
                alt=""
                style={{
                  width: "26px",
                  height: "25px",
                  marginBottom: "3px",
                  padding: "-1.5%",
                }}
              ></img>
              { } User Login
            </Nav.Link>{" "}
          </button>
        </span>

        <span style={{ fontSize: ".7rem" }}>
          <img
            type="button"
            src="
https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/38-512.png
"
            alt=""
            style={{ width: "26px", height: "25px", marginBottom: "5px" }}
          ></img>
          User Logout
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
