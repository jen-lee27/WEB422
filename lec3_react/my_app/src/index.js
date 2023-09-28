// import React from "react"
// import ReactDOM from "react-dom"

// //not recommended
// const unorderedList = (<ul>
//     <li>a</li>
//     <li>b</li>
//     <li>c</li>
// </ul>);
 
//  //better to call from function like this
// function UnorderedList() {
//     return (<ul>
//         <li>a</li>
//         <li>b</li>
//         <li>c</li>
//     </ul>);
// }

// function Header() {
//     return (<h1>Hello World</h1>);
// }

// ReactDOM.render( //convert or "render" react tags(jsx or JXML or JSExte) to HTML tags
//     // Header(), //works but better to pass as tags -> <Header/>,
//     <div>
//         <Header/>
//         <UnorderedList/>
//     </div>,
//     document.getElementById("root")
// );



import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./NavBar"
import Content from "./Content"
import "./style.css"

function CreateListGroup() {
    const fruits = ["lemon", "apple", "grapes", "oranges"];
    const colors = ["red", "green", "blue"];
    return (
        <>
            <Content testtemp={fruits} title="Fruits"/>
            <Content testtemp={colors} title="Colors"/>
        </>
    );
}

ReactDOM.render(
    <div className="">
        <NavBar/>
        <CreateListGroup/>
    </div>,
    document.getElementById("root")
);
