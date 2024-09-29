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
      systems.forEach((system, index) => {
        const columnIndex = COLUMN_TITLES.indexOf(system.status);
        if (columnIndex !== -1) {
          newColumns[columnIndex].push({ ...system, index: index + 1 });
        }
      });
    } else {
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

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    columnIndex: number,
    cardIndex: number,
  ) => {
    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({ columnIndex, cardIndex }),
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetColumnIndex: number,
  ) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const { columnIndex: sourceColumnIndex, cardIndex: sourceCardIndex } = data;

    if (sourceColumnIndex === targetColumnIndex) return;

    const newColumns = [...columns];
    const [movedCard] = newColumns[sourceColumnIndex].splice(
      sourceCardIndex,
      1,
    );

    movedCard.status = COLUMN_TITLES[targetColumnIndex];

    newColumns[targetColumnIndex].push(movedCard);
    setColumns(newColumns);
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
            <div
              key={columnIndex}
              className="systems-column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, columnIndex)}
            >
              <div className="column-title">{COLUMN_TITLES[columnIndex]}</div>
              {columnSystems.map((system, cardIndex) => (
                <div
                  key={system.index}
                  draggable
                  onDragStart={(e) =>
                    handleDragStart(e, columnIndex, cardIndex)
                  }
                >
                  <SystemCard system={system} index={system.index} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
