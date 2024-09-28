import React, { useEffect, useState } from 'react';
import './styles.css';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ avatarUrl }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    setDateTime(new Date());
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('pt-BR', options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={avatarUrl} alt="Avatar" className="avatar" />
      </div>
      <div className="header-center">
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <span className="time">{formatTime(dateTime)}</span>
        <span className="date">{formatDate(dateTime)}</span>
      </div>
    </header>
  );
};
