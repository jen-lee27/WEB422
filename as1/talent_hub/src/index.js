import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import NavBar from "./components/NavBar"
import Welcome from "./components/Welcome"
import Talent from "./components/Talent"

ReactDOM.render(
    <div>
        <NavBar/>
        <Welcome userName="Jonathan"/>
        <Talent/>
    </div>,
    document.getElementById("root")
);
