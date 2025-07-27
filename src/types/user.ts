export interface UserStats {
  postureScore: number;
  streakDays: number;
  lastCheckDate: Date | null;
  totalChecks: number;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  stats: UserStats;
  createdAt: Date;
}
