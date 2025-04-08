'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={ref} 
      dir="rtl" 
      className="py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div className="order-2 md:order-1">
            <motion.div 
              variants={itemVariants}
              className="neumorphic-card glassmorphism-card p-8 md:p-10 rounded-2xl relative"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 relative"
              >
                <span className="relative z-10">
                  אודות בית קפה דלתא
                  <span className="absolute -bottom-2 right-0 h-3 w-24 bg-primary opacity-30 rounded-full"></span>
                </span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg leading-relaxed mb-6 text-gray-700"
              >
                בית קפה דלתא הוא מקום מפגש ייחודי שנוסד לפני למעלה מעשור, המשלב את האהבה לקפה איכותי עם אווירה חמה ומזמינה.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg leading-relaxed mb-6 text-gray-700"
              >
                הצוות המקצועי שלנו מחויב למצוינות בכל כוס קפה, תוך שימוש בפולים הטובים ביותר שנבחרו בקפידה ממגדלים ברחבי העולם.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg leading-relaxed mb-8 text-gray-700"
              >
                אנו גאים להציע חוויית קפה אותנטית בסביבה מודרנית ונעימה, יחד עם מבחר מאפים טריים ומנות קלות שמוכנות במקום מדי יום.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex justify-end"
              >
                <button className="neumorphic-button glassmorphism-button px-8 py-3 rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1">
                  קרא עוד
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            variants={containerVariants}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div 
              variants={imageVariants}
              className="relative h-[400px] w-full max-w-[500px] rounded-2xl overflow-hidden neumorphic-image glassmorphism-image"
            >
              <Image
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="בית קפה דלתא - אווירה חמימה"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              <motion.div 
                variants={itemVariants}
                className="absolute bottom-6 left-6 right-6 p-4 glassmorphism-stats rounded-xl backdrop-blur-md bg-white/20 border border-white/30"
              >
                <div className="flex justify-around text-white">
                  <div className="text-center">
                    <p className="text-3xl font-bold">10+</p>
                    <p className="text-sm">שנות ניסיון</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">1000+</p>
                    <p className="text-sm">לקוחות מרוצים</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">30+</p>
                    <p className="text-sm">סוגי קפה</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Features Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              title: "קפה איכותי",
              description: "אנו בוחרים את פולי הקפה הטובים ביותר ומקפידים על תהליך קלייה מדויק",
              image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "אווירה ייחודית",
              description: "עיצוב מודרני ונעים המשלב אלמנטים מסורתיים ליצירת חוויה מיוחדת",
              image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "שירות מקצועי",
              description: "צוות מיומן ואדיב שישמח להמליץ ולהתאים את המשקה המושלם עבורך",
              image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="neumorphic-feature glassmorphism-feature rounded-2xl overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;