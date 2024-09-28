import React, { useState } from 'react';
import './styles.css';

interface SystemCardProps {
  system: {
    name: string;
    url: string;
    lastUpdated: string;
  };
  index: number;
}

const getColor = (index: number) => {
  const colors = ['#FFB6C1', '#ADD8E6', '#90EE90', '#FFD700'];
  return colors[index % colors.length];
};

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? 'yellow' : 'none'}
    stroke="currentColor"
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

export const SystemCard: React.FC<SystemCardProps> = ({ system, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const cardColor = getColor(index);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const handleCheckClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChecked(!isChecked);
  };

  return (
    <a
      href={system.url}
      target="_blank"
      className="system-card"
      style={
        {
          '--card-color': cardColor,
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
            <p>Last updated: {system.lastUpdated}</p>
          </div>
        </div>
        <div className="system-card-actions">
          <button onClick={handleFavoriteClick} className="icon-button">
            <StarIcon filled={isFavorite} />
          </button>
          <button onClick={handleCheckClick} className="icon-button">
            <CheckIcon checked={isChecked} />
          </button>
        </div>
      </div>
    </a>
  );
};
