import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { SystemCard } from '../../components/SystemCard';
import { systems } from '../../mocks/mockSystems';
import { SystemWithIndex } from './types';
import { Sidebar } from '../../components/SideBar';
import { ModalAddSystem } from '../../components/ModalAddSystem';
import { ModalExcludeSystems } from '../../components/ModalExcludeSystems';
import { COLUMN_TITLES } from './constatns';

export const SystemsDashboard: React.FC = () => {
  const [allSystems, setAllSystems] = useState<SystemWithIndex[]>(
    systems.map((system, index) => ({ ...system, index: index + 1 })),
  );
  const [filteredSystems, setFilteredSystems] =
    useState<SystemWithIndex[]>(allSystems);
  const [columns, setColumns] = useState<SystemWithIndex[][]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isExcludeModalOpen, setIsExcludeModalOpen] = useState(false);
  const [systemToDelete, setSystemToDelete] = useState<number | null>(null);

  useEffect(() => {
    updateColumns(filteredSystems);
  }, [filteredSystems]);

  const updateColumns = (systems: SystemWithIndex[]) => {
    const newColumns: SystemWithIndex[][] = COLUMN_TITLES.map(() => []);
    systems.forEach((system) => {
      const columnIndex = COLUMN_TITLES.indexOf(system.status);
      if (columnIndex !== -1) {
        newColumns[columnIndex].push(system);
      }
    });
    newColumns.forEach((column) => {
      column.sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0));
    });
    setColumns(newColumns);
  };

  const handleSearch = useCallback(
    (searchTerm: string) => {
      const filtered = allSystems.filter((system) =>
        system.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredSystems(filtered);
    },
    [allSystems],
  );

  const handleFavoriteToggle = (systemId: number, isFavorite: boolean) => {
    const updatedSystems = allSystems.map((system) =>
      system.id === systemId ? { ...system, isFavorite } : system,
    );
    setAllSystems(updatedSystems);
    setFilteredSystems(updatedSystems);
    updateColumns(updatedSystems);
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
      updateAllSystems(newColumns);
    },
    [columns],
  );

  const updateAllSystems = (newColumns: SystemWithIndex[][]) => {
    const updatedSystems = newColumns.flat();
    setAllSystems(updatedSystems);
    setFilteredSystems(updatedSystems);
  };

  const handleAddSystem = (newSystem: SystemWithIndex) => {
    const updatedSystems = [
      ...allSystems,
      { ...newSystem, index: allSystems.length + 1 },
    ];
    setAllSystems(updatedSystems);
    setFilteredSystems(updatedSystems);
    updateColumns(updatedSystems);
    setIsAddModalOpen(false);
  };

  const handleDeleteClick = useCallback((systemId: number) => {
    setSystemToDelete(systemId);
    setIsExcludeModalOpen(true);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (systemToDelete !== null) {
      const updatedSystems = allSystems.filter(
        (system) => system.id !== systemToDelete,
      );
      setAllSystems(updatedSystems);
      setFilteredSystems(updatedSystems);
      updateColumns(updatedSystems);
      setIsExcludeModalOpen(false);
      setSystemToDelete(null);
    }
  }, [allSystems, systemToDelete]);

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
                      onDeleteClick={handleDeleteClick}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Sidebar onAddSystem={() => setIsAddModalOpen(true)} />
      </div>
      {isAddModalOpen && (
        <ModalAddSystem
          onClose={() => setIsAddModalOpen(false)}
          onAddSystem={handleAddSystem}
        />
      )}
      {isExcludeModalOpen && (
        <ModalExcludeSystems
          onClose={() => setIsExcludeModalOpen(false)}
          onDelete={handleDeleteConfirm}
        />
      )}
    </div>
  );
};
