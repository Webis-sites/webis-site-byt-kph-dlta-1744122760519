'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const AtmosphereGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Sample gallery images from Unsplash featuring café atmosphere
  const galleryImages: GalleryImage[] = [
    {
      id: 'img1',
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'אווירה חמימה בבית קפה דלתא עם תאורה רכה',
    },
    {
      id: 'img2',
      src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'פינת ישיבה נעימה עם ספות ושולחנות עץ',
    },
    {
      id: 'img3',
      src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'בר קפה מעוצב עם כלים מודרניים',
    },
    {
      id: 'img4',
      src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'פינת קריאה שקטה עם ספרים וצמחייה',
    },
    {
      id: 'img5',
      src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'שולחנות חוץ עם נוף לרחוב',
    },
    {
      id: 'img6',
      src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'עיצוב פנים מינימליסטי עם אלמנטים טבעיים',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="atmosphere-gallery py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50/90 to-gray-100/90 backdrop-blur-md rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 neumorphic-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            האווירה שלנו
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto glass-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            חווית קפה ייחודית בסביבה מעוצבת ומזמינה
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className={clsx(
                "relative overflow-hidden rounded-2xl group cursor-pointer",
                "neumorphic-card glass-card transition-all duration-300",
                "hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              )}
              variants={itemVariants}
              onMouseEnter={() => setActiveImage(image.id)}
              onMouseLeave={() => setActiveImage(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className={clsx(
                  "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                )}>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className={clsx(
                  "absolute inset-0 bg-primary/10 backdrop-blur-sm",
                  "opacity-0 transition-opacity duration-300",
                  activeImage === image.id ? "opacity-20" : "opacity-0"
                )}
                initial={false}
                animate={{ opacity: activeImage === image.id ? 0.2 : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button className="neumorphic-button glass-button px-8 py-3 rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg">
            בקרו אותנו
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .neumorphic-card {
          background: var(--card-bg);
          box-shadow: var(--neumorphic-shadow);
          border-radius: var(--border-radius);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .neumorphic-button {
          box-shadow: var(--neumorphic-button-shadow);
          transition: all 0.3s ease;
        }

        .neumorphic-button:hover {
          box-shadow: var(--neumorphic-button-shadow-hover);
        }

        .glass-button {
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .neumorphic-text {
          text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5), 
                      -1px -1px 1px rgba(0, 0, 0, 0.1);
        }

        .glass-text {
          background: linear-gradient(135deg, rgba(78, 205, 196, 0.8), rgba(78, 205, 196, 0.4));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default AtmosphereGallery;