import { useState, useEffect, useCallback } from 'react';
import { SystemWithIndex } from '../pages/SystemsDashboard/types';
import { COLUMN_TITLES } from './constatns';

export const useSystems = (initialSystems: SystemWithIndex[]) => {
  const [allSystems, setAllSystems] =
    useState<SystemWithIndex[]>(initialSystems);
  const [filteredSystems, setFilteredSystems] =
    useState<SystemWithIndex[]>(initialSystems);
  const [columns, setColumns] = useState<SystemWithIndex[][]>([]);

  const updateColumns = useCallback((systems: SystemWithIndex[]) => {
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
  }, []);

  useEffect(() => {
    updateColumns(filteredSystems);
  }, [filteredSystems, updateColumns]);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      const filtered = allSystems.filter((system) => {
        const nameMatch = system.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const lastUpdatedMatch = system.lastUpdated
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return nameMatch || lastUpdatedMatch;
      });
      setFilteredSystems(filtered);
    },
    [allSystems],
  );

  const handleFavoriteToggle = useCallback(
    (systemId: number, isFavorite: boolean) => {
      const updatedSystems = allSystems.map((system) =>
        system.id === systemId ? { ...system, isFavorite } : system,
      );
      setAllSystems(updatedSystems);
      setFilteredSystems(updatedSystems);
    },
    [allSystems],
  );

  return {
    allSystems,
    filteredSystems,
    columns,
    handleSearch,
    handleFavoriteToggle,
    setAllSystems,
    setFilteredSystems,
    setColumns,
  };
};
