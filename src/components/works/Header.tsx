"use client";

import Link from "next/link";
import { useState } from "react";

interface click {
    handleClick: () => void;
}

function NavButton({handleClick}: click) {
    return(
        <button 
            onClick={handleClick}
            className="p-2 rounded-lg hover:bg-rose-100 transition-all duration-200"
        >
            <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    );
}

function NavXButton({handleClick}: click) {
    return(
        <button 
            onClick={handleClick}
            className="p-2 rounded-lg hover:bg-rose-400 transition-all duration-200"
        >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    );
}

function NavBar({handleClick}: click) {
    return(
        <div className="fixed top-0 right-0 left-0 h-screen bg-rose-300 z-50 animate-fadeIn">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col space-y-4 max-w-md mx-auto">
                    <Link
                        href="/"
                        className="font-medium text-white bg-rose-500 rounded-xl
                        hover:bg-white hover:text-rose-600 transition-all duration-300
                        py-3 px-6 text-lg text-center shadow-md hover:shadow-lg"
                    >
                        Home
                    </Link>
                    <Link
                        href="/works"
                        className="font-medium text-white bg-rose-500 rounded-xl
                        hover:bg-white hover:text-rose-600 transition-all duration-300
                        py-3 px-6 text-lg text-center shadow-md hover:shadow-lg"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/ba"
                        className="font-medium text-white bg-rose-500 rounded-xl
                        hover:bg-white hover:text-rose-600 transition-all duration-300
                        py-3 px-6 text-lg text-center shadow-md hover:shadow-lg"
                    >
                        Transformations
                    </Link>
                </div>
                <div className="flex items-center justify-center p-2 m-3">
                    <NavXButton handleClick={handleClick} />
                </div>
            </div>
        </div>
    );
}

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    function handleClick() {
        setOpen(!isOpen);
    }

    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-rose-600 tracking-tight">
                    Beautiful Hair by Heather Melton
                </h1>
                <div className="flex items-center">
                    {isOpen ? <NavBar handleClick={handleClick} />
                        : <NavButton handleClick={handleClick} />
                    }
                </div>
            </div>
        </header>
    );
}