import React from 'react';
import './styles.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <div
          className="circle"
          style={{ backgroundColor: 'rgb(255, 182, 193)' }}
        ></div>
        <span>Offline</span>
      </div>
      <div className="footer-item">
        <div
          className="circle"
          style={{ backgroundColor: 'rgb(144, 238, 144)' }}
        ></div>
        <span>Online</span>
      </div>
      <div className="footer-item">
        <div
          className="circle"
          style={{ backgroundColor: 'rgb(255, 215, 0)' }}
        ></div>
        <span>Em manutenção</span>
      </div>
      <div className="footer-item">
        <div
          className="circle"
          style={{ backgroundColor: 'rgb(173, 216, 230)' }}
        ></div>
        <span>Projetos visualizados</span>
      </div>
    </footer>
  );
};
