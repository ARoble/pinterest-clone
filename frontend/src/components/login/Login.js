import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../../Error";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState([]);

  function register(e) {
    e.preventDefault();
    if (email !== "" && password !== "" && age !== 0) {
      const user = {
        email,
        password,
        age,
      };
      axios
        .post("http://localhost:8000/api/v1/auth/register", user)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } else {
      setError({ message: "Please fill out all required fields" });
    }
  }

  return (
    <div
      className="login flex"
      style={{
        backgroundImage: "url(/back.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="login-message">
        <div style={{ width: "500px", padding: "20px", fontSize: "45px" }}>
          <h2>Sign up to get your ideas</h2>
        </div>
      </div>

      <div className="login-card">
        <div className="login-form-card">
          <img src="/logo.png" alt="logo" height="40" />
          <h3>Welcome to Pinterest</h3>
          <small>Find new ideas to try</small>
          {error !== "" ? <Error error={error} /> : ""}
          <form className="login-form" onSubmit={(e) => register(e)}>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Create a Passwords"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="number"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />

            <div className="login-buttons">
              <button className="btn btn-login">Continue</button>
              <small>OR</small>
              <button className="btn btn-login-fb">
                <FaFacebookF />
                Continue with Facebook
              </button>
              <button className="btn btn-login-google">
                Continue with Google
                <FaGoogle />
              </button>
            </div>

            <div className="login-info">
              <p>
                By creating an account with us you agree that we are the best😊
                Read our <b>Terms and Conditions</b> and our <b>Policy</b>
              </p>
              <p>
                <b>Already a member? Log in</b>
              </p>
              <p>
                <b>You are a Business? Get started</b>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
