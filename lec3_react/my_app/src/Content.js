import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Content(props) { //do not call it anything else other than "props"!
    const name = "WEB422"
    // const fruits = ["lemon", "apple", "grapes", "oranges"];
    
    return (
        // <div className="container d-flex flex-column vh-100 justify-content-center align-items-center">
        <>
            <h2>This is {name}</h2>
            <h3>{props.title}</h3>
            <ul class="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                {props.testtemp.map((item) => (<li className="list-group-item">{item}</li>))}
            </ul>
        </>
    );
}