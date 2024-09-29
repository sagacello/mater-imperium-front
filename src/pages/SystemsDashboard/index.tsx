import React, { useState, useEffect } from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { SystemCard } from '../../components/SystemCard';
import { systems } from '../../mocks/mockSystems';
import { SystemWithIndex } from './types';

const COLUMN_TITLES = [
  'Projetos finalizados',
  'Projetos em andamento',
  'Projetos parados',
  'Projetos atrasados',
];

export const SystemsDashboard: React.FC = () => {
  const [filteredSystems, setFilteredSystems] = useState<SystemWithIndex[]>(
    systems.map((system, index) => ({ ...system, index: index + 1 })),
  );
  const [columns, setColumns] = useState<SystemWithIndex[][]>([]);

  useEffect(() => {
    const newColumns: SystemWithIndex[][] = COLUMN_TITLES.map(() => []);

    if (filteredSystems.length === systems.length) {
      // Lógica de inicialização
      systems.forEach((system, index) => {
        const columnIndex = COLUMN_TITLES.indexOf(system.status);
        if (columnIndex !== -1) {
          newColumns[columnIndex].push({ ...system, index: index + 1 });
        }
      });
    } else {
      // Lógica de filtragem
      filteredSystems.forEach((system) => {
        const columnIndex = COLUMN_TITLES.indexOf(system.status);
        if (columnIndex !== -1) {
          newColumns[columnIndex].push(system);
        }
      });
    }

    setColumns(newColumns);
  }, [filteredSystems]);

  const handleSearch = (searchTerm: string) => {
    const filtered = systems
      .map((system, index) => ({ ...system, index: index + 1 }))
      .filter((system) =>
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
        <div className="systems-columns">
          {columns.map((columnSystems, columnIndex) => (
            <div key={columnIndex} className="systems-column">
              <div className="column-title">{COLUMN_TITLES[columnIndex]}</div>
              {columnSystems.map((system) => (
                <SystemCard
                  key={system.index}
                  system={system}
                  index={system.index}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
