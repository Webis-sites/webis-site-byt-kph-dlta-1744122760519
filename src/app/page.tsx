'use client';

import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import MenuHighlights from '../components/MenuHighlights';
import AtmosphereGallery from '../components/AtmosphereGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import SpecialEvents from '../components/SpecialEvents';
import LocationSection from '../components/LocationSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <Layout />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <MenuHighlights />
    <AtmosphereGallery />
    <TestimonialsSection />
    <SpecialEvents />
    <LocationSection />
    <ContactForm />
    <Footer />
  </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 בית קפה דלתא. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}