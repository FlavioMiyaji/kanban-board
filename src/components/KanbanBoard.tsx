import React from 'react';
import {
  KambanColumn,
} from './';

import './KanbanBoard.css';

const KanbanBoard: React.FC = (): JSX.Element => {
  return (
    <div className="kanban-board">
      <KambanColumn />
      <KambanColumn />
      <KambanColumn />
      <KambanColumn />
      <KambanColumn />
    </div>
  );
}

export default KanbanBoard;
