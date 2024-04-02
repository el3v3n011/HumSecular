import { useState } from "react";
import { Link } from "react-router-dom";
import data from '../../data/Routes';
import logo from '../../../public/images/logo.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => {
        setShowMenu(false);
    }

    return (
        <div className="block fixed  z-50">
            <nav className="bg-white grid grid-cols-2 grid-row-1 col-span-1 w-screen h-12 content-center text-xl">
                <div className="logo grid grid-cols-3 w-100 relative">
                    <div className="flex justify-center">
                        <img className="w-20 h-auto" src={logo} alt="" />
                    </div>
                    <h3 className="hidden lg:flex p-2 col-span-2 hover:text-partyRed">
                        Hindustan Awam Morcha
                    </h3>
                </div>
                <button
                    className="lg:hidden focus:outline-none flex justify-end pr-6"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <svg
                        className="w-6 h-6 cursor-pointer hover:text-partyRed"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {showMenu ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
                {showMenu && (
                    <button
                        className="absolute top-0 right-0 mr-4 mt-4 focus:outline-none"
                        onClick={closeMenu}
                    >
                        <svg
                            className="w-6 h-6 cursor-pointer hover:text-partyRed"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}
                <ul className={`lg:bg-white lg:flex lg:pt-2 lg:flex-row lg:space-x-10 lg:h-auto lg:w-auto flex-col h-screen w-screen bg-gray-200 ${showMenu ? "flex justify-end align-center" : "hidden"}`}>
                    <li className="hover:text-partyRed lg:hidden">
                        <h3 className="p-2 hover:text-partyRed">Hindustan Awam Morcha</h3>
                    </li>
                    {data.map((route, index) => (
                        <li className="hover:text-partyRed" key={index}>
                            <Link to={route.path}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
