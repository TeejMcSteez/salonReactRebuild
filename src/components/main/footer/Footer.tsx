export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-neutral-900 via-pink-800 to-pink-600 text-white py-4 mt-12 shadow-inner">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-2xl font-bold tracking-wide">Heather&apos;s Salon</h1>
          <span className="w-12 border-t border-pink-300 opacity-60 my-2"></span>
          <p className="text-gray-200 text-sm">Kings Mountain, North Carolina</p>
        </div>
      </div>
    </footer>
  );
}