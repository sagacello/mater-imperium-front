import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { SystemCard } from '../../components/SystemCard';
import { systems } from '../../mocks/mockSystems';
import { SystemWithIndex } from './types';
import { Sidebar } from '../../components/SideBar';
import { ModalAddSystem } from '../../components/ModalAddSystem';
import { ModalExcludeSystems } from '../../components/ModalExcludeSystems';
import { Footer } from '../../components/Footer';
import { ResponsiveSidebar } from '../../components/ResponsiveSidebar';
import { COLUMN_TITLES } from '../../hooks/constatns';
import { useSystems } from '../../hooks/useSystems';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

export const SystemsDashboard: React.FC = () => {
  const {
    allSystems,
    columns,
    handleSearch,
    handleFavoriteToggle,
    setAllSystems,
    setFilteredSystems,
    setColumns,
  } = useSystems(
    systems.map((system, index) => ({ ...system, index: index + 1 })),
  );

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isExcludeModalOpen, setIsExcludeModalOpen] = useState(false);
  const [systemToDelete, setSystemToDelete] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { handleDragStart, handleDragOver, handleDrop } = useDragAndDrop(
    columns,
    (updatedSystems) => {
      setAllSystems(updatedSystems);
      setFilteredSystems(updatedSystems);
    },
  );

  const handleAddSystem = (newSystem: SystemWithIndex) => {
    const updatedSystems = [
      ...allSystems,
      { ...newSystem, index: allSystems.length + 1 },
    ];

    setAllSystems(updatedSystems);
    setFilteredSystems(updatedSystems);

    const updatedColumns: SystemWithIndex[][] = COLUMN_TITLES.map(() => []);
    updatedSystems.forEach((system) => {
      const columnIndex = COLUMN_TITLES.indexOf(system.status);
      if (columnIndex !== -1) {
        updatedColumns[columnIndex].push(system);
      }
    });
    setColumns(updatedColumns);

    setIsAddModalOpen(false);
  };

  const handleCardClick = (systemId: number) => {
    const updatedSystems = allSystems.map((system) =>
      system.id === systemId ? { ...system, isChecked: true } : system,
    );
    setAllSystems(updatedSystems);
    setFilteredSystems(updatedSystems);

    const updatedColumns: SystemWithIndex[][] = COLUMN_TITLES.map(() => []);
    updatedSystems.forEach((system) => {
      const columnIndex = COLUMN_TITLES.indexOf(system.status);
      if (columnIndex !== -1) {
        updatedColumns[columnIndex].push(system);
      }
    });
    setColumns(updatedColumns);
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

      const updatedColumns: SystemWithIndex[][] = COLUMN_TITLES.map(() => []);
      updatedSystems.forEach((system) => {
        const columnIndex = COLUMN_TITLES.indexOf(system.status);
        if (columnIndex !== -1) {
          updatedColumns[columnIndex].push(system);
        }
      });
      setColumns(updatedColumns);

      setIsExcludeModalOpen(false);
      setSystemToDelete(null);
    }
  }, [
    systemToDelete,
    allSystems,
    setAllSystems,
    setFilteredSystems,
    setColumns,
  ]);

  const handleNameChange = (systemId: number, newName: string) => {
    const updatedSystems = allSystems.map((system) =>
      system.id === systemId ? { ...system, name: newName } : system,
    );
    setAllSystems(updatedSystems);
    setFilteredSystems(updatedSystems);
  };

  return (
    <div className="systems-dashboard">
      <Header
        avatarUrl="https://i.pravatar.cc/300"
        username="Usuário"
        onSearch={handleSearch}
      />
      {windowWidth < 600 && (
        <ResponsiveSidebar onAddSystem={() => setIsAddModalOpen(true)} />
      )}
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
                      onCardClick={handleCardClick}
                      onNameChange={handleNameChange}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {windowWidth >= 600 && (
          <Sidebar onAddSystem={() => setIsAddModalOpen(true)} />
        )}
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
      <Footer />
    </div>
  );
};
