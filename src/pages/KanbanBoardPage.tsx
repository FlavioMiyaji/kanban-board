import React from 'react';
import {
  TaskForm,
  KanbanBoard,
} from '../components'

import './KanbanBoardPage.css';

const KanbanBoardPage: React.FC = (): JSX.Element => {
  return (
    <div className="kanban-board-container">
      <TaskForm />
      <KanbanBoard />
    </div>
  );
}

export default KanbanBoardPage;
