import './SighIn.css'

function SighIn({onForgotPassword, onLogin}) {
  return (
    <div className="row row-cols-1 border position-absolute top-50 start-50 translate-middle p-5" id='loginbox'>
      <div className="col">
        <h2 className="text-center">Log In</h2>
      </div>
      <div className="col">
        <p className="text-center">Please log in to continue</p>
      </div>
      <div className="col">
        <label htmlFor="email" className="form-label text-start">
          Email Address
        </label>
        <input
          type="email"
          className="form-control text-start rounded-0"
          id="email"
          placeholder="Placeholder"
        />
      </div>
      <div className="col">
        <label htmlFor="email" className="form-label text-start">
          Password
        </label>
        <input
          type="password"
          className="form-control text-start rounded-0"
          id="password"
          placeholder="Placeholder"
        />
      </div>
      <div className="col">
        <div className="row other-inputs-class">
          <div className="col align-self-start">
            <input
              type="checkbox"
              id="Rememberme"
              name="Rememberme"
              value="Rememberme"
            />
            <label htmlFor="vehicle1" id='Remembermelabel'> Remember me</label>
          </div>
          <div className="col align-self-end text-end">
            <button id="forgotpassbutton" type="button" className="btn btn-link" onClick={() => onForgotPassword()}>
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
      <div className="col d-grid login-custom-class">
        <button type="button" className="btn btn-primary rounded-0" onClick={onLogin}>
          Log In
        </button>
      </div>
      <div className="col text-center" id='helptext'>
        <p>
          If you require an account,{" "}
          <a
            href="#"
            className="link-offset-2 link-underline link-underline-opacity-0"
          >
            contact XYZ Team.
          </a>
        </p>
      </div>
    </div>
  );
}

export default SighIn;
