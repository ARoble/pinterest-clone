import { FaFacebookF, FaGoogle } from "react-icons/fa";

function Login() {
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
          <form className="login-form">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Create a Passwords" />
            <input type="text" placeholder="Age" />

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
