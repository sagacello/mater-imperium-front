export interface SystemCardProps {
  system: {
    id: number;
    name: string;
    url: string;
    lastUpdated: string;
    isFavorite: boolean;
  };
  index: number;
  onFavoriteToggle?: (id: number, isFavorite: boolean) => void;
  onDeleteClick: (systemId: number) => void;
}
