import React, { useState } from "react";
import "./css/Navbar.css";
import "./css/responsiveNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Navbar({username }) {

  const navigate=useNavigate()

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "1000px" });

  const toggleNavOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout=()=>{
    localStorage.clear()
    navigate("/login")

  }

  return (
    <header className="header">
      <h1 className="brandname">
        Todo Champion -{" "}
        <Link
          to="/userprofile"
          style={{ textDecoration: "none", color: "var(--text-color)" }}
        >
          {username}
        </Link>
      </h1>
      <i onClick={toggleNavOpen} id="menuIcon" className="bx bx-menu"></i>

      {isMobile ? (
        isOpen ? (
          <nav className="nav">
            <ul className="navbar">
              <li className="nav-items">
                <Link id="links" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-items">
                <Link id="links" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-items">
                <Link id="links" to="/community">
                  Community
                </Link>
              </li>
              <li onClick={handleLogout} className="nav-items">
                Logout
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )
      ) : (
        <nav className="nav">
          <ul className="navbar">
            <li className="nav-items">
              <Link id="links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link id="links" to="/about">
                About
              </Link>
            </li>
            <li className="nav-items">
              <Link id="links" to="/community">
                Community
              </Link>
            </li>
            <li onClick={handleLogout} className="nav-items">
              Logout
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
