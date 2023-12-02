import React from "react";
import classes from "./Registration.module.css";

const Registration = () => {
  return (
    <form className={classes.form}>
      <div className={classes.rowInputs}>
        <input
          className={classes.input}
          type="string"
          placeholder="name"
        />
        <input
          className={classes.input}
          type="string"
          placeholder="surname"
        />
      </div>
      <input className={classes.input} type="password" placeholder="email" />
      <input className={classes.input} type="password" placeholder="password" />
      <button className={classes.submitBtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Registration;
