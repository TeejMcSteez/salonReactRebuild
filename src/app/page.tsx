"use client";

import React, { useState } from 'react';

function SalonApp() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the mobile navigation menu
  const toggleNavBar = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <div className="min-h-screen dark:bg-slate-900 bg-gray-50">
      {/* Header and Navigation */}
      <header className="bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Heather's Salon</h1>
          </div>
          {/* Mobile Hamburger Icon */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleNavBar}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              { !showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
          {/* Desktop Navigation */}
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
        </div>
        {/* Mobile Navigation */}
        {showMenu && (
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
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-100 to-white dark:from-slate-800 dark:to-slate-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">Transform Your Look</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert hair styling, coloring, and extensions in Kings Mountain, North Carolina.
          </p>
          <a
            href="#location"
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all shadow-md"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* Main Content */}
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
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-pink-600 py-3 px-6">
                <h3 className="text-xl font-bold text-white">Extensions</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Consultation Required (Prices provided at consultation)
                </p>
                <div className="flex justify-between items-center p-3 bg-pink-50 dark:bg-slate-700 rounded">
                  <span className="font-medium">Starting at</span>
                  <span className="text-xl font-bold text-pink-600 dark:text-pink-400">$150+</span>
                </div>
              </div>
            </div>

            {/* Haircuts */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-pink-600 py-3 px-6">
                <h3 className="text-xl font-bold text-white">Haircuts</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Men</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Hair Cut</span> <span className="font-bold">$20+</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Women</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Dry Cut</span> <span className="font-bold">$30+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Shampoo/Cut/Style</span> <span className="font-bold">$35+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Shampoo Style</span> <span className="font-bold">$35+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Conditioning Treatment</span> <span className="font-bold">$35+</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Color & Foils */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-pink-600 py-3 px-6">
                <h3 className="text-xl font-bold text-white">Color & Foils</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Single color included (4oz) & additional usage at extra cost
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Color</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Short Hair</span> <span className="font-bold">$55+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Medium Hair</span> <span className="font-bold">$65+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Long Hair</span> <span className="font-bold">$85+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Conditioning Treatments</span> <span className="font-bold">$35+</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Foils</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Partial: Short</span> <span className="font-bold">$65+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Partial: Medium</span> <span className="font-bold">$75+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Partial: Long</span> <span className="font-bold">$85+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Full: Short</span> <span className="font-bold">$75+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Full: Medium</span> <span className="font-bold">$85+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Full: Long</span> <span className="font-bold">$95+</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Toning</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Short Hair</span> <span className="font-bold">$25+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Medium Hair</span> <span className="font-bold">$35+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Long Hair</span> <span className="font-bold">$45+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Waxing */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-pink-600 py-3 px-6">
                <h3 className="text-xl font-bold text-white">Waxing</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Eyebrows</span> <span className="font-bold">$10</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lips</span> <span className="font-bold">$10</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Chin</span> <span className="font-bold">$10</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Face</span> <span className="font-bold">$30</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">Transformation Gallery</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See the stunning before and after transformations from our salon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src='./assets/before.jpg'
                alt="Before transformation"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="text-white font-semibold text-xl">Before</span>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src='./assets/after.jpg'
                alt="After transformation"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="text-white font-semibold text-xl">After</span>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/maryheathermelton?igsh=OTNiZm1qcDI0dzd3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              See More on Instagram
            </a>
          </div>
        </section>

        {/* Policies Section */}
        <section id="policies" className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">Salon Policies</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Please review our policies before booking your appointment.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">
                  Please no box dye soon before appointment unless consulted with me beforehand
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">
                  Please inform me of any prior damage or issues so I can address them before your appointment.
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">
                  Prices are final and non-negotiable.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section id="location" className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">Location & Contact</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to book your appointment? Get in touch today.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
                <p className="font-semibold mb-4 text-gray-800 dark:text-white">
                  Contact by phone or email is preferred
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-200">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        South City Street, Kings Mountain, North Carolina 28086
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-200">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">maryheathermeltonwork@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-200">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">704-692-1792</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-200">Instagram</h4>
                      <a
                        href="https://www.instagram.com/maryheathermelton?igsh=OTNiZm1qcDI0dzd3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-600 transition-colors"
                      >
                        @maryheathermelton
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 dark:bg-slate-700 p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Hours of Operation</h3>

                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-pink-100 dark:border-slate-600">
                    <span className="font-medium">Monday - Friday</span>
                    <span>By appointment</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-100 dark:border-slate-600">
                    <span className="font-medium">Saturday</span>
                    <span>By appointment</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-100 dark:border-slate-600">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Please be respectful of my time; contact after 7pm may not receive a timely response.
                  </p>
                </div>

                <div className="mt-6">
                  {/* In a production React app, consider adding the Acuity scheduling external link/script in your public/index.html */}
                  <a
                    href="https://app.acuityscheduling.com/schedule.php?owner=35091671&ref=booking_button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="acuity-embed-button"
                    style={{
                      background: "#000000",
                      color: "#fff",
                      padding: "8px 12px",
                      border: "0px",
                      boxShadow: "0 -2px 0 rgba(0,0,0,0.15) inset",
                      borderRadius: "4px",
                      textDecoration: "none",
                      display: "inline-block"
                    }}
                  >
                    Schedule Appointment
                  </a>
                  {/* The following link and script tags are directly converted from your Svelte component.
                      In a React app, it is generally recommended to include such external resources in the HTML head */}
                  <link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/35091671.css" id="acuity-button-styles" />
                  <script src="https://embed.acuityscheduling.com/embed/button/35091671.js" async></script>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <a
              href="#location/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 m-4 items-center justify-center text-center bg-pink-600 hover:bg-pink700 rounded-lg text-white font-bold"
            >
              Back to Top
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
}

export default SalonApp;
