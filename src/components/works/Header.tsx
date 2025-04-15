export default function Header() {
    return (
        <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-rose-600 mb-2 md:mb-0">
            Beautiful Hair by Heather Melton
          </h1>
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="font-medium text-white bg-rose-600 rounded-xl hover:bg-rose-500 hover:text-rose-600 transition duration-300 py-2 px-4"
            >
              Home
            </a>
          </div>
        </div>
      </header>
    );
}