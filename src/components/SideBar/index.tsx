import React from 'react';
import './styles.css';

const HomeIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? 'var(--card-color)' : 'none'}
    stroke={filled ? 'var(--card-color)' : 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12L12 3l9 9M9 21V9h6v12" />
  </svg>
);

const PlusIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? 'var(--card-color)' : 'none'}
    stroke={filled ? 'var(--card-color)' : 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="icon">
        <HomeIcon filled={true} />
      </div>
      <div className="icon">
        <PlusIcon filled={false} />
      </div>
    </div>
  );
};
