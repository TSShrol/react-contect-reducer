import { useContext, useRef } from "react";
import { FormState } from "react-hook-form";
import { useForm } from "react-hook-form";
import {AuthContext } from '../context/Context';

export default function Login(){
  
  const {setUserName} = useContext(AuthContext);
    
    //How to handle forms
    // const user={
    //     login:"",
    //     password: ""
    // };
    //=========1. using onChange event
    // const emailChange=(event)=>{
    //     console.log(event.target.value);
    //     user.login=event.target.value;
    // };
    
    // //=========2. ref binding to input
    // let passRef=useRef();
    // const submit=(event)=>{
    //     event.preventDefault();
    //     //read ref data
    //     user.password=passRef.current.value;
    //     console.log(`password`,user);
       
    // };

    //==========3. react hook
    const {
        register, //to attrack changes of form inputs => binding input to form
        handleSubmit, //onSubmir event handler
        formState: { errors },
        //add validators
      } = useForm();

    const onSubmit=(user)=>{
        console.log(`password`,user);
        setUserName(user.email);
       
    };  

    return (
// JSX code for login form
    <div className="form" >
      {/* <form> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label>Email </label>
          {/* <input type="text" name="email" onChange={emailChange} required /> */}
          <input {...register("email")} type="text" name="email" required />
          {/* {renderErrorMessage("email")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          {/* <input ref={passRef} type="password" name="pass" required /> */}
          <input {...register("password")} type="password" name="password" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          {/* <input type="submit" onClick={submit}/> */}
          <input type="submit"/>
        </div>
      </form>
    </div>
    );
}