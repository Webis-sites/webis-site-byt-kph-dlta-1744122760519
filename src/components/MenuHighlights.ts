'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'food';
}

const MenuHighlights: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'אספרסו כפול',
      description: 'שתי מנות אספרסו עשירות עם קרמה מושלמת',
      price: 12,
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04',
      category: 'coffee',
    },
    {
      id: '2',
      name: 'לאטה ארומטי',
      description: 'אספרסו עם חלב מוקצף וטעמים עדינים של וניל',
      price: 16,
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f',
      category: 'coffee',
    },
    {
      id: '3',
      name: 'קפוצ׳ינו קלאסי',
      description: 'אספרסו עם חלב מוקצף בשכבות מושלמות',
      price: 14,
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213',
      category: 'coffee',
    },
    {
      id: '4',
      name: 'קרואסון שקדים',
      description: 'קרואסון חמאה עם מילוי שקדים ושבבי שקדים מעל',
      price: 18,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
      category: 'food',
    },
    {
      id: '5',
      name: 'סלט ים תיכוני',
      description: 'ירקות טריים, גבינת פטה, זיתים ושמן זית כתית מעולה',
      price: 32,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
      category: 'food',
    },
    {
      id: '6',
      name: 'פנקייק פירות יער',
      description: 'פנקייק רך עם פירות יער טריים וסירופ מייפל',
      price: 28,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      category: 'food',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 w-full overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            התפריט המובחר שלנו
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            טעמו ממבחר המנות והמשקאות האיכותיים של בית קפה דלתא
          </motion.p>
        </div>

        <div className="mb-10 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neumorphic-button px-6 py-2 rounded-full font-medium text-gray-700"
          >
            הכל
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neumorphic-button px-6 py-2 rounded-full font-medium text-gray-700"
          >
            קפה
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neumorphic-button px-6 py-2 rounded-full font-medium text-gray-700"
          >
            אוכל
          </motion.button>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((menuItem) => (
            <motion.div
              key={menuItem.id}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glassmorphism-card rounded-2xl overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={`${menuItem.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={menuItem.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={clsx(
                  "absolute top-3 left-3 px-3 py-1 rounded-full text-white text-sm font-medium",
                  menuItem.category === 'coffee' ? 'bg-primary/80' : 'bg-secondary/80'
                )}>
                  {menuItem.category === 'coffee' ? 'קפה' : 'אוכל'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{menuItem.name}</h3>
                  <span className="glassmorphism-price px-3 py-1 rounded-lg text-primary font-bold">
                    ₪{menuItem.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{menuItem.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                >
                  הוסף להזמנה
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHighlights;