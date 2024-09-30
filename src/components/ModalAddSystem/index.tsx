import React, { useState } from 'react';
import './styles.css';
import { ModalProps, SystemWithIndex } from './types';
import { COLUMN_TITLES } from './constants';

export const ModalAddSystem: React.FC<ModalProps> = ({
  onClose,
  onAddSystem,
}) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState(COLUMN_TITLES[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSystem: SystemWithIndex = {
      id: Date.now(),
      name,
      url,
      lastUpdated: '0m',
      status,
      isFavorite: false,
      index: 0,
    };
    onAddSystem(newSystem);
    onClose();
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal-content">
        <h2>Adicionar Novo Sistema</h2>
        <div className="dropdown">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="dropdown-select"
          >
            {COLUMN_TITLES.map((columnTitle) => (
              <option key={columnTitle} value={columnTitle}>
                {columnTitle}
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nome do Sistema"
            />
            <label htmlFor="name">Nome do Sistema</label>
          </div>
          <div className="form-group">
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              placeholder="URL do Sistema"
            />
            <label htmlFor="url">URL do Sistema</label>
          </div>
          <div className="button-group">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="submit-btn">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
