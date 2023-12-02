import React, { useState } from "react";
import Login from "./Login";

import classes from "./AuthBlock.module.css";
import Registration from "./Registration";

const AuthBlock = () => {
  const [selectLogin, setSelectLogin] = useState(true);

  const activeSelect = {
    color: "#939393",
  };
  const inactiveSelect = {
    color: "#AFAFAF",
  };

  const selectLoginHandler = (e) => {
    setSelectLogin(!selectLogin);
  };

  return (
    <div className={classes.background}>
      <div className={classes.authBlock}>
        <div className={classes.select}>
          <button
            onClick={selectLoginHandler}
            style={selectLogin ? activeSelect : inactiveSelect}
          >
            Login
          </button>
          /
          <button
            onClick={selectLoginHandler}
            style={!selectLogin ? activeSelect : inactiveSelect}
          >
            Register
          </button>
        </div>
        {selectLogin ? <Login /> : <Registration />}
      </div>
    </div>
  );
};

export default AuthBlock;
