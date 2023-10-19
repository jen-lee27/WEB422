import React, {useState} from "react"

export default function ControlledForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const [ageError, setAgeError] = useState();

    function aaaEvent(e) {
        // console.log(e.target.value);
        // setName(e.target.value);

        if(e.target.name === "name") {
            const upName = e.target.value.toUpperCase();
            setName(upName); //this will always ensure input is in upper case
        }
        else if(e.target.name === "email") {
            setEmail(e.target.value);
        }
        else if(e.target.name === "age") {
            setAge(e.target.value);
            if(e.target.value < 0) {
                // we'll use a p tag to show an error, but remember this must be rendered as well!!
                //  -> if the age is below 0, fill out like this: <p>Age should be > 0</p>, other wise, <p></p> will be empty
                setAgeError("Age should be > 0");
            } else
                setAgeError("");
        }
    }

    return (
        <form>
            {/* value={name} is coming from the states variable up top */}
            <input name="name" type="text" placeholder="Name" value={name} onChange={aaaEvent}/>
            <input name="email" type="text" placeholder="Email" value={email} onChange={aaaEvent}/>
            <input name="age" type="text" placeholder="Age" value={age} onChange={aaaEvent}/>
            <p>{ageError}</p>
            {/* this is a button, not an input of type submit like we had in UnControlledForm.js, because react will control the states of my form, not the button */}
            <button>Submit</button>
        </form>
    );
}