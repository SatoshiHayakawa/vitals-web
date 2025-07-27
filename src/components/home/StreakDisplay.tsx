'use client';

import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

interface StreakDisplayProps {
  days: number;
}

export function StreakDisplay({ days }: StreakDisplayProps) {
  return (
    <motion.div
      className="flex items-center gap-2 bg-orange-50 px-6 py-3 rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Flame className="w-6 h-6 text-orange-500" />
      <span className="text-lg font-medium text-gray-900">
        {days}日連続！
      </span>
    </motion.div>
  );
}
