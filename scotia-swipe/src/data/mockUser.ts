export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export const MOCK_USER = {
  username: '@maya_invests',
  displayName: 'Maya Chen',
  investorLevel: 'Curious Explorer',
  levelProgress: 0.42,
  avatarInitials: 'MC',
  favoriteSectors: ['Technology', 'Entertainment'],
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_swipe',
    title: 'First Swipe',
    description: 'Swiped your first stock card',
    icon: 'hand-left',
    unlocked: true,
  },
  {
    id: 'watchlist_3',
    title: 'Watchlist Builder',
    description: 'Added 3 stocks to your watchlist',
    icon: 'eye',
    unlocked: false,
  },
  {
    id: 'mock_invest',
    title: 'Paper Trader',
    description: 'Made your first mock investment',
    icon: 'cash',
    unlocked: false,
  },
  {
    id: 'sector_explorer',
    title: 'Sector Explorer',
    description: 'Liked stocks from 3 different sectors',
    icon: 'grid',
    unlocked: false,
  },
];
