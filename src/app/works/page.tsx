"use client";

import React, { useState, useMemo } from "react";

function WorksPage() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; category: string; title: string; description: string } | null>(null);

  const works = [
    { src: "/assets/works/work1.jpg", category: "coloring", title: "Flowing Curls", description: "Flowing curls with light blonde hair" },
    { src: "/assets/works/work2.jpg", category: "coloring", title: "Light Blonde", description: "Natural-looking sun-kissed highlights" },
    { src: "/assets/works/work3.jpg", category: "styling", title: "Color and Style", description: "Perfect color and style with flowing blowout" },
    { src: "/assets/works/work4.jpg", category: "haircuts", title: "Simple Cut", description: "Layered cut with even ends" },
    { src: "/assets/works/work5.jpg", category: "coloring", title: "Vibrant Red", description: "Bold and vibrant red color transformation" },
    { src: "/assets/works/work6.jpg", category: "styling", title: "Simple Cut with Highlights", description: "Elegant cut with highlights" }
  ];

  // Compute filtered works whenever currentCategory changes.
  const filteredWorks = useMemo(() => {
    return currentCategory === "all" 
      ? works 
      : works.filter((work) => work.category === currentCategory);
  }, [currentCategory, works]);

  // Scroll to top of the page smoothly.
  const scrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  // Open and close the modal for viewing a selected image.
interface Work {
    src: string;
    category: string;
    title: string;
    description: string;
}

const openImage = (work: Work): void => {
    setSelectedImage(work);
};

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id="container" className="min-w-screen min-h-screen overflow-hidden bg-rose-50 text-gray-800">
      {/* Header with salon info */}
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

      {/* Hero banner */}
      <div className="bg-gradient-to-r from-rose-300 to-purple-300 text-gray-900 py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Hair, Transforming Lives
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-6">
            Browse through my portfolio of real clients and amazing transformations.
          </p>
        </div>
      </div>

      {/* Style category filter */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold text-center mb-6">My Latest Work</h3>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-4 py-2 rounded-full transition duration-300 ${
              currentCategory === "all" ? "bg-rose-600 text-white" : "bg-white hover:bg-rose-100"
            }`}
            onClick={() => setCurrentCategory("all")}
          >
            All Styles
          </button>
          <button
            className={`px-4 py-2 rounded-full transition duration-300 ${
              currentCategory === "haircuts" ? "bg-rose-600 text-white" : "bg-white hover:bg-rose-100"
            }`}
            onClick={() => setCurrentCategory("haircuts")}
          >
            Haircuts
          </button>
          <button
            className={`px-4 py-2 rounded-full transition duration-300 ${
              currentCategory === "coloring" ? "bg-rose-600 text-white" : "bg-white hover:bg-rose-100"
            }`}
            onClick={() => setCurrentCategory("coloring")}
          >
            Coloring
          </button>
          <button
            className={`px-4 py-2 rounded-full transition duration-300 ${
              currentCategory === "styling" ? "bg-rose-600 text-white" : "bg-white hover:bg-rose-100"
            }`}
            onClick={() => setCurrentCategory("styling")}
          >
            Styling
          </button>
        </div>

        {/* Gallery grid with larger images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {filteredWorks.map((work, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:shadow-xl"
              onClick={() => openImage(work)}
              onKeyDown={(e) => e.key === "Enter" && openImage(work)}
              role="button"
              tabIndex={0}
            >
              <div className="relative">
                <img src={work.src} alt={work.title} className="w-full h-96 object-cover" />
                <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs uppercase tracking-wider font-bold px-3 py-1 m-3 rounded-full">
                  {work.category}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen image viewer modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-20 p-4"
          onClick={closeImage}
        >
          <div
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <button
              className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200"
              onClick={closeImage}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-rose-400 mb-4">
                Beautiful Hair by Heather Melton
              </h4>
              <p className="mb-2">South City Street</p>
              <p className="mb-2">Kings Mountain, NC 28086</p>
              <p className="mb-2">(704) 692-1792</p>
              <p>maryheathermeltonwork@gmail.com</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-rose-400 mb-4">Booking Policy</h4>
              <p className="mb-2">
                Booking is appointment only with walk-ins welcome if there is availability.
              </p>
              <p className="mb-2">Please contact me to book an appointment!</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-rose-400 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/maryheathermelton?igsh=OTNiZm1qcDI0dzd3"
                  className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center hover:bg-rose-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* You can add more social links here */}
              </div>
            </div>
          </div>
          <div className="mt-10 text-center border-t border-gray-800 pt-8">
            <button
              type="button"
              className="mt-4 inline-flex items-center px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-full transition duration-300"
              onClick={scrollTop}
              onKeyDown={(e) => e.key === "Enter" && scrollTop()}
              aria-roledescription="button"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WorksPage;
