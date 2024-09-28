import React from 'react';
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

export const SystemCard: React.FC<SystemCardProps> = ({ system, index }) => {
  const cardColor = getColor(index);

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
    </a>
  );
};
