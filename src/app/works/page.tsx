"use client";

import Footer from "@/components/works/Footer";
import Hero from "@/components/hero/Hero";
import FullscreenModal from "@/components/works/FullscreenModal";
import Header from "@/components/works/Header";
import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import RollingGallery from "@/components/works/RollingGallery";
import BAAdvert from "@/components/works/BAAdvert";

export default function WorksPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; category: string; title: string; description: string } | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null)

  const works = [
    { src: "/assets/works/work1.jpg", category: "coloring", title: "Flowing Curls", description: "Flowing curls with light blonde hair" },
    { src: "/assets/works/work2.jpg", category: "coloring", title: "Light Blonde", description: "Natural-looking sun-kissed highlights" },
    { src: "/assets/works/work3.jpg", category: "styling", title: "Color and Style", description: "Perfect color and style with flowing blowout" },
    { src: "/assets/works/work4.jpg", category: "haircuts", title: "Simple Cut", description: "Layered cut with even ends" },
    { src: "/assets/works/work6.jpg", category: "coloring", title: "Vibrant Red", description: "Bold and vibrant red color transformation" },
    { src: "/assets/works/work7.jpg", category: "styling", title: "Simple Cut with Highlights", description: "Elegant cut with highlights" }
  ];

  // Scroll to top of the page smoothly.
  const scrollTop = () => {
    if (topRef && topRef.current)
      topRef.current.scrollIntoView({ behavior: "smooth" });
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
    <motion.div id="container" className="min-w-screen min-h-screen overflow-hidden bg-rose-50 text-gray-800"
      ref={topRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}>
      {/* Header with salon info */}
      <Header />

      {/* Hero banner */}
      <Hero />

      <BAAdvert />

      {/* Style category filter */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold text-center mb-1">My Latest Work</h3>

        {/* Gallery grid with larger images */}
        <RollingGallery autoplay={true} pauseOnHover={true} images={works.map(work => work.src)} openImage={openImage} />
        <h2 className="flex items-center justify-center font-bold p-1 m-1">Click on a work above to view</h2>
      </div>

      {/* Fullscreen image viewer modal */}
      {selectedImage && (
        <FullscreenModal closeImage={closeImage} selectedImage={selectedImage} />
      )}

      {/* Footer */}
      <Footer scrollTop={scrollTop} />

    </motion.div>
  );
}