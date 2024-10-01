import React from 'react';
import './styles.css';
import { ModalExcludeSystemsProps } from './types';

export const ModalExcludeSystems: React.FC<ModalExcludeSystemsProps> = ({
  onClose,
  onDelete,
}) => {
  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal-content">
        <h2>Tem certeza que deseja excluir essa visualização do sistema?</h2>
        <div className="button-group">
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancelar
          </button>
          <button type="button" className="submit-btn" onClick={onDelete}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};
