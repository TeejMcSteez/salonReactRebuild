export default function Desktop() {
    return(
        <nav className="hidden lg:flex space-x-6">
            <a href="#services" className="px-4 py-2 rounded-full hover:bg-white hover:text-pink-600 transition-all font-medium">
              Services
            </a>
            <a href="#gallery" className="px-4 py-2 rounded-full hover:bg-white hover:text-pink-600 transition-all font-medium">
              Gallery
            </a>
            <a href="#policies" className="px-4 py-2 rounded-full hover:bg-white hover:text-pink-600 transition-all font-medium">
              Policies
            </a>
            <a href="#location" className="px-4 py-2 rounded-full hover:bg-white hover:text-pink-600 transition-all font-medium">
              Contact
            </a>
            <a href="/works" className="px-4 py-2 rounded-full bg-white text-pink-600 hover:bg-pink-100 transition-all font-medium">
              Portfolio
            </a>
          </nav>
    );
}