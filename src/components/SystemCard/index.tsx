import React, { useState, useCallback } from 'react';
import './styles.css';
import { SystemCardProps } from './types';
import StarIcon from './icons/StarIcon';
import CheckIcon from './icons/CheckIcon';
import TrashIcon from './icons/TrashIcon';
import EditIcon from './icons/EditIcon';

export const SystemCard: React.FC<SystemCardProps> = ({
  system,
  index,
  onFavoriteToggle,
  onDeleteClick,
  onCardClick,
  onNameChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(system.name);

  const getColor = (index: number) => {
    const colors = ['#FFB6C1', '#ADD8E6', '#90EE90', '#FFD700'];
    return colors[index % colors.length];
  };

  const cardColor = getColor(index);

  const handleFavoriteClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (onFavoriteToggle) {
        onFavoriteToggle(system.id, !system.isFavorite);
      }
      e.currentTarget.blur();
    },
    [onFavoriteToggle, system.id, system.isFavorite],
  );

  const handleCheckClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onCardClick(system.id);
      e.currentTarget.blur();
    },
    [onCardClick, system.id],
  );

  const handleTrashClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onDeleteClick(system.id);
      e.currentTarget.blur();
    },
    [system.id, onDeleteClick],
  );

  const handleEditClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsEditing(true);
    },
    [],
  );

  const isValidName = (name: string) => {
    const regex = /^[a-zA-Z0-9 .]*$/;
    return regex.test(name);
  };

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newName = e.target.value;
      if (isValidName(newName) || newName === '') {
        setEditedName(newName);
      }
    },
    [],
  );

  const handleConfirmEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsEditing(false);
    if (onNameChange) {
      onNameChange(system.id, editedName);
    }
  };

  const handleCardClick = useCallback(() => {
    if (!isEditing) {
      window.open(system.url, '_blank', 'noopener,noreferrer');
      onCardClick(system.id);
    }
  }, [system.url, onCardClick, system.id, isEditing]);

  const formatName = (name: string) => {
    if (name.length > 30) {
      return name.slice(0, 20) + '\n' + name.slice(20, 30) + '...';
    }
    return name;
  };

  return (
    <div
      className="system-card"
      onClick={handleCardClick}
      style={
        {
          '--card-color': cardColor,
          cursor: isEditing ? 'default' : 'pointer',
        } as React.CSSProperties
      }
    >
      <div className="system-card-content">
        <div className="system-card-main">
          <div
            className="system-card-index"
            style={{ backgroundColor: cardColor }}
          >
            {index}
          </div>
          <div className="system-card-details">
            {isEditing ? (
              <>
                <button onClick={handleConfirmEdit} className="confirm-button">
                  Confirmar
                </button>
                <input
                  type="text"
                  value={editedName}
                  onChange={handleNameChange}
                  autoFocus
                  className="system-card-input"
                />
              </>
            ) : (
              <>
                <button onClick={handleEditClick} className="icon-button">
                  <EditIcon />
                </button>
                <h2 className="system-card-title">{formatName(system.name)}</h2>
              </>
            )}
            <p>Última atualização: {system.lastUpdated}</p>
          </div>
        </div>
        <div
          className="system-card-actions"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={handleFavoriteClick} className="icon-button">
            <StarIcon filled={system.isFavorite} />
          </button>
          <button onClick={handleCheckClick} className="icon-button">
            <CheckIcon checked={system.isChecked} />
          </button>
          <button onClick={handleTrashClick} className="icon-button">
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
