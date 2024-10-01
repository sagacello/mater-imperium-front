import React, { useEffect, useState, useRef, useCallback } from 'react';
import './styles.css';
import { HeaderProps } from './types';
import { SearchIcon } from '../icons/SearchIcon';

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
