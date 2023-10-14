import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid ">
            <a className="navbar-brand" href="#">
                <img src="./images/logo.png" width={"50px"} alt="logo"/>
                Hire4U
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="row mx-auto">
                <ul className="navbar-nav">
                    <li className="nav-item active mx-2">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Jobs</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">History</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                </div>
                <form className="d-flex form-inline" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
  );
}
