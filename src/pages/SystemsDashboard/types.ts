export interface System {
  id: number;
  name: string;
  url: string;
  lastUpdated: string;
  status: string;
  isFavorite: boolean;
  isChecked: boolean;
}

export interface SystemWithIndex extends System {
  index: number;
}
