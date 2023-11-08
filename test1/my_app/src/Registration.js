import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import {useForm} from "react-hook-form"

export default function RegistrationForm() {
    const {register, handleSubmit, onChange, getValues, formState: {errors}} = useForm({defaultValues : {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }});

    function validateNames(value, name) {
        if (value.length >= 3)
            return true;
        return `${name} should be at least 3 characters long`;
    }

    function validatePasswordMatch(value) {
        if(value === getValues("confirmPassword"))
            return true;
        return "Passwords do not match";
    }

    return (
    <div className="card">
        <div className="card-header">
            <h3>Sign Up Form</h3>
        </div>
        <div className="card-body">
            <form onChange={handleSubmit()}>
                <div className="row">
                    <div className="col">
                    <input type="text" tabIndex="1" className="form-control" placeholder="First name"
                        {...register("firstName", {
                            required: "First Name is required",
                            validate: (value) => {
                                return validateNames(value, "First Name");
                            }
                        })} onChange={onChange}
                    />
                    <br/>
                    {errors.firstName && (<p>{errors.firstName.message}</p>)}
                    </div>
                    <div className="col">
                    <input type="text" tabIndex="2" className="form-control" placeholder="Last name"
                        {...register("lastName", {
                            required: "Last Name is required",
                            validate: (value) => {
                                return validateNames(value, "Last Name");
                            }
                        })}
                    />
                    <br/>
                    {errors.lastName && (<p>{errors.lastName.message}</p>)}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <input type="text" tabIndex="3" className="form-control" placeholder="Email Address"
                        {...register("email", {
                            required: "Email is required",
                            validate: (value) => {
                                if(value.indexOf('@') > -1)
                                    return true;
                                return "Invalid email address";
                            }
                        })}
                    />
                    <br/>
                    {errors.email && (<p>{errors.email.message}</p>)}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <input type="text" tabIndex="4" className="form-control" placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            validate: (value) => {
                                return validatePasswordMatch(value);
                            }
                        })} onChange={onChange}
                    />
                    <br/>
                    {errors.password && (<p>{errors.password.message}</p>)}
                    </div>
                    <div className="col">
                    <input type="text" tabIndex="5" className="form-control" placeholder="Confirm Password"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required"})} onChange={onChange}
                    />
                    <br/>
                    {errors.confirmPassword && (<p>{errors.confirmPassword.message}</p>)}
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" tabIndex="6" className="btn btn-success btn-lg">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    );
}