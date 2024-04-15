import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {

    const {user, loader} = useContext(AuthContext);

    if(loader){
        <span className="loading loading-dots loading-lg flex justify-center items-center min-h-screen"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,

}

export default PrivateRoutes;