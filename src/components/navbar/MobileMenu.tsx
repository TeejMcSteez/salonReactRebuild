export default function MobileMenu() {
    return (
        <nav className="lg:hidden bg-pink-700 animate-fadeIn">
            <div className="container mx-auto px-6 py-2 flex flex-col space-y-2">
              <a href="#services" className="block px-4 py-3 rounded hover:bg-pink-600 transition-all border-b border-pink-500">
                Services
              </a>
              <a href="#gallery" className="block px-4 py-3 rounded hover:bg-pink-600 transition-all border-b border-pink-500">
                Gallery
              </a>
              <a href="#policies" className="block px-4 py-3 rounded hover:bg-pink-600 transition-all border-b border-pink-500">
                Policies
              </a>
              <a href="#location" className="block px-4 py-3 rounded hover:bg-pink-600 transition-all border-b border-pink-500">
                Contact
              </a>
              <a href="/works" className="block px-4 py-3 rounded bg-white text-pink-600 hover:bg-pink-100 transition-all">
                Portfolio
              </a>
            </div>
        </nav>
    );
}