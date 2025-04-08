'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaUtensils, FaBirthdayCake, FaGlassCheers } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="neumorphic-card glassmorphism-card relative overflow-hidden rounded-2xl p-6 backdrop-blur-md bg-white/20 border border-white/30 shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 flex flex-col items-center text-center rtl"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="icon-container mb-4 p-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 backdrop-blur-sm border border-white/30">
        <motion.div
          className="text-primary text-3xl"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaCoffee />,
      title: "קפה מיוחד",
      description: "מבחר רחב של קפה איכותי מרחבי העולם, נטחן ומוכן במקום על ידי בריסטות מקצועיים."
    },
    {
      icon: <FaUtensils />,
      title: "ארוחות בוקר",
      description: "ארוחות בוקר טריות ומזינות המוגשות כל היום, עם מרכיבים מקומיים ואיכותיים."
    },
    {
      icon: <FaBirthdayCake />,
      title: "מאפים ביתיים",
      description: "מאפים מתוקים ומלוחים הנאפים מדי יום במקום, בשיטות מסורתיות ומתכונים ייחודיים."
    },
    {
      icon: <FaGlassCheers />,
      title: "אירועים מיוחדים",
      description: "אירוח אירועים פרטיים, ערבי תרבות, והופעות מוזיקה חיה באווירה ייחודית."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" dir="rtl">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            בבית קפה דלתא אנו מציעים מגוון שירותים איכותיים בסביבה נעימה ומזמינה, המשלבת טעמים מקוריים וחוויה ייחודית.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;