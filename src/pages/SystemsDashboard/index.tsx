import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { SystemCard } from '../../components/SystemCard';
import { systems } from '../../mocks/mockSystems';
import { SystemWithIndex } from './types';
import { Sidebar } from '../../components/SideBar';

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

  const handleFavoriteToggle = (systemId: number, isFavorite: boolean) => {
    const updatedColumns = columns.map((column) => {
      const updatedColumn = column.map((system) => {
        if (system.id === systemId) {
          return { ...system, isFavorite };
        }
        return system;
      });

      return updatedColumn.sort((a, b) => {
        if (a.isFavorite === b.isFavorite) {
          return a.index - b.index;
        }
        return a.isFavorite ? -1 : 1;
      });
    });

    setColumns(updatedColumns);
  };

  const handleDragStart = useCallback(
    (
      e: React.DragEvent<HTMLDivElement>,
      columnIndex: number,
      cardIndex: number,
    ) => {
      e.dataTransfer.setData(
        'text/plain',
        JSON.stringify({ columnIndex, cardIndex }),
      );
    },
    [],
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>, targetColumnIndex: number) => {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData('text/plain'));
      const { columnIndex: sourceColumnIndex, cardIndex: sourceCardIndex } =
        data;

      if (sourceColumnIndex === targetColumnIndex) return;

      const newColumns = [...columns];

      const [movedCard] = newColumns[sourceColumnIndex].splice(
        sourceCardIndex,
        1,
      );

      movedCard.status = COLUMN_TITLES[targetColumnIndex];
      movedCard.isFavorite = false;

      newColumns[targetColumnIndex].push(movedCard);

      setColumns(newColumns);
    },
    [columns],
  );

  return (
    <div className="systems-dashboard">
      <Header
        avatarUrl="https://i.pravatar.cc/300"
        username="Usuário"
        onSearch={handleSearch}
      />

      <div className="main-content">
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
                    key={system.id}
                    draggable
                    onDragStart={(e) =>
                      handleDragStart(e, columnIndex, cardIndex)
                    }
                  >
                    <SystemCard
                      system={system}
                      index={system.index}
                      onFavoriteToggle={handleFavoriteToggle}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
