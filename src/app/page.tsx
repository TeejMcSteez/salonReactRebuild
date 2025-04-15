"use client";

import React, { useState } from 'react';
import Hero from '@/components/hero/Hero';
import Services from '@/components/main/Services';
import Footer from '@/components/footer/Footer';
import NavHeader from '@/components/navbar/NavHeader';

export default function SalonApp() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the mobile navigation menu
  const toggleNavBar = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <div className="min-h-screen dark:bg-slate-900 bg-gray-50">
      {/* Header and Navigation */}
      <NavHeader toggleNavBar={toggleNavBar} showMenu={showMenu}/>

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <Services />

      {/* Footer */}
      <Footer />
    </div>
  );
}