import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserStats } from '@/types/user';

interface UserStore {
  stats: UserStats;
  updateScore: (score: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      stats: {
        postureScore: 85,
        streakDays: 15,
        lastCheckDate: null,
        totalChecks: 0,
      },
      updateScore: (score) =>
        set((state) => ({
          stats: { ...state.stats, postureScore: score },
        })),
      incrementStreak: () =>
        set((state) => ({
          stats: { ...state.stats, streakDays: state.stats.streakDays + 1 },
        })),
      resetStreak: () =>
        set((state) => ({
          stats: { ...state.stats, streakDays: 0 },
        })),
    }),
    {
      name: 'user-storage',
    }
  )
);
