import { Project, TechStackItem, ExperienceItem, WritingArticle, BookItem, FavoriteItem, BucketListSection, TopTenCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Dhanraj',
  nickName: 'haku',
  title: 'just trying to build things I’d want to use',
  role: 'Electronics student & curious builder',
  location: '',
  initialViews: 0,
  avatar: 'https://avatars.githubusercontent.com/u/188799669?v=4',
  banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
  about: [
    {
      text: 'Curious engineering student who builds slowly and learns deeply. I turn random ideas into projects and obsess over the details that make technology feel right.',
      highlight: 'Curious engineering student'
    },
    {
      text: 'I’ve worked on hardware experiments, web projects, basic programming, and the fundamentals I’m still strengthening. Mostly with Python, C++, 8085, 8051, electronics, or whatever helps me understand how things work.',
      highlight: 'hardware experiments, web projects'
    },
    {
      text: 'Integrated M.Tech student in IoT. Learning through projects, mistakes, and more backlogs than I’d like to admit. When I’m not building, I’m usually gaming, listening to rock music, staring at whiteboards, or disappearing into topics most people never think about.',
      highlight: 'Integrated M.Tech student in IoT'
    }
  ],
  quote: {
    text: 'just trying to build things I’d want to use',
    author: 'haku'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Timmo',
    subtitle: 'Productivity and time tracking',
    description: 'A productivity and time tracking app with analytics and a leaderboard system.',
    badge: {
      text: 'Focus',
      type: 'users'
    },
    gradient: 'bg-gradient-to-br from-white via-lime-400 to-slate-950',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    tags: ['Productivity', 'Analytics', 'Leaderboard'],
    liveUrl: '[GITHUB_URL]',
    githubUrl: '[GITHUB_URL]',
    isLive: true,
    featured: true
  },
  {
    id: 'project-2',
    title: 'Retro Photo Card',
    subtitle: 'Vintage-style sharing cards',
    description: 'A small web app that creates vintage style photo cards with customizable themes, fonts, dates, and captions.',
    badge: {
      text: 'REC',
      type: 'camera'
    },
    gradient: 'bg-gradient-to-br from-white via-rose-400 to-slate-950',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80',
    tags: ['Web', 'Design', 'Themes'],
    liveUrl: '[GITHUB_URL]',
    githubUrl: '[GITHUB_URL]',
    isLive: true,
    featured: true
  },
  {
    id: 'project-3',
    title: 'JSON Card Generator',
    subtitle: 'Developer-style card maker',
    description: 'A tool that turns basic personal details into a clean developer style card for sharing online.',
    badge: {
      text: 'JSON',
      type: 'json'
    },
    gradient: 'bg-gradient-to-br from-white via-orange-400 to-slate-950',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    tags: ['Tool', 'JSON', 'Card'],
    liveUrl: '[GITHUB_URL]',
    githubUrl: '[GITHUB_URL]',
    isLive: true,
    featured: true
  },
  {
    id: 'project-4',
    title: 'This Website',
    subtitle: 'A place for projects and obsessions',
    description: 'The place where I keep projects, writing, and whatever I’m obsessed with right now.',
    badge: {
      text: 'Design',
      type: 'design'
    },
    gradient: 'bg-gradient-to-br from-white via-sky-400 to-slate-950',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    tags: ['React', 'Vite', 'Portfolio'],
    liveUrl: '[GITHUB_URL]',
    githubUrl: '[GITHUB_URL]',
    isLive: true,
    featured: true
  }
];

export const TECH_STACK: TechStackItem[] = [
  { name: 'JavaScript', category: 'Frontend', icon: 'js', color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', category: 'Frontend', icon: 'ts', color: '#3178C6', url: 'https://www.typescriptlang.org' },
  { name: 'React', category: 'Frontend', icon: 'react', color: '#61DAFB', url: 'https://react.dev' },
  { name: 'Next.js', category: 'Frontend', icon: 'next', color: '#ffffff', url: 'https://nextjs.org' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind', color: '#38BDF8', url: 'https://tailwindcss.com' },
  { name: 'Framer Motion', category: 'Frontend', icon: 'motion', color: '#F024B6', url: 'https://motion.dev' },
  { name: 'Node.js', category: 'Backend', icon: 'node', color: '#339933', url: 'https://nodejs.org' },
  { name: 'Express.js', category: 'Backend', icon: 'express', color: '#ffffff', url: 'https://expressjs.com' },
  { name: 'MongoDB', category: 'Backend', icon: 'mongo', color: '#47A248', url: 'https://www.mongodb.com' },
  { name: 'Git', category: 'Tools', icon: 'git', color: '#F05032', url: 'https://git-scm.com' },
  { name: 'GitHub', category: 'Tools', icon: 'github', color: '#ffffff', url: 'https://github.com' },
  { name: 'Figma', category: 'Design', icon: 'figma', color: '#F24E1E', url: 'https://figma.com' }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2024 – Present',
    role: 'Student',
    company: 'Electronics',
    description: 'Studying electronics while building projects where hardware, software, and curiosity overlap.',
    skills: ['Electronics', 'Embedded Systems', 'AI', 'Hardware']
  },
  {
    period: '2022 – 2024',
    role: 'Independent Builder',
    company: 'Side Projects',
    description: 'Built small web apps, utilities, and experiments focused on useful ideas, playful interfaces, and learning by shipping.',
    skills: ['Web', 'React', 'TypeScript', 'Product Thinking']
  }
];

export const WRITINGS: WritingArticle[] = [
  {
    id: 'writing-1',
    title: 'i keep starting over',
    date: 'Aug 2026',
    readTime: '3 min read',
    excerpt: 'Thoughts on resetting, starting over, and finding momentum when building.',
    tags: ['Personal', 'Reflections'],
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&auto=format&fit=crop&q=80',
    url: 'https://dhanraz.bearblog.dev/i-keep-starting-over/'
  },
  {
    id: 'writing-2',
    title: 'the version of me that exists online',
    date: 'Aug 2026',
    readTime: '4 min read',
    excerpt: 'Reflections on digital identity, online persona, and who we are on the internet.',
    tags: ['Internet', 'Identity'],
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80',
    url: 'https://dhanraz.bearblog.dev/the-version-of-me-that-exists-online/'
  },
  {
    id: 'writing-3',
    title: 'Building Confidence',
    date: 'Aug 2026',
    readTime: '2 min read',
    excerpt: 'First post, initial thoughts, and opening a window into building in public.',
    tags: ['Writing', 'Notes'],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80',
    url: 'https://dhanraz.bearblog.dev/post01'
  },
  {
    id: 'writing-4',
    title: 'the person i never really knew',
    date: 'Aug 2026',
    readTime: '4 min read',
    excerpt: 'A reflective piece on memory, understanding people over time, and unspoken connections.',
    tags: ['Life', 'Reflections'],
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=300&auto=format&fit=crop&q=80',
    url: 'https://dhanraz.bearblog.dev/the-person-i-never-really-knew/'
  }
];

export const BOOKS: BookItem[] = [
  {
    id: 'book-1',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511288482i/11084145.jpg',
    status: 'Completed',
    rating: '5/5',
    notes: 'A definitive biography detailing relentless focus, product perfectionism, and intersection of technology and liberal arts.',
    searchUrl: 'https://www.google.com/search?q=Steve+Jobs+by+Walter+Isaacson'
  },
  {
    id: 'book-2',
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781544514215-M.jpg',
    status: 'Completed',
    rating: '5/5',
    notes: 'Invaluable guide to wealth creation, judgment, leverage, and personal freedom.',
    searchUrl: 'https://www.google.com/search?q=The+Almanack+of+Naval+Ravikant'
  },
  {
    id: 'book-3',
    title: 'The Stranger',
    author: 'Albert Camus',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780679720201-M.jpg',
    status: 'Completed',
    rating: '5/5',
    notes: 'A profound philosophical exploration of absurdism, existence, and human consciousness.',
    searchUrl: 'https://www.google.com/search?q=The+Stranger+Albert+Camus'
  },
  {
    id: 'book-4',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg',
    status: 'Completed',
    rating: '5/5',
    notes: 'Tiny changes, remarkable results. Practical system for compounding daily habits.',
    searchUrl: 'https://www.google.com/search?q=Atomic+Habits+James+Clear'
  },
  {
    id: 'book-5',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780812968255-M.jpg',
    status: 'Reading',
    rating: '5/5',
    notes: 'Timeless Stoic wisdom on self-discipline, resilience, and inner tranquility.',
    searchUrl: 'https://www.google.com/search?q=Meditations+Marcus+Aurelius'
  },
  {
    id: 'book-6',
    title: 'Zero to One',
    author: 'Peter Thiel',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780804139298-M.jpg',
    status: 'Completed',
    rating: '5/5',
    notes: 'Notes on startups and how to build the future through true innovation.',
    searchUrl: 'https://www.google.com/search?q=Zero+to+One+Peter+Thiel'
  }
];

export const FAVORITES: FavoriteItem[] = [
  // Games
  {
    id: 'g-1',
    category: 'Games',
    title: 'The Witcher 3: Wild Hunt - Complete Edition',
    creator: 'CD Projekt Red',
    year: '2015',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg'
    ],
    description: 'Masterpiece open-world RPG with unparalleled narrative depth and monster hunting.',
    url: 'https://en.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt',
    rating: '5/5'
  },
  {
    id: 'g-2',
    category: 'Games',
    title: 'Mafia: Definitive Edition',
    creator: 'Hangar 13',
    year: '2020',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Mafia_Definitive_Edition_cover_art.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co26lh.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/e/e0/Mafia_Definitive_Edition_cover_art.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co26lh.jpg'
    ],
    description: 'A ground-up remake of the 2002 crime drama classic in 1930s Lost Heaven.',
    url: 'https://en.wikipedia.org/wiki/Mafia:_Definitive_Edition',
    rating: '5/5'
  },
  {
    id: 'g-3',
    category: 'Games',
    title: 'Max Payne',
    creator: 'Remedy Entertainment',
    year: '2001',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Max_payne_box.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co222x.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/a/a2/Max_payne_box.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co222x.jpg'
    ],
    description: 'Groundbreaking neo-noir action introducing bullet-time mechanics and graphic novel narrative.',
    url: 'https://en.wikipedia.org/wiki/Max_Payne_(video_game)',
    rating: '5/5'
  },
  {
    id: 'g-4',
    category: 'Games',
    title: 'Red Dead Redemption',
    creator: 'Rockstar San Diego',
    year: '2010',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co221y.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co221y.jpg'
    ],
    description: 'Epic tale of John Marston across the dying American frontier.',
    url: 'https://en.wikipedia.org/wiki/Red_Dead_Redemption',
    rating: '5/5'
  },
  {
    id: 'g-5',
    category: 'Games',
    title: 'Death Stranding',
    creator: 'Kojima Productions',
    year: '2019',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.jpg'
    ],
    description: 'Unapologetically unique genre-defining experience connecting a fractured world.',
    url: 'https://en.wikipedia.org/wiki/Death_Stranding',
    rating: '5/5'
  },
  {
    id: 'g-6',
    category: 'Games',
    title: 'Red Dead Redemption 2',
    creator: 'Rockstar Games',
    year: '2018',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1qbf.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co1qbf.jpg'
    ],
    description: 'The pinnacle of open-world simulation, character writing, and environmental detail.',
    url: 'https://en.wikipedia.org/wiki/Red_Dead_Redemption_2',
    rating: '5/5'
  },
  {
    id: 'g-7',
    category: 'Games',
    title: 'Mafia',
    creator: 'Illusion Softworks',
    year: '2002',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/d/db/Mafia_PC_Box.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1vbr.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/d/db/Mafia_PC_Box.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co1vbr.jpg'
    ],
    description: 'The original 2002 cinematic mob story following Tommy Angelo in the Lost Heaven underworld.',
    url: 'https://en.wikipedia.org/wiki/Mafia_(video_game)',
    rating: '5/5'
  },
  {
    id: 'g-8',
    category: 'Games',
    title: 'Mafia II: Definitive Edition',
    creator: '2K Czech / Hangar 13',
    year: '2020',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Mafia_II.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2240.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/8/8e/Mafia_II.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co2240.jpg'
    ],
    description: 'Vito Scaletta’s journey through Empire Bay during the golden era of organized crime.',
    url: 'https://en.wikipedia.org/wiki/Mafia_II',
    rating: '5/5'
  },
  {
    id: 'g-9',
    category: 'Games',
    title: 'Max Payne 2: The Fall of Max Payne',
    creator: 'Remedy Entertainment',
    year: '2003',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Max_Payne_2_Coverart.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co222w.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/b/b3/Max_Payne_2_Coverart.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co222w.jpg'
    ],
    description: 'A film-noir love story filled with tragedy, dream sequences, and refined ragdoll physics.',
    url: 'https://en.wikipedia.org/wiki/Max_Payne_2:_The_Fall_of_Max_Payne',
    rating: '5/5'
  },
  {
    id: 'g-10',
    category: 'Games',
    title: 'Max Payne 3',
    creator: 'Rockstar Studios',
    year: '2012',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/2/22/MaxPayne3.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1w2y.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/2/22/MaxPayne3.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co1w2y.jpg'
    ],
    description: 'Visceral gunplay, incredible physics animation, and a gritty story set in São Paulo.',
    url: 'https://en.wikipedia.org/wiki/Max_Payne_3',
    rating: '5/5'
  },
  {
    id: 'g-11',
    category: 'Games',
    title: 'Dishonored: Definitive Edition',
    creator: 'Arkane Studios',
    year: '2012',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Dishonored_box_art.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1pcf.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/0/0c/Dishonored_box_art.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co1pcf.jpg'
    ],
    description: 'Immersive sim masterclass in Dunwall with stealth choices, supernatural abilities, and level design.',
    url: 'https://en.wikipedia.org/wiki/Dishonored_(video_game)',
    rating: '5/5'
  },
  {
    id: 'g-12',
    category: 'Games',
    title: 'Silent Hill 2',
    creator: 'Konami / Team Silent',
    year: '2001',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/95/Silent_Hill_2_cover.hit.jpg',
    backupCoverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co238c.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/9/95/Silent_Hill_2_cover.hit.jpg',
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co238c.jpg'
    ],
    description: 'Psychological horror masterpiece exploring grief, guilt, and foggy symbolism.',
    url: 'https://en.wikipedia.org/wiki/Silent_Hill_2',
    rating: '5/5'
  },

  // Movies & TV Shows
  {
    id: 'ms-1',
    category: 'Movies & TV Shows',
    title: 'Munich',
    creator: 'Steven Spielberg',
    year: '2005',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/Munich_movie_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/A1c2rC195aMvhv2kS1W1cO4C4tq.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/d/dd/Munich_movie_poster.jpg',
      'https://image.tmdb.org/t/p/w500/A1c2rC195aMvhv2kS1W1cO4C4tq.jpg'
    ],
    description: 'Tense historical thriller examining the moral complexity of vengeance.',
    url: 'https://en.wikipedia.org/wiki/Munich_(2005_film)',
    rating: '5/5'
  },
  {
    id: 'ms-2',
    category: 'Movies & TV Shows',
    title: 'Gladiator',
    creator: 'Ridley Scott',
    year: '2000',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/ty8T3AchPVyRfmToGl21PAt2qA.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png',
      'https://image.tmdb.org/t/p/w500/ty8T3AchPVyRfmToGl21PAt2qA.jpg'
    ],
    description: 'Monumental historical epic of honor, vengeance, and Roman gladiator arenas.',
    url: 'https://en.wikipedia.org/wiki/Gladiator_(2000_film)',
    rating: '5/5'
  },
  {
    id: 'ms-3',
    category: 'Movies & TV Shows',
    title: 'Source Code',
    creator: 'Duncan Jones',
    year: '2011',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Source_Code_Poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/m13cT1T8pE9y9xU9K16qfK2rW9A.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/e/e5/Source_Code_Poster.jpg',
      'https://image.tmdb.org/t/p/w500/m13cT1T8pE9y9xU9K16qfK2rW9A.jpg'
    ],
    description: 'Fast-paced sci-fi thrill loop investigating a train explosion through mind-transference.',
    url: 'https://en.wikipedia.org/wiki/Source_Code',
    rating: '5/5'
  },
  {
    id: 'ms-4',
    category: 'Movies & TV Shows',
    title: 'Vinland Saga',
    creator: 'Makoto Yukimura / Wit Studio',
    year: '2019',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Vinland_Saga_volume_01_cover.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/d9IawSjAtO8nC4S4Wd0kG4Y5pT5.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/1/1a/Vinland_Saga_volume_01_cover.jpg',
      'https://image.tmdb.org/t/p/w500/d9IawSjAtO8nC4S4Wd0kG4Y5pT5.jpg'
    ],
    description: 'Masterpiece anime epic on vengeance, war, redemption, and Viking history.',
    url: 'https://en.wikipedia.org/wiki/Vinland_Saga_(anime)',
    rating: '5/5'
  },
  {
    id: 'ms-5',
    category: 'Movies & TV Shows',
    title: 'Catch Me If You Can',
    creator: 'Steven Spielberg',
    year: '2002',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Catch_Me_If_You_Can_2002_movie_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/ctjEj2xL322I9Ch818R2A2S3Jc5.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/7/7b/Catch_Me_If_You_Can_2002_movie_poster.jpg',
      'https://image.tmdb.org/t/p/w500/ctjEj2xL322I9Ch818R2A2S3Jc5.jpg'
    ],
    description: 'Charming cat-and-mouse chase film following Frank Abagnale Jr. and FBI agent Carl Hanratty.',
    url: 'https://en.wikipedia.org/wiki/Catch_Me_If_You_Can',
    rating: '5/5'
  },
  {
    id: 'ms-6',
    category: 'Movies & TV Shows',
    title: 'Spider-Man 2',
    creator: 'Sam Raimi',
    year: '2004',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_2_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/olx2P57p5f7R1oQ9Q579y8W9x9A.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_2_poster.jpg',
      'https://image.tmdb.org/t/p/w500/olx2P57p5f7R1oQ9Q579y8W9x9A.jpg'
    ],
    description: 'Definitive superhero sequel balancing Peter Parker’s personal burden with Doctor Octopus.',
    url: 'https://en.wikipedia.org/wiki/Spider-Man_2',
    rating: '5/5'
  },
  {
    id: 'ms-7',
    category: 'Movies & TV Shows',
    title: 'The Machinist',
    creator: 'Brad Anderson',
    year: '2004',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b9/The_Machinist_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/h6S0C4kSg6W28S84P8xQ449m21.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/b/b9/The_Machinist_poster.jpg',
      'https://image.tmdb.org/t/p/w500/h6S0C4kSg6W28S84P8xQ449m21.jpg'
    ],
    description: 'Haunting psychological thriller on guilt and insomnia featuring Christian Bale.',
    url: 'https://en.wikipedia.org/wiki/The_Machinist',
    rating: '5/5'
  },
  {
    id: 'ms-8',
    category: 'Movies & TV Shows',
    title: 'Blade Runner 2049',
    creator: 'Denis Villeneuve',
    year: '2017',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/gGe22O4B1aX609g97y1L10S09C9.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png',
      'https://image.tmdb.org/t/p/w500/gGe22O4B1aX609g97y1L10S09C9.jpg'
    ],
    description: 'Breathtaking cyberpunk visuals, Deakins cinematography, and existential sci-fi mystery.',
    url: 'https://en.wikipedia.org/wiki/Blade_Runner_2049',
    rating: '5/5'
  },
  {
    id: 'ms-9',
    category: 'Movies & TV Shows',
    title: 'Spider-Man: Into the Spider-Verse',
    creator: 'Bob Persichetti, Peter Ramsey',
    year: '2018',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/8/87/Spider-Man_Into_the_Spider-Verse_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/ii2S2K2K5J129k91g9x12J9k2K1.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/8/87/Spider-Man_Into_the_Spider-Verse_poster.jpg',
      'https://image.tmdb.org/t/p/w500/ii2S2K2K5J129k91g9x12J9k2K1.jpg'
    ],
    description: 'Revolutionary comic-book animation style, soundtrack, and energetic multiverse origin.',
    url: 'https://en.wikipedia.org/wiki/Spider-Man:_Into_the_Spider-Verse',
    rating: '5/5'
  },
  {
    id: 'ms-10',
    category: 'Movies & TV Shows',
    title: 'The Day of the Jackal',
    creator: 'Fred Zinnemann',
    year: '1973',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9a/The_Day_of_the_Jackal_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/x26L5k85S85s4d8s8m0S593J8xK.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/9/9a/The_Day_of_the_Jackal_poster.jpg',
      'https://image.tmdb.org/t/p/w500/x26L5k85S85s4d8s8m0S593J8xK.jpg'
    ],
    description: 'Meticulous, methodical assassin thriller detailing a conspiracy against Charles de Gaulle.',
    url: 'https://en.wikipedia.org/wiki/The_Day_of_the_Jackal_(film)',
    rating: '5/5'
  },
  {
    id: 'ms-11',
    category: 'Movies & TV Shows',
    title: 'The Exorcist',
    creator: 'William Friedkin',
    year: '1973',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7b/The_Exorcist_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/4S3P04xS183A20aG039m40S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/7/7b/The_Exorcist_poster.jpg',
      'https://image.tmdb.org/t/p/w500/4S3P04xS183A20aG039m40S09gT.jpg'
    ],
    description: 'Landmark horror masterpiece grounded in faith, psychological tension, and terror.',
    url: 'https://en.wikipedia.org/wiki/The_Exorcist',
    rating: '5/5'
  },
  {
    id: 'ms-12',
    category: 'Movies & TV Shows',
    title: 'Spider-Man: Across the Spider-Verse',
    creator: 'Joaquim Dos Santos, Kemp Powers',
    year: '2023',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/8Vt6m2B9C0S84S8S1Xk71S02K00.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg',
      'https://image.tmdb.org/t/p/w500/8Vt6m2B9C0S84S8S1Xk71S02K00.jpg'
    ],
    description: 'Visual triumph expanding Miles Morales’ multiverse story with stunning art styles.',
    url: 'https://en.wikipedia.org/wiki/Spider-Man:_Across_the_Spider-Verse',
    rating: '5/5'
  },
  {
    id: 'ms-13',
    category: 'Movies & TV Shows',
    title: 'The Northman',
    creator: 'Robert Eggers',
    year: '2022',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/8/82/The_Northman_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/a13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/8/82/The_Northman_poster.jpg',
      'https://image.tmdb.org/t/p/w500/a13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Brutal, mythic Viking revenge tale executed with historical accuracy and visceral intensity.',
    url: 'https://en.wikipedia.org/wiki/The_Northman',
    rating: '5/5'
  },
  {
    id: 'ms-14',
    category: 'Movies & TV Shows',
    title: 'Scarface',
    creator: 'Brian De Palma',
    year: '1983',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_Film.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/iS9A3L3A9XkX544520A81295A12.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_Film.jpg',
      'https://image.tmdb.org/t/p/w500/iS9A3L3A9XkX544520A81295A12.jpg'
    ],
    description: 'Iconic crime saga following Tony Montana’s rise and explosive fall in Miami.',
    url: 'https://en.wikipedia.org/wiki/Scarface_(1983_film)',
    rating: '5/5'
  },
  {
    id: 'ms-15',
    category: 'Movies & TV Shows',
    title: 'Spider-Man: No Way Home',
    creator: 'Jon Watts',
    year: '2021',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/1g0dhY119yS5S8405K05S00g9A1.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg',
      'https://image.tmdb.org/t/p/w500/1g0dhY119yS5S8405K05S00g9A1.jpg'
    ],
    description: 'Emotional culmination of three generations of Spider-Man cinema.',
    url: 'https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home',
    rating: '5/5'
  },
  {
    id: 'ms-16',
    category: 'Movies & TV Shows',
    title: 'Django Unchained',
    creator: 'Quentin Tarantino',
    year: '2012',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/7s28C281k453K123K145sS09A12.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg',
      'https://image.tmdb.org/t/p/w500/7s28C281k453K123K145sS09A12.jpg'
    ],
    description: 'Tarantino’s explosive Western following a freed slave and a bounty hunter.',
    url: 'https://en.wikipedia.org/wiki/Django_Unchained',
    rating: '5/5'
  },
  {
    id: 'ms-17',
    category: 'Movies & TV Shows',
    title: 'Se7en',
    creator: 'David Fincher',
    year: '1995',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/G9S1G123k453K123K145sS09A12.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg',
      'https://image.tmdb.org/t/p/w500/G9S1G123k453K123K145sS09A12.jpg'
    ],
    description: 'Dark, atmospheric neo-noir mystery following detectives investigating the seven deadly sins.',
    url: 'https://en.wikipedia.org/wiki/Se7en',
    rating: '5/5'
  },
  {
    id: 'ms-18',
    category: 'Movies & TV Shows',
    title: 'Up',
    creator: 'Pete Docter',
    year: '2009',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/vp9S9123k453K123K145sS09A12.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg',
      'https://image.tmdb.org/t/p/w500/vp9S9123k453K123K145sS09A12.jpg'
    ],
    description: 'Heartwarming Pixar classic about grief, adventure, and Carl Fredricksen’s flying house.',
    url: 'https://en.wikipedia.org/wiki/Up_(2009_film)',
    rating: '5/5'
  },
  {
    id: 'ms-19',
    category: 'Movies & TV Shows',
    title: 'The Equalizer',
    creator: 'Antoine Fuqua',
    year: '2014',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/The_Equalizer_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/eS9S9123k453K123K145sS09A12.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/a/a9/The_Equalizer_poster.jpg',
      'https://image.tmdb.org/t/p/w500/eS9S9123k453K123K145sS09A12.jpg'
    ],
    description: 'Denzel Washington delivers a razor-sharp vigilante performance protecting the innocent.',
    url: 'https://en.wikipedia.org/wiki/The_Equalizer_(film)',
    rating: '5/5'
  },
  {
    id: 'ms-20',
    category: 'Movies & TV Shows',
    title: 'Interstellar',
    creator: 'Christopher Nolan',
    year: '2014',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/gEU2G123k453K123K145sS09A12.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
      'https://image.tmdb.org/t/p/w500/gEU2G123k453K123K145sS09A12.jpg'
    ],
    description: 'Cinematic achievement in sci-fi, wormholes, relativistic time, and Hans Zimmer’s organ score.',
    url: 'https://en.wikipedia.org/wiki/Interstellar_(film)',
    rating: '5/5'
  },
  {
    id: 'ms-21',
    category: 'Movies & TV Shows',
    title: 'The Batman',
    creator: 'Matt Reeves',
    year: '2022',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/74x2G123k453K123K145sS09A12.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg',
      'https://image.tmdb.org/t/p/w500/74x2G123k453K123K145sS09A12.jpg'
    ],
    description: 'Grit-infused detective noir exploring Batman’s second year in Gotham City.',
    url: 'https://en.wikipedia.org/wiki/The_Batman_(film)',
    rating: '5/5'
  },
  {
    id: 'ms-22',
    category: 'Movies & TV Shows',
    title: 'Law Abiding Citizen',
    creator: 'F. Gary Gray',
    year: '2009',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/d/df/Law_abiding_citizen_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/mS9S9123k453K123K145sS09A12.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/d/df/Law_abiding_citizen_poster.jpg',
      'https://image.tmdb.org/t/p/w500/mS9S9123k453K123K145sS09A12.jpg'
    ],
    description: 'An intense psychological thriller targeting flawed justice system loopholes.',
    url: 'https://en.wikipedia.org/wiki/Law_Abiding_Citizen',
    rating: '5/5'
  },
  {
    id: 'ms-23',
    category: 'Movies & TV Shows',
    title: 'The Dark Knight',
    creator: 'Christopher Nolan',
    year: '2008',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW43S183A20aG039m40S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
      'https://image.tmdb.org/t/p/w500/qJ2tW43S183A20aG039m40S09gT.jpg'
    ],
    description: 'The golden standard of crime thrillers featuring Heath Ledger’s legendary Joker performance.',
    url: 'https://en.wikipedia.org/wiki/The_Dark_Knight',
    rating: '5/5'
  },
  {
    id: 'ms-24',
    category: 'Movies & TV Shows',
    title: 'The Theory of Everything',
    creator: 'James Marsh',
    year: '2014',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b8/The_Theory_of_Everything_%282014%29.integrated_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/A23vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/b/b8/The_Theory_of_Everything_%282014%29.integrated_poster.jpg',
      'https://image.tmdb.org/t/p/w500/A23vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Moving biographical drama detailing the life and discoveries of Stephen Hawking.',
    url: 'https://en.wikipedia.org/wiki/The_Theory_of_Everything_(2014_film)',
    rating: '5/5'
  },
  {
    id: 'ms-25',
    category: 'Movies & TV Shows',
    title: 'The Green Mile',
    creator: 'Frank Darabont',
    year: '1999',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/velE13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_poster.jpg',
      'https://image.tmdb.org/t/p/w500/velE13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Profoundly moving Stephen King adaptation on death row guards and a miraculous prisoner.',
    url: 'https://en.wikipedia.org/wiki/The_Green_Mile_(film)',
    rating: '5/5'
  },
  {
    id: 'ms-26',
    category: 'Movies & TV Shows',
    title: 'Cast Away',
    creator: 'Robert Zemeckis',
    year: '2000',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Cast_Away_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/wmS13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/a/a7/Cast_Away_poster.jpg',
      'https://image.tmdb.org/t/p/w500/wmS13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Tom Hanks delivers a masterclass performance on survival and resilience on an uninhabited island.',
    url: 'https://en.wikipedia.org/wiki/Cast_Away',
    rating: '5/5'
  },
  {
    id: 'ms-27',
    category: 'Movies & TV Shows',
    title: 'Good Will Hunting',
    creator: 'Gus Van Sant',
    year: '1997',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b8/Good_Will_Hunting_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/bC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/b/b8/Good_Will_Hunting_poster.jpg',
      'https://image.tmdb.org/t/p/w500/bC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Emotional depth and brilliant writing following a genius janitor at MIT.',
    url: 'https://en.wikipedia.org/wiki/Good_Will_Hunting',
    rating: '5/5'
  },
  {
    id: 'ms-28',
    category: 'Movies & TV Shows',
    title: 'Drive',
    creator: 'Nicolas Winding Refn',
    year: '2011',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/sC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/1/13/Drive2011Poster.jpg',
      'https://image.tmdb.org/t/p/w500/sC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Neon synthwave aesthetics, tight pacing, and Ryan Gosling’s quiet stuntman driver.',
    url: 'https://en.wikipedia.org/wiki/Drive_(2011_film)',
    rating: '5/5'
  },
  {
    id: 'ms-29',
    category: 'Movies & TV Shows',
    title: 'The Truman Show',
    creator: 'Peter Weir',
    year: '1998',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/tC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg',
      'https://image.tmdb.org/t/p/w500/tC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Prescient satire on reality television, privacy, and existential awakening.',
    url: 'https://en.wikipedia.org/wiki/The_Truman_Show',
    rating: '5/5'
  },
  {
    id: 'ms-30',
    category: 'Movies & TV Shows',
    title: 'A Beautiful Mind',
    creator: 'Ron Howard',
    year: '2001',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/aC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg',
      'https://image.tmdb.org/t/p/w500/aC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Biographical drama of mathematician John Nash and his battle with schizophrenia.',
    url: 'https://en.wikipedia.org/wiki/A_Beautiful_Mind_(film)',
    rating: '5/5'
  },
  {
    id: 'ms-31',
    category: 'Movies & TV Shows',
    title: 'Coco',
    creator: 'Lee Unkrich',
    year: '2017',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/90/Coco_%282017_film%29_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/cC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/9/90/Coco_%282017_film%29_poster.jpg',
      'https://image.tmdb.org/t/p/w500/cC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Visually vibrant musical journey through memory, family legacy, and Day of the Dead.',
    url: 'https://en.wikipedia.org/wiki/Coco_(2017_film)',
    rating: '5/5'
  },
  {
    id: 'ms-32',
    category: 'Movies & TV Shows',
    title: 'The Matrix',
    creator: 'The Wachowskis',
    year: '1999',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/mC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
      'https://image.tmdb.org/t/p/w500/mC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Philosophical cyberpunk action landmark that reshaped modern action cinema.',
    url: 'https://en.wikipedia.org/wiki/The_Matrix',
    rating: '5/5'
  },
  {
    id: 'ms-33',
    category: 'Movies & TV Shows',
    title: 'The Imitation Game',
    creator: 'Morten Tyldum',
    year: '2014',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5a/The_Imitation_Game_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/iC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/5/5a/The_Imitation_Game_poster.jpg',
      'https://image.tmdb.org/t/p/w500/iC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Compelling historical account of Alan Turing building the Bombe machine to break Enigma.',
    url: 'https://en.wikipedia.org/wiki/The_Imitation_Game',
    rating: '5/5'
  },
  {
    id: 'ms-34',
    category: 'Movies & TV Shows',
    title: 'The Departed',
    creator: 'Martin Scorsese',
    year: '2006',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/dC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg',
      'https://image.tmdb.org/t/p/w500/dC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Scorsese’s Boston crime thriller featuring double moles in the state police and Irish mob.',
    url: 'https://en.wikipedia.org/wiki/The_Departed',
    rating: '5/5'
  },
  {
    id: 'ms-35',
    category: 'Movies & TV Shows',
    title: 'The Godfather',
    creator: 'Francis Ford Coppola',
    year: '1972',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/gC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
      'https://image.tmdb.org/t/p/w500/gC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'The definitive mafia masterpiece tracing Michael Corleone’s transformation.',
    url: 'https://en.wikipedia.org/wiki/The_Godfather',
    rating: '5/5'
  },
  {
    id: 'ms-36',
    category: 'Movies & TV Shows',
    title: 'No Country for Old Men',
    creator: 'Joel and Ethan Coen',
    year: '2007',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/nC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
      'https://image.tmdb.org/t/p/w500/nC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Relentless neo-Western thriller following Anton Chigurh across West Texas.',
    url: 'https://en.wikipedia.org/wiki/No_Country_for_Old_Men_(film)',
    rating: '5/5'
  },
  {
    id: 'ms-37',
    category: 'Movies & TV Shows',
    title: 'Life Is Beautiful',
    creator: 'Roberto Benigni',
    year: '1997',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Life_is_Beautiful_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/lC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/7/7c/Life_is_Beautiful_poster.jpg',
      'https://image.tmdb.org/t/p/w500/lC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Unforgettable story of imagination, fatherly love, and hope during WWII.',
    url: 'https://en.wikipedia.org/wiki/Life_Is_Beautiful',
    rating: '5/5'
  },
  {
    id: 'ms-38',
    category: 'Movies & TV Shows',
    title: 'Inception',
    creator: 'Christopher Nolan',
    year: '2010',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    backupCoverUrl: 'https://image.tmdb.org/t/p/w500/inC13vS1S411d94mK0S802S4S09gT.jpg',
    coverUrls: [
      'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
      'https://image.tmdb.org/t/p/w500/inC13vS1S411d94mK0S802S4S09gT.jpg'
    ],
    description: 'Mind-bending dream-architect heist thriller with extraordinary scope and Hans Zimmer score.',
    url: 'https://en.wikipedia.org/wiki/Inception',
    rating: '5/5'
  },

  // Books
  {
    id: 'b-1',
    category: 'Books',
    title: 'Steve Jobs',
    creator: 'Walter Isaacson',
    year: '2011',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781451648539-M.jpg',
    backupCoverUrl: 'https://covers.openlibrary.org/b/isbn/9781451648539-L.jpg',
    coverUrls: [
      'https://covers.openlibrary.org/b/isbn/9781451648539-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9781451648539-L.jpg'
    ],
    description: 'A masterclass on obsession, design craft, and building enduring products.',
    url: 'https://en.wikipedia.org/wiki/Steve_Jobs_(book)',
    rating: '5/5'
  },
  {
    id: 'b-2',
    category: 'Books',
    title: 'The Almanack of Naval Ravikant',
    creator: 'Eric Jorgenson',
    year: '2020',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781544514215-M.jpg',
    backupCoverUrl: 'https://covers.openlibrary.org/b/isbn/9781544514215-L.jpg',
    coverUrls: [
      'https://covers.openlibrary.org/b/isbn/9781544514215-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9781544514215-L.jpg'
    ],
    description: 'A guide to wealth, judgment, leverage, and mental clarity.',
    url: 'https://www.google.com/search?q=The+Almanack+of+Naval+Ravikant',
    rating: '5/5'
  },
  {
    id: 'b-3',
    category: 'Books',
    title: 'The Stranger',
    creator: 'Albert Camus',
    year: '1942',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780679720201-M.jpg',
    backupCoverUrl: 'https://covers.openlibrary.org/b/isbn/9780679720201-L.jpg',
    coverUrls: [
      'https://covers.openlibrary.org/b/isbn/9780679720201-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780679720201-L.jpg'
    ],
    description: 'A classic absurdist masterpiece on freedom and human existence.',
    url: 'https://en.wikipedia.org/wiki/The_Stranger_(Camus_novel)',
    rating: '5/5'
  },
  {
    id: 'b-4',
    category: 'Books',
    title: 'Atomic Habits',
    creator: 'James Clear',
    year: '2018',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg',
    backupCoverUrl: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
    coverUrls: [
      'https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg'
    ],
    description: 'Practical system for compounding daily habits and continuous growth.',
    url: 'https://en.wikipedia.org/wiki/Atomic_Habits',
    rating: '5/5'
  },
  {
    id: 'b-5',
    category: 'Books',
    title: 'Meditations',
    creator: 'Marcus Aurelius',
    year: '180',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780812968255-M.jpg',
    backupCoverUrl: 'https://covers.openlibrary.org/b/isbn/9780812968255-L.jpg',
    coverUrls: [
      'https://covers.openlibrary.org/b/isbn/9780812968255-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780812968255-L.jpg'
    ],
    description: 'Timeless Stoic wisdom on self-discipline, resilience, and inner tranquility.',
    url: 'https://en.wikipedia.org/wiki/Meditations',
    rating: '5/5'
  },
  {
    id: 'b-6',
    category: 'Books',
    title: 'Zero to One',
    creator: 'Peter Thiel',
    year: '2014',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780804139298-M.jpg',
    backupCoverUrl: 'https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg',
    coverUrls: [
      'https://covers.openlibrary.org/b/isbn/9780804139298-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg'
    ],
    description: 'Notes on startups and how to build the future through true innovation.',
    url: 'https://en.wikipedia.org/wiki/Zero_to_One',
    rating: '5/5'
  }
];

export const BUCKET_LIST_SECTIONS: BucketListSection[] = [
  {
    category: 'The version of me I keep imagining',
    items: [
      { number: 1, title: 'Become someone I genuinely admire', completed: false },
      { number: 2, title: "Build a life that doesn't revolve around proving anything to anyone", completed: false },
      { number: 3, title: 'Be financially independent', completed: false },
      { number: 4, title: 'Pay off every loan', completed: false },
      { number: 5, title: 'Buy my parents something expensive without checking my account balance first', completed: false },
      { number: 6, title: 'Have a room that feels completely mine', completed: false },
      { number: 7, title: "Wake up excited about the work I'm doing", completed: false },
      { number: 8, title: "Stop feeling like I'm always catching up", completed: false },
      { number: 9, title: 'Become disciplined enough that motivation stops mattering', completed: false },
      { number: 10, title: 'Look back at this phase of my life without shame', completed: false },
    ],
  },
  {
    category: 'Things I want to build',
    items: [
      { number: 11, title: 'Build a hardware project from scratch', completed: false },
      { number: 12, title: 'Design and manufacture my own PCB', completed: false },
      { number: 13, title: 'Create a device I use every day', completed: false },
      { number: 14, title: 'Build something that combines hardware and AI', completed: false },
      { number: 15, title: 'Make a website that feels like a piece of art', completed: true },
      { number: 16, title: 'Build a portfolio that feels unmistakably mine', completed: true },
      { number: 17, title: 'Create an app people actually use', completed: false },
      { number: 18, title: "Open source a project I'm proud of", completed: false },
      { number: 19, title: 'Make something that gets a thousand strangers to care', completed: false },
      { number: 20, title: 'Build a tiny robot just because I can', completed: false },
    ],
  },
  {
    category: 'My online self',
    items: [
      { number: 21, title: 'Launch my personal website', completed: true },
      { number: 22, title: 'Write 50 blog posts', completed: false },
      { number: 23, title: 'Create a visual identity I keep for years', completed: true },
      { number: 24, title: 'Have a GitHub profile that tells a story', completed: true },
      { number: 25, title: 'Be known online for something I made', completed: false },
      { number: 26, title: 'Design a website I still love five years later', completed: false },
      { number: 27, title: 'Write something that gets quoted by someone else', completed: false },
      { number: 28, title: 'Build a site with the kind of details only I would notice', completed: true },
      { number: 29, title: 'Create a digital archive of my life and projects', completed: true },
      { number: 30, title: 'Have one username across every platform', completed: true },
    ],
  },
  {
    category: 'Engineering and curiosity',
    items: [
      { number: 31, title: 'Learn AI and ML well enough to build my own ideas', completed: false },
      { number: 32, title: 'Train a model that surprises me', completed: false },
      { number: 33, title: 'Build a computer vision project', completed: false },
      { number: 34, title: 'Learn Linux deeply', completed: false },
      { number: 35, title: 'Become genuinely comfortable with C++', completed: false },
      { number: 36, title: 'Become genuinely comfortable with Python', completed: true },
      { number: 37, title: 'Understand embedded systems without pretending I do', completed: false },
      { number: 38, title: "Contribute to someone else's project", completed: false },
      { number: 39, title: 'Win or place in a hackathon', completed: false },
      { number: 40, title: 'Build something that would make younger me lose his mind', completed: false },
    ],
  },
  {
    category: 'The career I keep orbiting',
    items: [
      { number: 41, title: 'Get an internship that teaches me something real', completed: false },
      { number: 42, title: 'Earn money from code', completed: false },
      { number: 43, title: 'Earn money from a hardware project', completed: false },
      { number: 44, title: 'Work on a product used by thousands of people', completed: false },
      { number: 45, title: 'Visit an engineering lab or semiconductor facility', completed: false },
      { number: 46, title: 'Meet someone who works at Nvidia AMD or Riot', completed: false },
      { number: 47, title: 'Attend a tech conference', completed: false },
      { number: 48, title: 'Get a technical interview and not feel intimidated', completed: false },
      { number: 49, title: 'Build a resume made of projects not excuses', completed: true },
      { number: 50, title: 'Work somewhere that values design as much as engineering', completed: false },
    ],
  },
  {
    category: 'Body and health',
    items: [
      { number: 51, title: 'Go to the gym for a full year', completed: false },
      { number: 52, title: 'Build a physique that makes me stand straighter', completed: false },
      { number: 53, title: 'Do 20 pull ups', completed: false },
      { number: 54, title: 'Bench my body weight', completed: false },
      { number: 55, title: 'Run 10 kilometers without stopping', completed: false },
      { number: 56, title: 'Sleep well for 30 days straight', completed: false },
      { number: 57, title: 'Follow a clean diet for a month', completed: false },
      { number: 58, title: 'Fix the parts of my health I keep postponing', completed: false },
      { number: 59, title: 'Feel comfortable in a photograph', completed: false },
      { number: 60, title: 'Stop treating my body like an afterthought', completed: false },
    ],
  },
  {
    category: 'Mind',
    items: [
      { number: 61, title: 'Read 50 books', completed: false },
      { number: 62, title: 'Read a book on astrophysics that I fully understand', completed: false },
      { number: 63, title: 'Keep a journal for a year', completed: false },
      { number: 64, title: 'Spend a full day without my phone', completed: false },
      { number: 65, title: 'Meditate for 30 days', completed: false },
      { number: 66, title: 'Learn to enjoy being alone', completed: false },
      { number: 67, title: 'Forgive a version of myself I still judge', completed: false },
      { number: 68, title: 'Write a letter to my younger self', completed: false },
      { number: 69, title: 'Go one year without checking her profile', completed: false },
      { number: 70, title: 'Reach a point where memories of her are warm instead of heavy', completed: false },
    ],
  },
  {
    category: 'About her',
    items: [
      { number: 71, title: 'Accept that I cannot rewrite what happened', completed: false },
      { number: 72, title: 'Stop imagining conversations that will never happen', completed: false },
      { number: 73, title: 'Remember her without immediately remembering my mistakes', completed: false },
      { number: 74, title: 'Believe that I can be deeply loved again', completed: false },
      { number: 75, title: 'Fall in love with someone without carrying guilt from the last time', completed: false },
      { number: 76, title: 'Be patient with someone I care about', completed: false },
      { number: 77, title: 'Never send a message out of panic again', completed: false },
      { number: 78, title: 'Learn the difference between longing and love', completed: false },
      { number: 79, title: 'Be grateful that she existed without needing her to return', completed: false },
      { number: 80, title: 'Meet the version of myself that would have handled it differently', completed: false },
    ],
  },
  {
    category: 'Creative things',
    items: [
      { number: 81, title: 'Fill an entire whiteboard with one idea', completed: false },
      { number: 82, title: 'Write a short story', completed: false },
      { number: 83, title: "Write 100 tweets I don't delete", completed: false },
      { number: 84, title: 'Design a fictional product', completed: false },
      { number: 85, title: 'Create a game concept document', completed: false },
      { number: 86, title: 'Build a beautiful UI from scratch', completed: true },
      { number: 87, title: 'Make a playlist that defines one year of my life', completed: false },
      { number: 88, title: 'Write an essay on why I love engineering', completed: false },
      { number: 89, title: 'Create something that outlives me online', completed: false },
      { number: 90, title: 'Finish a project I almost abandon', completed: false },
    ],
  },
  {
    category: 'Experiences I want once',
    items: [
      { number: 91, title: 'See the Milky Way with my own eyes', completed: false },
      { number: 92, title: 'Visit a planetarium', completed: false },
      { number: 93, title: 'Watch a total lunar eclipse', completed: false },
      { number: 94, title: 'Travel alone to another city', completed: false },
      { number: 95, title: 'Attend a live rock concert', completed: false },
      { number: 96, title: 'Code through an entire night with friends', completed: false },
      { number: 97, title: 'Build something in 24 hours', completed: false },
      { number: 98, title: 'Stand on a mountain at sunrise and not take a photo', completed: false },
      { number: 99, title: 'Meet someone who changes my life unexpectedly', completed: false },
      { number: 100, title: "One day realize I haven't thought about this bucket list in months because I'm too busy living it", completed: false },
    ],
  },
];

export const TOP_TENS_DATA: TopTenCategory[] = [
  {
    id: 'creators',
    title: 'Top 10 Creators',
    description: 'Tech reviewers, educators, filmmakers, and builders who inspire my daily work.',
    items: [
      {
        rank: 1,
        name: 'MKBHD (Marques Brownlee)',
        subtitle: 'Tech & Product Design',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@mkbhd',
      },
      {
        rank: 2,
        name: 'Fireship (Jeff Delaney)',
        subtitle: 'High-speed Code & Tech',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@fireship',
      },
      {
        rank: 3,
        name: 'Veritasium (Derek Muller)',
        subtitle: 'Science & Physics',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@veritasium',
      },
      {
        rank: 4,
        name: 'The Primeagen',
        subtitle: 'Vim, Systems & Dev Culture',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@ThePrimeagen',
      },
      {
        rank: 5,
        name: 'Casey Neistat',
        subtitle: 'Filmmaking & Storytelling',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@caseyneistat',
      },
      {
        rank: 6,
        name: 'Theo - t3.gg',
        subtitle: 'Fullstack Web Architecture',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@t3dotgg',
      },
      {
        rank: 7,
        name: '3Blue1Brown (Grant Sanderson)',
        subtitle: 'Visual Math & Calculus',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@3blue1brown',
      },
      {
        rank: 8,
        name: 'Mark Rober',
        subtitle: 'Engineering & Creative Hardware',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@markrober',
      },
      {
        rank: 9,
        name: 'Dan Abramov',
        subtitle: 'React & Frontend Philosophy',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
        link: 'https://x.com/dan_abramov',
      },
      {
        rank: 10,
        name: 'Kurzgesagt – In a Nutshell',
        subtitle: 'Science & Cosmic Animation',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@kurzgesagt',
      },
    ],
  },
  {
    id: 'streamers',
    title: 'Top 10 Streamers',
    description: 'Entertainers and gaming streamers who set the standard for live broadcast culture.',
    items: [
      {
        rank: 1,
        name: 'Tarik (Tarik Celik)',
        subtitle: 'King of Valorant Watchparties',
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&auto=format&fit=crop&q=80',
        link: 'https://twitch.tv/tarik',
      },
      {
        rank: 2,
        name: 'Shroud (Michael Grzesiek)',
        subtitle: 'FPS Aim Legend',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
        link: 'https://twitch.tv/shroud',
      },
      {
        rank: 3,
        name: 'xQc (Félix Lengyel)',
        subtitle: 'Variety React & Gaming',
        image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&auto=format&fit=crop&q=80',
        link: 'https://kick.com/xqc',
      },
      {
        rank: 4,
        name: 'Kai Cenat',
        subtitle: 'IRL Events & Streamer of the Year',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
        link: 'https://twitch.tv/kaicenat',
      },
      {
        rank: 5,
        name: 'Ludwig (Ludwig Ahgren)',
        subtitle: 'Gaming Tournaments & Events',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@ludwig',
      },
      {
        rank: 6,
        name: 'Valkyrae (Rachell Hofstetter)',
        subtitle: 'Variety Gaming & 100 Thieves',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
        link: 'https://youtube.com/@valkyrae',
      },
      {
        rank: 7,
        name: 'Pokimane (Imane Anys)',
        subtitle: 'Variety & Creator Icon',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
        link: 'https://twitch.tv/pokimane',
      },
      {
        rank: 8,
        name: 'Jynxzi (Nicholas Stewart)',
        subtitle: 'Rainbow Six Siege & High-Energy',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
        link: 'https://twitch.tv/jynxzi',
      },
      {
        rank: 9,
        name: 'Kyedae (Kyedae Shymko)',
        subtitle: 'Valorant Community & Gaming',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80',
        link: 'https://twitch.tv/kyedae',
      },
      {
        rank: 10,
        name: 'Scump (Seth Abner)',
        subtitle: 'OpTic Call of Duty Legend',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
        link: 'https://twitch.tv/scump',
      },
    ],
  },
  {
    id: 'songs',
    title: 'Top 10 Songs',
    description: 'Tracks that fuel focus during late-night coding sessions and long creative runs.',
    items: [
      {
        rank: 1,
        name: 'Starboy',
        subtitle: 'The Weeknd ft. Daft Punk',
        image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/Starboy%20The%20Weeknd',
      },
      {
        rank: 2,
        name: 'Blinding Lights',
        subtitle: 'The Weeknd',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/Blinding%20Lights',
      },
      {
        rank: 3,
        name: 'Midnight City',
        subtitle: 'M83',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/Midnight%20City%20M83',
      },
      {
        rank: 4,
        name: 'Resonance',
        subtitle: 'HOME',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/Resonance%20HOME',
      },
      {
        rank: 5,
        name: 'Numb',
        subtitle: 'Linkin Park',
        image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/Numb%20Linkin%20Park',
      },
      {
        rank: 6,
        name: 'Sweater Weather',
        subtitle: 'The Neighbourhood',
        image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/Sweater%20Weather',
      },
      {
        rank: 7,
        name: 'Stargazing',
        subtitle: 'Travis Scott',
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/Stargazing%20Travis%20Scott',
      },
      {
        rank: 8,
        name: 'After Hours',
        subtitle: 'The Weeknd',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/After%20Hours%20The%20Weeknd',
      },
      {
        rank: 9,
        name: 'Instant Crush',
        subtitle: 'Daft Punk ft. Julian Casablancas',
        image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/Instant%20Crush%20Daft%20Punk',
      },
      {
        rank: 10,
        name: 'Sunflower',
        subtitle: 'Post Malone & Swae Lee',
        image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=200&auto=format&fit=crop&q=80',
        link: 'https://open.spotify.com/search/Sunflower%20Post%20Malone',
      },
    ],
  },
];



