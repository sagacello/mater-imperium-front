import { useCallback } from 'react';
import { SystemWithIndex } from '../pages/SystemsDashboard/types';
import { COLUMN_TITLES } from './constatns';

export const useDragAndDrop = (
  columns: SystemWithIndex[][],
  updateColumns: (systems: SystemWithIndex[]) => void,
) => {
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

      updateColumns(newColumns.flat());
    },
    [columns, updateColumns],
  );

  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
  };
};
