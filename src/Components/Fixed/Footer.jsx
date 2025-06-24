import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'

export const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center border-t border-pink-500 bg-black text-pink-500 rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <NavLink to={'/'} className={({ isActive }) => `${isActive && "border-b"} pb-1 hover:text-pink-300`}>Home</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => `${isActive && "border-b"} pb-1 hover:text-pink-300`}>About</NavLink>
                    <NavLink to={'/blogs'} className={({ isActive }) => `${isActive && "border-b"} pb-1 hover:text-pink-300`}>Blogs</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => `${isActive && "border-b"} pb-1 hover:text-pink-300`}>Contact</NavLink>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a>
                            <FaFacebook className='hover:text-pink-500 transition' />
                        </a>
                        <a>
                            <FaInstagram className='hover:text-pink-500 transition' />
                        </a>
                        <a>
                            <FaTwitter className='hover:text-pink-500 transition' />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by KIBank Ltd</p>
                </aside>
            </footer>

        </div>
    )
}
