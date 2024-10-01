import { System } from '../CommonInterface';

export interface ModalProps {
  onClose: () => void;
  onAddSystem: (newSystem: SystemWithIndex) => void;
}

export interface SystemWithIndex extends System {
  index: number;
}
