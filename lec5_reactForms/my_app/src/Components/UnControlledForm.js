import React from "react"

//uncontrolled form is used if the page doesn't require rendering
//but to be dynamic, you should use react states (see ControlledForm.js)
export default function UnControlledForm() {

    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const ageRef = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent refreshing page because we don't want react to re-render the page whenever it refreshes
                            //in order to re-render them, we need to use useStates

        //method 1: using event
        // console.log(e.target.elements.name.value);
        // console.log(e.target.elements.email.value);
        // console.log(e.target.elements.age.value);

        //method 2: using react references
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(ageRef.current.value);

        //but both methods still need rendering to show on page (not just on console)
        //need to use states anyways
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" ref={nameRef}/>
            <input name="email" type="text" placeholder="Email" ref={emailRef}/>
            <input name="age" type="text" placeholder="Age" ref={ageRef}/>
            <input value="Submit" type="submit"/>
        </form>
    );
}