import React, { useCallback, useState } from 'react';
import './styles.css';
import { SystemCardProps } from './types';

export const SystemCard: React.FC<SystemCardProps> = ({
  system,
  index,
  onFavoriteToggle,
  onDeleteClick,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const getColor = (index: number) => {
    const colors = ['#FFB6C1', '#ADD8E6', '#90EE90', '#FFD700'];
    return colors[index % colors.length];
  };

  const cardColor = getColor(index);

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? 'var(--card-color)' : 'none'}
      stroke={filled ? 'var(--card-color)' : 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const CheckIcon = ({ checked }: { checked: boolean }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={checked ? 'var(--card-color)' : 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const TrashIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );

  const handleFavoriteClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (onFavoriteToggle) {
        onFavoriteToggle(system.id, !system.isFavorite);
      }
      e.currentTarget.blur();
    },
    [onFavoriteToggle, system.id, system.isFavorite],
  );

  const handleCheckClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsChecked((prevChecked) => !prevChecked);
      e.currentTarget.blur();
    },
    [],
  );

  const handleTrashClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onDeleteClick(system.id);
      e.currentTarget.blur();
    },
    [system.id, onDeleteClick],
  );

  const handleCardClick = useCallback(() => {
    window.open(system.url, '_blank', 'noopener,noreferrer');
  }, [system.url]);

  return (
    <div
      className="system-card"
      onClick={handleCardClick}
      style={
        {
          '--card-color': cardColor,
          cursor: 'pointer',
        } as React.CSSProperties
      }
    >
      <div className="system-card-content">
        <div className="system-card-main">
          <div
            className="system-card-index"
            style={{ backgroundColor: cardColor }}
          >
            {index}
          </div>
          <div className="system-card-details">
            <h2>{system.name}</h2>
            <p>Última atualização: {system.lastUpdated}</p>
          </div>
        </div>
        <div
          className="system-card-actions"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={handleFavoriteClick} className="icon-button">
            <StarIcon filled={system.isFavorite} />
          </button>
          <button onClick={handleCheckClick} className="icon-button">
            <CheckIcon checked={isChecked} />
          </button>
          <button onClick={handleTrashClick} className="icon-button">
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
