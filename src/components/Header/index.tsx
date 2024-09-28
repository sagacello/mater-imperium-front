import React, { useEffect, useState } from 'react';
import './styles.css';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ avatarUrl, onSearch }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const SearchIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <img src={avatarUrl} alt="Avatar" className="avatar" />
        </div>
        <div className="header-center">
          <h1>Dashboard</h1>
        </div>
        <div className="header-right">
          <span className="time">{formatTime(dateTime)}</span>
          <span className="date">{formatDate(dateTime)}</span>
          <div className="search-bar">
            <SearchIcon />
            <input
              type="text"
              placeholder="Pesquisar sistemas..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
