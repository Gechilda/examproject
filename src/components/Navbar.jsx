import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Oge React</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              {user?.displayName ? (
                <>
                  <Link
                    to="/menu"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Menu
                  </Link>
                  <Link
                    to="/user"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    User
                  </Link>
                  <Link
                    to="/contact"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </>
              ) : (
                <div></div>
              )}
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {user?.displayName ? (
                <a
                  href="#"
                  onClick={handleSignOut}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign out
                </a>
              ) : (
                <Link to="/">Sign in</Link>
              )}
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}
      </div>
    </>
  );
};

// const Navbar = () => {
//   const { user, logOut } = UserAuth();

//   const handleSignOut = async () => {
//     try {
//       await logOut()
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div className='flex justify-between bg-gray-200 w-full p-4'>
//       <h1 className='text-center text-2xl font-bold'>
//         Firebase Google Auth & Context
//       </h1>
//       {user?.displayName ? (
//         <div><button onClick={handleSignOut}>Logout</button>
//         <button onClick={handleSignOut}>ok</button></div>
//       ) : (
//         <Link to='/signin'>Sign in</Link>
//       )}
//     </div>
//   );
// };

export default Navbar;
