import MobileIcon from "./MobileIcon";
import Desktop from "./Desktop";
import MobileMenu from "./MobileMenu";

interface MobileIconProps {
    toggleNavBar: () => void;
    showMenu: boolean;
}

export default function NavHeader({toggleNavBar, showMenu}: MobileIconProps) {
    return (
        <header className="bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-lg">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Heather's Salon</h1>
                  </div>
                  {/* Mobile Hamburger Icon */}
                  <MobileIcon toggleNavBar={toggleNavBar} showMenu={showMenu}/>
                  {/* Desktop Navigation */}
                  <Desktop />
                </div>
                {/* Mobile Navigation */}
                {showMenu && (
                  <MobileMenu />
                )}
        </header>
    );
}