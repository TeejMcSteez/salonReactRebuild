interface MobileIconProps {
    toggleNavBar: () => void;
    showMenu: boolean;
}

export default function MobileIcon({toggleNavBar, showMenu}: MobileIconProps) {
    return (
        <button
            className="lg:hidden focus:outline-none hover:scale-90"
            onClick={toggleNavBar}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              { !showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
    );
}