import React, { useState } from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { SystemCard } from '../../components/SystemCard';
import { System } from './types';

const systems: System[] = [
  { name: 'System 1', url: 'https://system1.com', lastUpdated: '5m' },
  { name: 'System 2', url: '/system2', lastUpdated: '10m' },
  { name: 'System 3', url: 'https://system3.com', lastUpdated: '15m' },
  { name: 'System 4', url: '/system4', lastUpdated: '20m' },
  { name: 'System 5', url: 'https://system5.com', lastUpdated: '25m' },
  { name: 'System 6', url: '/system6', lastUpdated: '30m' },
  { name: 'System 7', url: 'https://system7.com', lastUpdated: '35m' },
  { name: 'System 8', url: '/system8', lastUpdated: '40m' },
  { name: 'System 9', url: 'https://system9.com', lastUpdated: '45m' },
  { name: 'System 10', url: '/system10', lastUpdated: '50m' },
  { name: 'System 11', url: 'https://system11.com', lastUpdated: '55m' },
  { name: 'System 12', url: '/system12', lastUpdated: '60m' },
  { name: 'System 13', url: 'https://system13.com', lastUpdated: '65m' },
  { name: 'System 14', url: '/system14', lastUpdated: '70m' },
  { name: 'System 15', url: 'https://system15.com', lastUpdated: '75m' },
  { name: 'System 16', url: '/system16', lastUpdated: '80m' },
];

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
        avatarUrl="https://example.com/megaman-avatar.jpg"
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

export default SystemsDashboard;
