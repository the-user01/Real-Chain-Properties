import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const hanldeRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                updateUser(name, photoUrl)
                .then(()=> console.log("Profile Updated"))
                .catch(error => console.log(error))

            })
            .catch(error => console.log(error))


        e.target.reset();

        navigate('/')
    }

    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200 pb-6">
                <div className="hero-content flex-col">
                    <div className="text-center mt-6 mb-6">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={hanldeRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="Insert Your Photo URL here" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full">Register</button>
                            </div>
                        </form>

                        <div className="text-center p-4">
                            <p>Already have an account? Please<Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;