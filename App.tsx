import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { DASHBOARD_DATA } from './constants';
import { LivingBackground } from './components/LivingBackground';
import { DashboardHeader } from './components/DashboardHeader';
import { CriticalAlertBanner } from './components/CriticalAlertBanner';
import { CoreMetricCard } from './components/CoreMetricCard';
import { MatrixMetricCard } from './components/MatrixMetricCard';
import { ThemeProvider } from './ThemeContext';

const DashboardContent: React.FC = () => {
  // Split data
  const coreMetrics = useMemo(() => 
    DASHBOARD_DATA.metrics.filter(m => ['temp', 'humidity', 'co2'].includes(m.id)), 
  []);
  
  const matrixMetrics = useMemo(() => 
    DASHBOARD_DATA.metrics.filter(m => !['temp', 'humidity', 'co2'].includes(m.id)), 
  []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen text-slate-800 dark:text-slate-100 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <LivingBackground />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
        animate={{ scale: [1, 1.002, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} // Breathing effect
      >
        <DashboardHeader lastUpdated={DASHBOARD_DATA.lastUpdated} />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Row 1: Alert Banner (Spans Full) */}
          <CriticalAlertBanner />

          {/* Row 2: Core Metrics (Spans 1/3 or 1/4 depending on screen, actually let's make them prominent) */}
          <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-6">
             {coreMetrics.map(metric => (
               <CoreMetricCard key={metric.id} data={metric} />
             ))}
          </div>

          {/* Row 3: The Matrix */}
          <div className="col-span-full">
            <h3 className="text-sm font-bold text-emerald-800/50 dark:text-emerald-100/30 uppercase tracking-widest mb-4 ml-1">
                Detailed Telemetry
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {matrixMetrics.map(metric => (
                <MatrixMetricCard key={metric.id} data={metric} />
                ))}
            </div>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
};

export default App;