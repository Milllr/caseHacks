export interface Stock {
  id: string;
  name: string;
  ticker: string;
  price: number;
  changePercent: number;
  sector: string;
  logo: string;
  logoColor: string;
  shortDescription: string;
  fullDescription: string;
  whyTrending: string;
  beginnerExplanation: string;
  analystSentiment: 'Bullish' | 'Neutral' | 'Bearish';
  marketCap: string;
  aiSummary: string;
  chartData: number[];
}

export const MOCK_STOCKS: Stock[] = [
  {
    id: 'aapl',
    name: 'Apple',
    ticker: 'AAPL',
    price: 198.42,
    changePercent: 1.24,
    sector: 'Technology',
    logo: '',
    logoColor: '#555555',
    shortDescription: 'The iPhone company everyone knows. Steady growth, huge cash pile.',
    fullDescription:
      'Apple designs consumer electronics, software, and services including iPhone, Mac, and the App Store. It is one of the largest companies in the world with a loyal customer base.',
    whyTrending: 'New AI features announced for iPhone are driving buzz among young users.',
    beginnerExplanation:
      'Think of Apple like owning a tiny piece of the company that makes your phone. When Apple does well, your share can go up in value.',
    analystSentiment: 'Bullish',
    marketCap: '$3.1T',
    aiSummary:
      'Strong brand loyalty and recurring services revenue make Apple a popular starter stock. Volatility is lower than pure tech plays.',
    chartData: [182, 185, 183, 190, 188, 192, 195, 193, 198, 197, 199, 198],
  },
  {
    id: 'tsla',
    name: 'Tesla',
    ticker: 'TSLA',
    price: 248.91,
    changePercent: -2.18,
    sector: 'Automotive',
    logo: '',
    logoColor: '#CC0000',
    shortDescription: 'Electric cars and clean energy. High hype, bigger price swings.',
    fullDescription:
      'Tesla builds electric vehicles, battery storage, and solar products. Led by Elon Musk, it is known for innovation and volatile stock moves.',
    whyTrending: 'Delivery numbers and EV competition headlines are all over social feeds.',
    beginnerExplanation:
      'Tesla stock can move fast. It is exciting but riskier than slower, steadier companies.',
    analystSentiment: 'Neutral',
    marketCap: '$790B',
    aiSummary:
      'High growth potential with higher risk. Good for users who want action and can handle ups and downs.',
    chartData: [265, 258, 262, 255, 250, 248, 252, 245, 250, 247, 249, 249],
  },
  {
    id: 'nvda',
    name: 'Nvidia',
    ticker: 'NVDA',
    price: 892.15,
    changePercent: 3.42,
    sector: 'Semiconductors',
    logo: '',
    logoColor: '#76B900',
    shortDescription: 'The AI chip leader. Powers ChatGPT and the AI boom.',
    fullDescription:
      'Nvidia makes graphics processing units (GPUs) used in gaming, data centers, and artificial intelligence. It is a centerpiece of the AI revolution.',
    whyTrending: 'AI demand keeps smashing expectations. Every tech headline mentions Nvidia.',
    beginnerExplanation:
      'Nvidia sells the "brains" behind AI. When AI grows, Nvidia often benefits.',
    analystSentiment: 'Bullish',
    marketCap: '$2.2T',
    aiSummary:
      'The hottest name in AI investing. Price per share is high, so fractional investing helps beginners start small.',
    chartData: [820, 835, 850, 845, 860, 875, 868, 880, 885, 890, 888, 892],
  },
  {
    id: 'amzn',
    name: 'Amazon',
    ticker: 'AMZN',
    price: 186.73,
    changePercent: 0.87,
    sector: 'E-Commerce',
    logo: '',
    logoColor: '#FF9900',
    shortDescription: 'Online shopping giant plus cloud computing powerhouse.',
    fullDescription:
      'Amazon operates the world\'s largest e-commerce platform and Amazon Web Services (AWS), a leading cloud provider.',
    whyTrending: 'Prime Day prep and AWS growth stories are trending on finance TikTok.',
    beginnerExplanation:
      'You probably already use Amazon. Investing means you own a slice of that business.',
    analystSentiment: 'Bullish',
    marketCap: '$1.9T',
    aiSummary:
      'Diversified revenue from retail and cloud. A balanced pick for beginners who want a familiar brand.',
    chartData: [175, 178, 180, 179, 182, 184, 183, 185, 186, 185, 187, 187],
  },
  {
    id: 'msft',
    name: 'Microsoft',
    ticker: 'MSFT',
    price: 415.28,
    changePercent: 1.05,
    sector: 'Technology',
    logo: '',
    logoColor: '#00A4EF',
    shortDescription: 'Windows, Xbox, and Copilot AI. Steady tech blue chip.',
    fullDescription:
      'Microsoft builds software (Windows, Office), cloud services (Azure), gaming (Xbox), and AI tools integrated across its products.',
    whyTrending: 'Copilot AI adoption in schools and workplaces is a hot topic.',
    beginnerExplanation:
      'Microsoft is like the reliable overachiever of tech stocks. Less wild than meme stocks.',
    analystSentiment: 'Bullish',
    marketCap: '$3.1T',
    aiSummary:
      'Strong dividend history and cloud growth. Often recommended as a first "serious" stock.',
    chartData: [398, 402, 405, 408, 406, 410, 412, 409, 413, 414, 416, 415],
  },
  {
    id: 'meta',
    name: 'Meta',
    ticker: 'META',
    price: 512.44,
    changePercent: 2.31,
    sector: 'Social Media',
    logo: '',
    logoColor: '#0668E1',
    shortDescription: 'Instagram and Facebook parent. Betting big on the metaverse and AI.',
    fullDescription:
      'Meta Platforms owns Facebook, Instagram, WhatsApp, and Reality Labs. Advertising drives most revenue.',
    whyTrending: 'Reels monetization and AI ad tools are crushing earnings expectations.',
    beginnerExplanation:
      'If you scroll Instagram daily, you already "know" this company. Stock lets you invest in that attention economy.',
    analystSentiment: 'Bullish',
    marketCap: '$1.3T',
    aiSummary:
      'High engagement with Gen Z via Instagram. Ad business recovers strongly when economy improves.',
    chartData: [480, 490, 495, 500, 498, 505, 508, 510, 512, 511, 513, 512],
  },
  {
    id: 'nflx',
    name: 'Netflix',
    ticker: 'NFLX',
    price: 628.17,
    changePercent: -0.54,
    sector: 'Entertainment',
    logo: '',
    logoColor: '#E50914',
    shortDescription: 'Streaming TV and movies. Password crackdown boosted subscribers.',
    fullDescription:
      'Netflix is the leading subscription streaming service with global original content and a growing ad-supported tier.',
    whyTrending: 'Hit shows and live sports experiments are driving subscriber growth chatter.',
    beginnerExplanation:
      'Netflix makes money when people pay monthly to watch shows. More subscribers often means a happier stock.',
    analystSentiment: 'Neutral',
    marketCap: '$270B',
    aiSummary:
      'Competition from Disney+ and others keeps pressure on, but Netflix remains the streaming leader.',
    chartData: [610, 615, 620, 618, 625, 630, 628, 632, 629, 627, 630, 628],
  },
  {
    id: 'spot',
    name: 'Spotify',
    ticker: 'SPOT',
    price: 312.85,
    changePercent: 1.78,
    sector: 'Music Streaming',
    logo: '',
    logoColor: '#1DB954',
    shortDescription: 'Music streaming app you already have on your phone.',
    fullDescription:
      'Spotify provides music and podcast streaming to hundreds of millions of users worldwide, with ad-supported and premium tiers.',
    whyTrending: 'Podcast exclusives and price increases are boosting revenue per user.',
    beginnerExplanation:
      'Spotify turns your monthly subscription into company revenue. You use the product, which makes research fun.',
    analystSentiment: 'Bullish',
    marketCap: '$62B',
    aiSummary:
      'Gen Z favorite with strong brand love. Profitability improving, making it more interesting for long-term holders.',
    chartData: [290, 295, 298, 300, 305, 308, 310, 308, 312, 311, 314, 313],
  },
];

export const ONBOARDING_SLIDES = [
  {
    id: '1',
    title: 'Discover stocks',
    subtitle: 'Explore companies you already know and love, explained in plain English.',
    icon: 'compass' as const,
  },
  {
    id: '2',
    title: 'Swipe to explore',
    subtitle: 'Right if you are curious. Left to pass. No pressure, no jargon.',
    icon: 'swap-horizontal' as const,
  },
  {
    id: '3',
    title: 'Build confidence',
    subtitle: 'Watchlist, mock invest, and learn at your pace before real money.',
    icon: 'trending-up' as const,
  },
];
