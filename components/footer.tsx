import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-[#102368] text-white py-12 px-6 border-t border-white/10 overflow-x-hidden font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Brand Name */}
                <h3 className="text-3xl font-black text-sky-400 uppercase tracking-tighter mb-8">
                    Strive
                </h3>

                {/* Navigation Links */}
                <nav className="flex gap-8 mb-8 text-sm md:text-base font-light tracking-wide">
                    <a href="#" className="hover:text-sky-400 transition-colors">Home</a>
                    <a href="#" className="hover:text-sky-400 transition-colors">About</a>
                    <a href="#" className="hover:text-sky-400 transition-colors">Products</a>
                    <a href="#" className="hover:text-sky-400 transition-colors">Book</a>
                </nav>

                {/* Copyright */}
                <p className="text-xs md:text-sm text-white/50 text-center">
                    &copy; {new Date().getFullYear()} Strive Products. All rights reserved.
                </p>

            </div>
        </footer>
    )
}

export default Footer
