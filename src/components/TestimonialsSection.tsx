'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatar?: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'דניאל לוי',
    text: 'בית קפה דלתא הוא המקום האהוב עליי לעבוד מרחוק. הקפה מעולה, האווירה נעימה והצוות תמיד מסביר פנים. ממליץ בחום!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    role: 'מפתח תוכנה'
  },
  {
    id: 2,
    name: 'מיכל כהן',
    text: 'המאפים הטריים והקפה האיכותי הפכו את בית קפה דלתא לחלק קבוע מהשגרה שלי. המקום מעוצב בטוב טעם והשירות יוצא מן הכלל.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    role: 'מעצבת גרפית'
  },
  {
    id: 3,
    name: 'יוסי אברהם',
    text: 'האווירה הנינוחה והמוזיקה השקטה ברקע הופכים את בית קפה דלתא למקום מושלם לפגישות עסקיות. התפריט מגוון והמנות טעימות ומוגשות בצורה מרשימה.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    role: 'יזם'
  },
  {
    id: 4,
    name: 'רונית שרון',
    text: 'גיליתי את בית קפה דלתא לפני כחודש והפכתי ללקוחה קבועה. הקפה הטוב ביותר באזור והצוות זוכר את ההעדפות שלי. מומלץ לנסות את עוגת השוקולד!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    role: 'מורה'
  },
  {
    id: 5,
    name: 'אבי גולן',
    text: 'בית קפה דלתא הוא פנינה אמיתית. האוכל טרי ואיכותי, המחירים הוגנים והאווירה מזמינה. מקום מושלם לבלות בו שעות ארוכות עם חברים או לבד עם ספר טוב.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    role: 'רואה חשבון'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            מה הלקוחות שלנו אומרים
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            הצטרפו למאות הלקוחות המרוצים שלנו שנהנים מהקפה האיכותי, האוכל הטעים והאווירה הנעימה בבית קפה דלתא
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="testimonial-container relative h-[400px] md:h-[350px] w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="testimonial-card backdrop-blur-md bg-white/40 dark:bg-gray-800/40 rounded-2xl p-8 md:p-10 mx-4 md:mx-auto max-w-3xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-white/20 dark:border-gray-700/30">
                  <div className="flex flex-col items-center">
                    <div className="mb-6 relative">
                      {testimonials[currentIndex].avatar ? (
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                            <img 
                              src={testimonials[currentIndex].avatar} 
                              alt={testimonials[currentIndex].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg">
                            <FaQuoteRight className="text-sm" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
                        "{testimonials[currentIndex].text}"
                      </p>
                      <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      {testimonials[currentIndex].role && (
                        <p className="text-primary text-sm">
                          {testimonials[currentIndex].role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="testimonial-btn flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(30,30,30,0.2)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] dark:hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(30,30,30,0.2)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="הקודם"
            >
              <FaChevronRight className="text-lg" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`עבור לחוות דעת ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="testimonial-btn flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)] dark:shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(30,30,30,0.2)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] dark:hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(30,30,30,0.2)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="הבא"
            >
              <FaChevronLeft className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;