import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <form className={classes.form}>
      <input
        className={classes.input}
        type="string"
        placeholder="username/email"
      />
      <input className={classes.input} type="password" placeholder="password" />
      <button className={classes.submitBtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Login;
