import React from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface DashboardHeaderProps {
  lastUpdated: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ lastUpdated }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="p-2.5 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-xl backdrop-blur-sm border border-emerald-200/30"
        >
          <Leaf className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </motion.div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">PRANAVAAYU</h1>
          <p className="text-xs text-emerald-700/70 dark:text-emerald-400/70 font-semibold tracking-widest uppercase">Garden Air Ecosystem V5</p>
        </div>
      </div>

      {/* Live Status Cluster */}
      <div className="flex items-center gap-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/40 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col items-end">
          <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-800/60 dark:text-emerald-200/60">Last Updated</span>
          <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100 font-mono">{lastUpdated}</span>
        </div>
        
        <div className="h-8 w-px bg-emerald-900/10 dark:bg-white/10 mx-1"></div>

        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-4 h-4">
            <motion.div 
              animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-rose-500" // Rose because overall status is BAD
            />
            <motion.div 
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              className="absolute inset-0 rounded-full bg-rose-500"
            />
            <div className="relative w-2.5 h-2.5 rounded-full bg-rose-600 shadow-[0_0_10px_rgba(225,29,72,0.5)]" />
          </div>
          <span className="text-xs font-bold text-rose-600 dark:text-rose-400 tracking-wide">LIVE FEED</span>
        </div>
      </div>
    </div>
  );
};