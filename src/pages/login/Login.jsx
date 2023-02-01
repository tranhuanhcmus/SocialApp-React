import { useContext } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "./../../context/authContext";
const Login = () => {
  const { currentUser, login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login();
    window.location.replace("http://localhost:3000/");
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            eligendi consequuntur velit beatae nulla eius optio laborum id
            itaque recusandae.
          </p>
          <span>Don't have your account?</span>
          <Link to="/Register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
