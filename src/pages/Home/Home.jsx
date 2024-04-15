
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {

    const { loader } = useContext(AuthContext);


    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            {
               loader && <span className="loading loading-dots loading-lg text-center"></span>
            }

        </div>
    );
};

export default Home;