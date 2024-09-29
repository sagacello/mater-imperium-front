export interface System {
  id: number;
  name: string;
  url: string;
  lastUpdated: string;
  status: string;
  isFavorite: boolean;
}

const statuses = [
  'Projetos finalizados',
  'Projetos em andamento',
  'Projetos parados',
  'Projetos atrasados',
];

export const systems: System[] = [
  {
    id: 1,
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '5m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Inspiração para projeto',
    url: 'https://dribbble.com/shots/2084101-Dashboard-Overview/attachments/374756',
    lastUpdated: '10m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Sistema 3',
    url: 'https://system3.com',
    lastUpdated: '15m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Inspiração para projeto',
    url: 'https://dribbble.com/shots/2084101-Dashboard-Overview/attachments/374756',
    lastUpdated: '20m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Sistema 5',
    url: 'https://system5.com',
    lastUpdated: '25m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Sistema 6',
    url: '/system6',
    lastUpdated: '30m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 7,
    name: 'Sistema 7',
    url: 'https://system7.com',
    lastUpdated: '35m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 8,
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '40m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 9,
    name: 'Sistema 9',
    url: 'https://system9.com',
    lastUpdated: '45m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 10,
    name: 'Inspiração para projeto',
    url: 'https://dribbble.com/shots/2084101-Dashboard-Overview/attachments/374756',
    lastUpdated: '50m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 11,
    name: 'Sistema 11',
    url: 'https://system11.com',
    lastUpdated: '55m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 12,
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '60m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 13,
    name: 'Sistema 13',
    url: 'https://system13.com',
    lastUpdated: '65m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 14,
    name: 'Sistema 14',
    url: '/system14',
    lastUpdated: '70m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 15,
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '75m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
  {
    id: 16,
    name: 'Sistema 16',
    url: '/system16',
    lastUpdated: '80m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
  },
];
