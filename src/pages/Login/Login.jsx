import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);


    const location = useLocation();
    const navigate = useNavigate()

    const hanldeLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(() => {
                toast.success("Login Successful");

                navigate(location?.state ? location.state : '/');

            })
            .catch(error => console.log(error.message))

        e.target.reset()

    }


    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                navigate(location?.state ? location.state : '/');
                toast.success("Login Successful");
            })
            .catch(error => console.log(error))
    }

    const handleGithubLogin = () => {
        githubSignIn()
            .then(() => {
                toast.success("Login Successful");

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.log(error))
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
                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full" required />

                                    <span className="absolute top-4 right-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary">Login</button>
                            </div>
                        </form>

                        <div className="mx-2 mb-4">
                            <button className="btn btn-outline btn-success w-full text-lg" onClick={handleGoogleLogin}><FaGoogle /> Google</button>
                        </div>

                        <div className="mx-2">
                            <button className="btn btn-outline btn-warning w-full text-lg" onClick={handleGithubLogin}><FaGithub /> Github</button>
                        </div>

                        <div className="text-center p-4">
                            <p>Don&apos;t have any account? Please<Link to='/register'><button className="btn btn-link font-bold">Register</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;