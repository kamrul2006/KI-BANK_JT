import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Blogs", path: "/blogs" },
        { name: "Contact", path: "/contact" },
    ];



    return (
        <nav className="backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300 bg-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-pink-300 to-pink-700 text-transparent bg-clip-text"
                    >
                        KI Bank
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative text-lg transition duration-300 ${isActive ? "text-pink-700 border-b-2 transition font-semibold" : "text-gray-700 hover:text-pink-600"
                                    } `
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}


                    </div>

                    <div>
                        {/* dcv  Button */}
                        <Link
                            to="/error"

                            className="ml-4 bg-gradient-to-r from-pink-700 to-pink-400  hover:to-pink-700 hover:from-pink-400   text-white px-4 py-2 rounded shadow-md transition duration-300 hover:drop-shadow-2xl font-semibold hidden lg:block"
                        >
                            Get Card
                        </Link>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-pink-600 transition"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-md rounded-b-xl">
                    <div className="flex flex-col items-center space-y-4 py-6 transition-all">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-lg font-semibold transition ${isActive ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/Error"
                            className="ml-4 bg-gradient-to-r from-pink-700 to-pink-400  hover:to-pink-700 hover:from-pink-400   text-white px-4 py-2 rounded shadow-md transition duration-300 hover:drop-shadow-2xl font-semibold "
                        >
                            Get Card
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
