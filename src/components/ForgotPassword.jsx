import './ForgotPassword.css'
export default function ForgotPassword() {
    return (
        <div className="row row-cols-1 border position-absolute top-50 start-50 translate-middle p-5" id='forgotpassbox'>
                <div className="col">
                <h3 className="text-center">Forgot your password?</h3>
                </div>
                <div className="col">
                <p className="text-center">We'll send you a message to help you reset your password.</p>
                </div>
                <div className="col">
                <label htmlFor="email" className="form-label text-start">
                    Email Address
                </label>
                <input
                    type="email"
                    className="form-control text-start rounded-0"
                    id="email"
                    placeholder="Enter email address"
                />
                </div>
                <div className="col d-grid">
                <button type="button" className="btn btn-primary rounded-0">Send Reset Link</button>
                </div>
            </div>
    )
}