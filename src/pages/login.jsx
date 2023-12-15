import React from "react";
function Login() {
  return (
    <div className="Container">
        <div className="header">
            <div className="text">Login</div>
            <div className="underLine"></div>
        </div>
        <div className="inputs">
        <div className="input">
            <input type="text"/>
            <label>Username</label>
        </div>
        </div>
    </div>
  );
}

export default Login;