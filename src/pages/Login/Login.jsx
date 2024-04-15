import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {

    const hanldeLogin = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);

    }


    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={hanldeLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div  className="text-center p-4">
                            <p>Don&apos;t have any account? Please<Link to='/register'><button className="btn btn-link">Register</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;