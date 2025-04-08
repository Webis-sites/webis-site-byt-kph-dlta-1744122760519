'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import clsx from 'clsx';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onBlur'
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const inputClasses = "w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-4 py-3 outline-none transition-all duration-300 text-right placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 rtl";
  
  const labelClasses = "block text-right mb-2 font-medium text-gray-700";
  
  const errorClasses = "text-red-500 text-sm mt-1 text-right";
  
  const neumorphicButtonClasses = "neumorphic-button w-full py-3 px-6 rounded-xl font-medium text-white bg-primary transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70 disabled:cursor-not-allowed rtl";

  return (
    <div className="glass-container w-full max-w-xl mx-auto p-8 rounded-2xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-glass">
      <h2 className="text-2xl font-bold mb-6 text-right text-gray-800">צור קשר - בית קפה דלתא</h2>
      
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="success-message p-4 rounded-xl bg-green-50/80 backdrop-blur-sm border border-green-200 text-green-700 text-center my-8"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium">תודה רבה!</h3>
              <p>פנייתך התקבלה בהצלחה. ניצור איתך קשר בהקדם.</p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            dir="rtl"
          >
            <div className="form-group">
              <label htmlFor="name" className={labelClasses}>שם מלא</label>
              <div className="relative">
                <motion.div
                  whileFocus={{ scale: 1.05 }}
                  className="relative"
                >
                  <input
                    id="name"
                    type="text"
                    placeholder="הכנס את שמך המלא"
                    className={clsx(inputClasses, errors.name && "border-red-500 focus:ring-red-500 focus:border-red-500")}
                    {...register("name", { 
                      required: "נא להזין שם מלא",
                      minLength: { value: 2, message: "שם חייב להכיל לפחות 2 תווים" }
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </motion.div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={errorClasses}
                    role="alert"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone" className={labelClasses}>טלפון</label>
              <div className="relative">
                <motion.div
                  whileFocus={{ scale: 1.05 }}
                  className="relative"
                >
                  <input
                    id="phone"
                    type="tel"
                    placeholder="הכנס את מספר הטלפון שלך"
                    className={clsx(inputClasses, errors.phone && "border-red-500 focus:ring-red-500 focus:border-red-500")}
                    {...register("phone", { 
                      required: "נא להזין מספר טלפון",
                      pattern: { 
                        value: /^[0-9\-\+\(\)]*$/,
                        message: "נא להזין מספר טלפון תקין" 
                      }
                    })}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </motion.div>
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={errorClasses}
                    role="alert"
                  >
                    {errors.phone.message}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className={labelClasses}>דוא"ל</label>
              <div className="relative">
                <motion.div
                  whileFocus={{ scale: 1.05 }}
                  className="relative"
                >
                  <input
                    id="email"
                    type="email"
                    placeholder="הכנס את כתובת הדוא״ל שלך"
                    className={clsx(inputClasses, errors.email && "border-red-500 focus:ring-red-500 focus:border-red-500")}
                    {...register("email", { 
                      required: "נא להזין כתובת דוא״ל",
                      pattern: { 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "נא להזין כתובת דוא״ל תקינה" 
                      }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </motion.div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={errorClasses}
                    role="alert"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className={labelClasses}>הודעה</label>
              <div className="relative">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="כתוב את הודעתך כאן..."
                    className={clsx(inputClasses, errors.message && "border-red-500 focus:ring-red-500 focus:border-red-500")}
                    {...register("message", { 
                      required: "נא להזין הודעה",
                      minLength: { value: 10, message: "ההודעה חייבת להכיל לפחות 10 תווים" }
                    })}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  <FiMessageSquare className="absolute left-3 top-6 text-gray-500" />
                </motion.div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={errorClasses}
                    role="alert"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={neumorphicButtonClasses}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  שולח...
                </>
              ) : (
                <>
                  <FiSend className="ml-2" />
                  שלח הודעה
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;