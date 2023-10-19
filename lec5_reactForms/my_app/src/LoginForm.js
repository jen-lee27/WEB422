import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import {useForm} from "react-hook-form"

export default function LoginPage() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm({defaultValues : {
        userName : "",
        password: "",
    }});

    //just to keep watch on your objects
    //mostly for debugging
    console.log(watch());
    // console.log(watch("userName")); //to just watch userName values

    const onSubmit = (data) => {
        //this function will be called after handleSubmit
        console.log(data.userName);
    }

    return (
    <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="avatar">
            <i className="material-icons">&#xE7FF;</i>
        </div>
        <h4 className="modal-title">Login to Your Account</h4>
        <div className="form-group">
            <input
            type="text"
            className="form-control"
            placeholder="Username"
            {...register("userName", {required: "This is a required field!"})} //way of calling register in react hook forms
            // required="required"
            />
            <br/>
            {/* show error message only if the error happened */}
            {errors.userName && (<p>{errors.userName.message}</p>)}
        </div>
        <div className="form-group">
            <input
            type="password"
            className="form-control"
            placeholder="Password"
            {...register("password", {
                minLength: {
                    value: 5,
                    message: "Min Length should be 5!"
                },
                //to create my own custom validator
                validate: (value) => {
                    //if there is no digit in my value then display an error
                    //you can also do a for loop
                    if (!/\d/.test(value)) {
                        return "Password should have at least one digit";
                    }
                    return true;
                }
                //to have a validator to be applied to both username and password, you can put it in a separate function and just call that function
            })}
            // required="required"
            />
            <br/>
            {errors.password && (<p>{errors.password.message}</p>)}
        </div>

        <input
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            value="Login"
        />
        </form>
    </div>
    );
}