export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-neutral-800 to-pink-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h1 className="text-2xl font-bold text-center">Heather's Salon</h1>
              <p className="text-gray-300 mt-2">Kings Mountain, North Carolina</p>
            </div>

            <div className="text-center md:text-right">
              <p className="mb-2">
                Made by{" "}
                <a href="https://teejmcsteez.tech/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-300 transition-colors">
                  Tommy Hall
                </a>
              </p>
              <p>
                <a href="https://github.com/TeejMcSteez/salonsWebsite" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}