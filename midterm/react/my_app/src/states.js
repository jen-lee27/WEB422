"use client"
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Content() {
    const names =["Steve Jobs", "Bill Gates", "Elon Mush","Warren Buffet", "Angelina Jolie", "Jeff Bezos", "MaryWilkes", "Hannah Stone", "Isabela Keller", "SteveWozniak" ];
    const [value, setValue] = useState("");
    const onChange = (event) => {
        const searchVal = event.target.value.toLowerCase();
        let newNames = names.filter(name =>
            name.toLowerCase().includes(searchVal)
        );
        console.log(newNames);
        setValue(newNames);
    }
    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by name..." aria-label="search" aria-describedby="basic-addon1" onChange={onChange}/>
                {/* <h4 className="mx-2 my-1">{value}</h4> */}
            </div>
            <ul class="list-group">
                {names.map((name, index) => (
                    <li className="list-group-item" key={index}>{name}</li>
                ))}
            </ul>
      </>
    );
}