import { System } from '../CommonInterface';

export interface SystemCardProps {
  system: System;
  index: number;
  onFavoriteToggle?: (id: number, isFavorite: boolean) => void;
  onDeleteClick: (systemId: number) => void;
  onCardClick: (systemId: number) => void;
}
