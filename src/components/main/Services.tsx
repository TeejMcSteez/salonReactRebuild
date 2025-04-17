import ColorFoil from "./ColorFoil";
import Extensions from "./Extensions";
import Haircuts from "./Haircuts";
import Waxing from "./Waxing";

export default function Services() {
    return (
        <main className="container mx-auto px-6 py-12">
        {/* Services Section */}
        <section id="services" className="my-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional hair services tailored to your unique style and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Extensions */}
            <Extensions />

            {/* Haircuts */}
            <Haircuts />

            {/* Color & Foils */}
            <ColorFoil />

            {/* Waxing */}
            <Waxing />
          </div>
        </section>
      </main>
    );
}