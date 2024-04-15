import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
                <h2 className="text-6xl font-bold mb-12">404 Page Not Found</h2>
                <Link to='/'><button className="btn btn-primary">Back to Home Page</button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;