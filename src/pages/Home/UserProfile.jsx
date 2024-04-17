import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {

    const { user, loader } = useContext(AuthContext)

    return (
        <div>
            <Helmet>
                <title>User Profile</title>
            </Helmet>

            <div className="text-center">
                {
                    loader && <span className="loading loading-dots loading-lg"></span>
                }
            </div>

            <div className="flex justify-center my-12">
                <div className="overflow-x-auto">
                    <table className="table">

                        <tbody>

                            <tr>
                                <td>
                                    <div className="avatar flex justify-center">
                                        <div className="w-24 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-3xl font-bold text-center">{user.displayName}</td>
                            </tr>

                            <tr>
                                <td className="text-xl"><span className="font-bold">Email:</span> {user.email}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="text-center mt-4">
                        <Link to='/updateProfile'><button className="btn btn-outline btn-success">Update profile</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;