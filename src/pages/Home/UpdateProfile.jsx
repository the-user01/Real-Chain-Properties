import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {

    const {updateUser} = useContext(AuthContext);

    const handleUpdateBtn = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');

        updateUser(name, photoUrl)
        .then((result)=>{
            // if(result.user){
            //     toast("Profile Updated Successfully")
            // }
            console.log(result);

        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center mb-6">
                        <h1 className="text-5xl font-bold">Update Profile</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleUpdateBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;