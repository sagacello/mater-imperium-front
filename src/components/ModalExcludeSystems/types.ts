export interface ModalProps {
  onClose: () => void;
  onAddSystem: (newSystem: SystemWithIndex) => void;
}

export interface ModalExcludeSystemsProps {
  onClose: () => void;
  onDelete: () => void;
}

export interface System {
  id: number;
  name: string;
  url: string;
  lastUpdated: string;
  status: string;
  isFavorite: boolean;
}

export interface SystemWithIndex extends System {
  index: number;
}
