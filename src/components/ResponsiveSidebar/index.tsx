import React from 'react';
import './styles.css';
import { ResponsiveSidebarProps } from './types';
import { HomeIcon } from '../icons/HomeIcon';
import { PlusIcon } from '../icons/PlusIcon';

export const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = ({
  onAddSystem,
}) => {
  return (
    <div className="responsive-sidebar">
      <div className="responsive-icon" data-tooltip="Navegar para home">
        <HomeIcon filled={true} />
      </div>
      <div
        className="responsive-icon"
        data-tooltip="Adicionar novo sistema"
        onClick={onAddSystem}
      >
        <PlusIcon filled={true} />
      </div>
    </div>
  );
};
