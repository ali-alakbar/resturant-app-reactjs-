import { NavLink } from "react-router-dom";
import "./style/style.css";
import Input from "./Input/Input";
function SignIn() {

  return (
    <div className="singin-popup">
      <div className="signin-title">
        <h3>
          Sign in <NavLink to={"##"}>Create New Account</NavLink>
        </h3>
      </div>
      <form action="" className="signin-form">
        <Input
          label={"Username or Email"}
          inputType={"text"}
          placeholder={"Username"}
        />
        <Input
          label={"Password"}
          inputType={"password"}
          placeholder={"Password"}
        />
        <button className="btn login-btn">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
