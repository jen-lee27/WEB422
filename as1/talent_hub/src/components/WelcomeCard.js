import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Welcome(props) {
  return (
    <div className={props.cardClass}>
        <div className="card-body align-items-center">
            <h5 className="card-title pb-2">{props.title}</h5>
            <p className="card-text pb-2">{props.desc}</p>
            <a href="#" className={props.buttonClass}>{props.link}</a>
        </div>
    </div>
  );
}
