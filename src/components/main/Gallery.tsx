import { motion } from "motion/react";

export default function Gallery() {
  const transformations = [
      { type: 'Before', image: './assets/before.jpg' },
      { type: 'After', image: './assets/after.jpg' }
  ];

  return (
      <motion.section id="gallery" className="my-16 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">
                  Transformation Gallery
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See the stunning before and after transformations from our salon.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-2">
              {transformations.map(({ type, image }) => (
                  <div key={type} className="relative rounded-lg overflow-hidden shadow-lg group aspect-[3/4]">
                      <img
                          src={image}
                          alt={`${type} transformation`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                          <span className="text-white font-semibold text-xl">{type}</span>
                      </div>
                  </div>
              ))}
          </div>

          <div className="mt-10 text-center">
              <a
                  href="https://www.instagram.com/maryheathermelton?igsh=OTNiZm1qcDI0dzd3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all shadow-md"
              >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  See More on Instagram
              </a>
          </div>
      </motion.section>
  );
}