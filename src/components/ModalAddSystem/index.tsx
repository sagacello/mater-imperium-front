import React, { useState } from 'react';
import './styles.css';

interface ModalProps {
  onClose: () => void;
}

const statuses = [
  'Projeto finalizado',
  'Projeto em andamento',
  'Projeto parado',
  'Projeto atrasado',
];

export const ModalAddSystem: React.FC<ModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState(statuses[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Novo card:', { name, url, status });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Adicionar Novo Sistema</h2>
        <div className="dropdown">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="dropdown-select"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
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
