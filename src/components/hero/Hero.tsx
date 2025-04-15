export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-pink-100 to-white dark:from-slate-800 dark:to-slate-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">Transform Your Look</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert hair styling, coloring, and extensions in Kings Mountain, North Carolina.
          </p>
          <a
            href="https://heathermelton.as.me/"
            target="_blank"
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all shadow-md"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    );
}