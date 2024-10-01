import React from 'react';
import './styles.css';
import { HomeIcon } from '../icons/HomeIcon';
import { PlusIcon } from '../icons/PlusIcon';

interface SidebarProps {
  onAddSystem: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onAddSystem }) => {
  return (
    <div className="sidebar">
      <div className="icon" data-tooltip="Navegar para home">
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
  );
};
