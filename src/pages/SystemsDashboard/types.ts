export interface System {
  name: string;
  url: string;
  lastUpdated: string;
  status: string;
}

export interface SystemWithIndex extends System {
  index: number;
}
