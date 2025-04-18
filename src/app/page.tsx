"use client";

import React, { useState } from 'react';
import Hero from '@/components/hero/Hero';
import Services from '@/components/main/Services';
import Footer from '@/components/main/footer/Footer';
import NavHeader from '@/components/main/navbar/NavHeader';
import Gallery from '@/components/main/Gallery'
import Policies from '@/components/main/Policies';
import LocationContact from '@/components/main/LocationContact';
import { motion } from 'motion/react'

export default function SalonApp() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the mobile navigation menu
  const toggleNavBar = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <motion.div className="min-h-screen dark:bg-slate-900 bg-gray-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}}
    >
      {/* Header and Navigation */}
      <NavHeader toggleNavBar={toggleNavBar} showMenu={showMenu} />
      {/* Hero Section */}

        <Hero />

      {/* Main Content */}

        <Services />

      {/* Gallery Section */}

        <Gallery />

      {/* Policies Section */}

        <Policies />

      {/* Location & Contact Section */}

        <LocationContact />

      {/* Footer */}

        <Footer />
    </motion.div>
  );
}