import Link from "next/link";
import { useState } from "react";

interface click {
    handleClick: () => void;
}

function NavButton({handleClick}: click) {
    return(
        <button onClick={handleClick}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <button onClick={handleClick}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row">
                <Link
                href="/"
                className="font-medium text-white bg-rose-600 rounded-xl
                hover:bg-rose-300 hover:text-slate-900 transition duration-300
                py-2 px-4 m-1"
                >
                Home
                </Link>
                <Link
                href="/works"
                className="font-medium text-white bg-rose-600 rounded-xl
                hover:bg-rose-300 hover:text-slate-900 transition duration-300
                py-2 px-4 m-1"
                >
                Portfolio
                </Link>
                <Link
                href="/ba"
                className="font-medium text-white bg-rose-600 rounded-xl
                hover:bg-rose-300 hover:text-slate-900 transition duration-300
                py-2 px-4 m-1"
                >
                Transformations
                </Link>
                
            </div>
            <div className="flex items-center justify-center">
                <NavXButton handleClick={handleClick} />
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
        <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-row md:flex-row justify-between items-center">
          {isOpen ? null: <h1 className="text-3xl font-bold text-rose-600 mb-2 md:mb-0">
            Beautiful Hair by Heather Melton
          </h1>}
          <div className="flex items-center gap-6">
            {isOpen ? <NavBar handleClick={handleClick} />
                :<NavButton handleClick={handleClick} />
                }
          </div>
        </div>
      </header>
    );
}