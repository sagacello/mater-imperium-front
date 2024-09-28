import React, { useState } from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { SystemCard } from '../../components/SystemCard';
import { systems } from '../../mocks/mockSystems';

export const SystemsDashboard: React.FC = () => {
  const [filteredSystems, setFilteredSystems] = useState(systems);

  const handleSearch = (searchTerm: string) => {
    const filtered = systems.filter((system) =>
      system.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredSystems(filtered);
  };

  return (
    <div className="systems-dashboard">
      <Header
        avatarUrl="https://i.pravatar.cc/300"
        username="Usuário"
        onSearch={handleSearch}
      />
      <div className="systems-container">
        <div className="systems-list">
          {filteredSystems.map((system, index) => (
            <SystemCard key={index} system={system} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};
