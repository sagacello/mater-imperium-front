import React, { useState } from 'react';
import './styles.css';
import { ResponsiveSidebarProps } from './types';

const HomeIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={filled ? '#bdc3c7' : 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const PlusIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className="plus-icon"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={filled ? '#bdc3c7' : 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = ({
  onAddSystem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`responsive-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="menu-items">
          <div className="respnsive-icon" data-tooltip="Navegar para home">
            <HomeIcon filled={true} />
          </div>
          <div
            className="icon"
            data-tooltip="Adicionar novo sistema"
            onClick={onAddSystem}
          >
            <PlusIcon filled={true} />
          </div>
        </div>
      )}
    </div>
  );
};
