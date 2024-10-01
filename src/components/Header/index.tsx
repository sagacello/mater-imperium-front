import React, { useEffect, useState, useRef, useCallback } from 'react';
import './styles.css';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({
  avatarUrl,
  onSearch,
  username,
}) => {
  const [dateTime, setDateTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const timerRef = useRef<number | null>(null);

  const updateDateTime = useCallback(() => {
    setDateTime(new Date());
  }, []);

  useEffect(() => {
    updateDateTime();
    timerRef.current = window.setInterval(updateDateTime, 1000);

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [updateDateTime]);

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
          <span className="user-name">{username}</span>
        </div>
        <div className="header-center">
          <h1>Acesso aos Sistemas</h1>
        </div>
        <div className="header-right">
          <span className="time">{formatTime(dateTime)}</span>
          <span className="date">{formatDate(dateTime)}</span>
        </div>
      </div>
      <div className="search-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Pesquisar sistemas..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};
