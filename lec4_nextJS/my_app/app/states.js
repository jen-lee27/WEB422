"use client"
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Content() {
    // // let counter = 0;
    // //useState will return me a variable "counter" and will return me a function "setCounter" which will help me set the value of my variable
    // //0 is the initial value
    // const [counter, setCounter] = useState(0);

    // const increment = () => {
    //     // counter = counter + 1;
    //     // console.log(counter);

    //     //calling it twice won't increment by 2 because counter doesn't get updated after the first call
    //     // setCounter(counter + 1);
    //     // setCounter(counter + 1);

    //     //this will increment by 2
    //     //this is the ideal way to do things to prevent any unexpected issues
    //     setCounter((prevState) => prevState + 1);
    //     setCounter((prevState) => prevState + 1);
    // }
    // const decrement = () => {
    //     // counter = counter - 1;
    //     setCounter((prevState) => prevState - 1);
    // }
    // return (
    //     <div className="d-flex align-items-center justify-content-center">
    //         <button type="button" className="btn btn-primary" onClick={decrement}>Decrement</button>
    //         <h1 className="mx-2">{counter}</h1>
    //         <button type="button" className="btn btn-primary" onClick={increment}>Increment</button>
    //     </div>
    // );



    // //ex2
    // const [value, setValue] = useState("Default");
    // const onChange = (event) => {
    //     const newValue = event.target.value;
    //     setValue(newValue);
    // }
    // return (
    //     <div className="input-group mb-3">
    //         <div className="input-group-prepend">
    //             <span className="input-group-text" id="basic-addon1">@</span>
    //         </div>
    //         <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange}/>
    //         <h4 className="mx-2 my-1">{value}</h4>
    //     </div>
    // );



    // //ex3 : fetch some data from api in our next.js
    // //data needs to be fetched from the client side because making calls to the server every second is not a good practice
    // // -> it should only be rendered once the data is fetched
    // //to generate dummy data: jsonplaceholder.typicode.com

    // //for example, fetch data once the page first loads:
    // const [post, setPost] = useState(); //without initial value, it'll be undefined by default
    // //useEffect will be triggered as soon as my page is rendered on the client side
    // //these are react "hooks"
    // useEffect(() => {
    //     //you need to specify the call back in this block
    //     //callback = what do you want to do when this page is rendered on the client side
    //     fetch(`https://jsonplaceholder.typicode.com/posts/1`) //fetch data from this api
    //         .then((res) => res.json()) //which will be in form of a response (res) then parse it into a json
    //             .then((data) => { //then place that json into a data variable
    //                 setPost(data) //then update the post variable
    //             }, []); //[] is telling if it's undefined, just keep it that way (ie. api call might give an error, might not fetch any data etc.)
    //                     // without it, it'll keep on trying to render whether or not it has the data every time
    //                     // in other words, it'll only do it the first time
    // });
    // return (
    //     <>
    //     <strong>User ID: </strong>{post?.userId} {/*? means if the value is undefined, don't throw an error just show whatever it has*/}
    //     <br/>
    //     <strong>Title: </strong>{post?.title}
    //     <br/>
    //     <strong>Body: </strong>{post?.body}
    //     </>
    // );



    //ex4: states with arrays
    //show only the active students
    const [students, setStudents] = useState([
        { name: 'Steve', active: false, age: 32 },
        { name: 'Bill', active: false, age: 41 },
        { name: 'Jeff', active: true, age: 20 },
        { name: 'John', active: true, age: 21 },
        { name: 'Angelina', active: true, age: 19 },
    ]);

    const activeStudents = students.filter((student) => student.active);

    return (
        <>
            {/* {students[2].active? <p>{students[2].name} is active</p> : <p>{students[2].name} is inactive</p>} */}
            <ul class="list-group">
                {activeStudents.map((student, index) => (
                    <li className="list-group-item" key={index}>{student.name}</li>
                ))}
            </ul>
        </>
    );
}