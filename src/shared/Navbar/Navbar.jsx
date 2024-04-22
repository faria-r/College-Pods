import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((e) => console.log(e));
  };
  return (
    <div>
      <div className="navbar text-xl text-blue-600 bg-base-100 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/college">Colleges</Link>
              </li>
              <li>
                <Link to="/admission">Admission</Link>
              </li>
              <li>
                <Link to="/myCollege">My College</Link>
              </li>
              <li>
                {user ? (
                  <>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="btn py-0 bg-transparent text-blue-600"
                      >
                        LogOut
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <Link to="/login">login</Link>
                  </>
                )}
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">College-Pods</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/college">Colleges</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link to="/myCollege">My College</Link>
            </li>
            <li>
              {user ? (
                <>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn py-0 bg-transparent text-blue-600"
                    >
                      LogOut
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <Link to="/login">login</Link>
                </>
              )}
            </li>
          </ul>
        </div>
        {user && (
          <>
            {" "}
            <div
              tabIndex={0}
              role="button"
              className="btn  btn-ghost btn-circle -mr-16 avatar"
            >
              <div className="w-10 rounded-full">
                {user ? (
                  <>
                    <img alt="User" src={user?.photoURL} />
                  </>
                ) : (
                  <>
                    {" "}
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </>
                )}
              </div>

              {user && (
                <>
                  <p>{user.displayName}</p>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
