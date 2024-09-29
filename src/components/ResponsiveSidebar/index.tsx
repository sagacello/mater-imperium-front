import React from 'react';
import './styles.css';

export const ResponsiveSidebar: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <div className="hamburger-menu" onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
