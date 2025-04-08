'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

interface OperatingHours {
  day: string;
  hours: string;
}

const LocationSection: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  const cafeInfo = {
    name: 'בית קפה דלתא',
    address: 'רחוב הרצל 123, תל אביב',
    phone: '03-1234567',
    email: 'info@deltacafe.co.il',
    operatingHours: [
      { day: 'ראשון - חמישי', hours: '07:00 - 22:00' },
      { day: 'שישי', hours: '07:00 - 16:00' },
      { day: 'שבת', hours: '09:00 - 22:00' }
    ] as OperatingHours[],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0285264067137!2d34.77996601524138!3d32.0731010810218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9c46c67b85%3A0x7bf8fa5c47b12ed8!2z16jXl9eV15Eg15TXqNeaINee16HXpNeoIDEyMywg16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1623766392937!5m2!1siw!2sil'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="location-section py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rtl" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            <span className="text-primary">המיקום</span> שלנו
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            בואו לבקר אותנו בבית קפה דלתא ותיהנו מהאווירה הייחודית והקפה המשובח שלנו
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="map-container h-[400px] md:h-[500px] relative overflow-hidden rounded-2xl neumorphic-map"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 glassmorphism-container rounded-2xl overflow-hidden">
              {isMapLoaded ? (
                <iframe 
                  src={cafeInfo.mapEmbedUrl}
                  className="w-full h-full border-0" 
                  allowFullScreen 
                  loading="lazy"
                  title="מפת מיקום בית קפה דלתא"
                  aria-label="מפת גוגל המציגה את מיקום בית קפה דלתא"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <div className="loading-spinner"></div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div 
            className="info-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="info-card neumorphic-card glassmorphism p-8 rounded-2xl mb-6"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="icon-container neumorphic-icon">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">הכתובת שלנו</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cafeInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="icon-container neumorphic-icon">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">טלפון</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a href={`tel:${cafeInfo.phone}`} className="hover:text-primary transition-colors">
                      {cafeInfo.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="icon-container neumorphic-icon">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">אימייל</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a href={`mailto:${cafeInfo.email}`} className="hover:text-primary transition-colors">
                      {cafeInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hours-card neumorphic-card glassmorphism p-8 rounded-2xl"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="icon-container neumorphic-icon">
                  <FaClock className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mr-4">שעות פעילות</h3>
              </div>
              
              <div className="space-y-4">
                {cafeInfo.operatingHours.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item.day}</span>
                    <span className="text-primary font-semibold">{item.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.button 
              className="mt-8 w-full py-4 neumorphic-button rounded-xl text-white font-bold text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              פתח במפות גוגל
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;