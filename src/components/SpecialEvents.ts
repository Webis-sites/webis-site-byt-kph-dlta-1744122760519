'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

const SpecialEvents: React.FC = () => {
  // Sample events data
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "ערב מוזיקה חיה",
      date: new Date(2023, 6, 15),
      time: "20:00",
      location: "קומה ראשונה",
      description: "הצטרפו אלינו לערב מוזיקלי מיוחד עם הופעה חיה של להקת הג'אז המקומית. אווירה נעימה, קפה משובח ומוזיקה מעולה.",
      imageUrl: "/images/live-music-event.jpg"
    },
    {
      id: 2,
      title: "טעימות קפה מיוחדות",
      date: new Date(2023, 6, 22),
      time: "16:00",
      location: "חלל מרכזי",
      description: "בואו לטעום את מבחר הקפה החדש שלנו מברזיל ואתיופיה. הברמנים המומחים שלנו יספרו על תהליך הקלייה והכנת הקפה המושלם.",
      imageUrl: "/images/coffee-tasting.jpg"
    },
    {
      id: 3,
      title: "מבצע קיץ מיוחד",
      date: new Date(2023, 7, 1),
      time: "כל היום",
      location: "בכל הסניף",
      description: "לרגל הקיץ, אנו מציעים 1+1 על כל משקאות הקפה הקרים שלנו. הזדמנות מצוינת להתרענן ולהנות מהקפה האיכותי שלנו.",
      imageUrl: "/images/summer-promotion.jpg"
    }
  ]);

  return (
    <section className="special-events-container py-16 px-4 md:px-8 lg:px-16 text-right" dir="rtl">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-center relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">אירועים מיוחדים</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-primary rounded-full"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="event-card relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="glassmorphic-card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image 
                    src={event.imageUrl} 
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-sm font-medium">
                    {format(event.date, 'dd MMMM yyyy', { locale: he })}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  
                  <div className="flex items-center mb-2 text-sm">
                    <FaClock className="ml-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-sm">
                    <FaMapMarkerAlt className="ml-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
                  
                  <motion.button
                    className="neumorphic-button w-full py-3 px-4 rounded-xl font-medium text-center transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    הרשמה לאירוע
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="neumorphic-button-secondary py-3 px-8 rounded-xl font-medium">
            לכל האירועים
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialEvents;