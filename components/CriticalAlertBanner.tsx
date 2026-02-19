import React from 'react';
import { AlertTriangle, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

export const CriticalAlertBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
      className="col-span-full relative overflow-hidden rounded-3xl bg-rose-50/90 dark:bg-rose-900/20 border border-rose-200/60 dark:border-rose-800/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(225,29,72,0.05)] p-6 md:p-8"
      role="alert"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent pointer-events-none" />
      <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        
        <div className="flex gap-5">
          <div className="p-3.5 bg-rose-100 dark:bg-rose-900/50 rounded-2xl text-rose-600 dark:text-rose-400 shadow-inner">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-rose-900 dark:text-rose-100">Air Quality Alert: Hazardous Levels Detected</h3>
            <p className="text-rose-800/70 dark:text-rose-200/70 text-sm max-w-2xl">
              Elevated <span className="font-bold">PM2.5</span> and <span className="font-bold">Formaldehyde (CH2O)</span> levels pose a health risk. Automatic ventilation sequences have been initiated.
            </p>
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl shadow-[0_4px_14px_0_rgba(225,29,72,0.39)] transition-all"
        >
          <Wind className="w-4 h-4 group-hover:animate-pulse" />
          <span>Boost Filtration</span>
        </motion.button>
      </div>
    </motion.div>
  );
};