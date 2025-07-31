'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScoreCircle } from '@/components/home/ScoreCircle';
import { StreakDisplay } from '@/components/home/StreakDisplay';
import { useUserStore } from '@/store/userStore';

export default function HomePage() {
  const { stats } = useUserStore();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <motion.div
        className="w-full max-w-md flex flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* スコアサークル */}
        <ScoreCircle score={stats.postureScore} />
        
        {/* 継続日数 */}
        <StreakDisplay days={stats.streakDays} />
        
        {/* CTAボタン */}
        <motion.div
          className="w-full px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/analyze"
            className="block w-full bg-slate-700 text-white text-center py-4 rounded-2xl font-medium text-lg hover:bg-slate-800 transition-colors"
          >
            今日の30秒チェックを始めよう！
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
