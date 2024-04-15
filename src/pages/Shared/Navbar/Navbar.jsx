import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import demoImg from '../../../assets/user.png';

const Navbar = () => {

    const { user, logOut, loader } = useContext(AuthContext);

    const navList = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>

    </>

    const handleLogOut = () => {
        logOut()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Something</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            {
                                loader ? <span className="loading loading-dots loading-sm"></span> :
                                    <>
                                        <div className="tooltip tooltip-bottom mr-4" data-tip="hello">
                                            <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                        </div>

                                        <button className="btn btn-primary" onClick={handleLogOut}>SignOut</button>
                                    </>
                            }
                        </>
                        :
                        <>
                            {loader ?  <span className="loading loading-dots loading-sm text-center"></span> :
                            <>
                                <div className="avatar mr-4">
                                    <div className="w-12 rounded-full">
                                        <img src={demoImg} />
                                    </div>
                                </div>
                                <Link to='/login'><button className="btn btn-primary">Login</button></Link>
                            </>}
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;