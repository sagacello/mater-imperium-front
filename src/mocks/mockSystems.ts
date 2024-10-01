export interface System {
  id: number;
  name: string;
  url: string;
  lastUpdated: string;
  status: string;
  isFavorite: boolean;
  isChecked: boolean; // Adicionando a nova propriedade
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
    isFavorite: true,
    isChecked: false,
  },
  {
    id: 2,
    name: 'Inspiração para projeto',
    url: 'https://dribbble.com/shots/2084101-Dashboard-Overview/attachments/374756',
    lastUpdated: '10m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
    isChecked: false,
  },
  {
    id: 3,
    name: 'GitHub',
    url: 'https://github.com',
    lastUpdated: '15m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
    isChecked: false,
  },
  {
    id: 4,
    name: 'Inspiração para projeto',
    url: 'https://dribbble.com/shots/2084101-Dashboard-Overview/attachments/374756',
    lastUpdated: '20m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: true,
    isChecked: false,
  },
  {
    id: 5,
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '25m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
    isChecked: false,
  },
  {
    id: 6,
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com',
    lastUpdated: '30m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
    isChecked: false,
  },
  {
    id: 7,
    name: 'Medium',
    url: 'https://medium.com',
    lastUpdated: '35m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
    isChecked: false,
  },
  {
    id: 8,
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '40m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
    isChecked: false,
  },
  {
    id: 9,
    name: 'Dev.to',
    url: 'https://dev.to',
    lastUpdated: '45m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: true,
    isChecked: false,
  },
  {
    id: 10,
    name: 'Inspiração para projeto',
    url: 'https://dribbble.com/shots/2084101-Dashboard-Overview/attachments/374756',
    lastUpdated: '50m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
    isChecked: false,
  },
  {
    id: 11,
    name: 'Portfólio',
    url: 'https://sagacello.github.io/Portfolio/',
    lastUpdated: '55m',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    isFavorite: false,
    isChecked: false,
  },
];
