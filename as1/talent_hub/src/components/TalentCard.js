import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Talent(props) {
  return (
    <div className="card talent-card bg-green">
        <img className="card-img-top" src={props.imgSrc} alt="profileImg"/>
        <div className="card-body align-items-center text-center">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text role">{props.role}</p>
            <p className="card-text">{props.pay}</p>
        </div>
        <div className="d-flex justify-content-between">
            <a href="#"><img src="./images/linkedIn.png" alt="LinkedIn" /></a>
            <a href="#"><img src="./images/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="./images/github.png" alt="Github" /></a>
            <a href="#"><img src="./images/email.png" alt="Email" /></a>
        </div>
    </div>
  );
}
