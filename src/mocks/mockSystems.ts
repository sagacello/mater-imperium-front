export interface System {
  name: string;
  url: string;
  lastUpdated: string;
  status: string;
}

const statuses = [
  'Projetos finalizados',
  'Projetos em andamento',
  'Projetos parados',
  'Projetos atrasados',
];

export const systems: System[] = [
  {
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '5m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Inspiração para projeto',
    url: 'https://dribbble.com/shots/2084101-Dashboard-Overview/attachments/374756',
    lastUpdated: '10m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Sistema 3',
    url: 'https://system3.com',
    lastUpdated: '15m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Inspiração para projeto',
    url: 'https://dribbble.com/shots/2084101-Dashboard-Overview/attachments/374756',
    lastUpdated: '20m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Sistema 5',
    url: 'https://system5.com',
    lastUpdated: '25m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Sistema 6',
    url: '/system6',
    lastUpdated: '30m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Sistema 7',
    url: 'https://system7.com',
    lastUpdated: '35m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '40m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Sistema 9',
    url: 'https://system9.com',
    lastUpdated: '45m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Inspiração para projeto',
    url: 'https://dribbble.com/shots/2084101-Dashboard-Overview/attachments/374756',
    lastUpdated: '50m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Sistema 11',
    url: 'https://system11.com',
    lastUpdated: '55m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '60m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Sistema 13',
    url: 'https://system13.com',
    lastUpdated: '65m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Sistema 14',
    url: '/system14',
    lastUpdated: '70m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '75m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    name: 'Sistema 16',
    url: '/system16',
    lastUpdated: '80m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
];
