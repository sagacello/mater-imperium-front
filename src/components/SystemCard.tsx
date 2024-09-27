import React from 'react';
import './SystemCard.css';

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

export const SystemCard: React.FC<SystemCardProps> = ({ system, index }) => {
  return (
    <a
      href={system.url}
      target="_blank"
      rel="noopener noreferrer"
      className="system-card"
    >
      <div className="system-card-content">
        <div
          className="system-card-index"
          style={{ backgroundColor: getColor(index) }}
        >
          {index}
        </div>
        <div className="system-card-details">
          <h2>{system.name}</h2>
          <p>Last updated: {system.lastUpdated}</p>
        </div>
      </div>
    </a>
  );
};
