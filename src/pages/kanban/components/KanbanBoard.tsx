import React from 'react';
import {
  KanbanColumn,
} from '.';

import './KanbanBoard.css';

interface IStage {
  name: string;
  tasks: ITask[];
}

interface ITask {
  summary: string;
}

interface IKanbanBoardProps {
  stages: IStage[];
}

const KanbanBoard: React.FC<IKanbanBoardProps> = ({ stages }): JSX.Element => {
  return (
    <div className="kanban-board">
      {stages.map(stage => (
        <KanbanColumn stage={stage} />
      ))}
    </div>
  );
}

export default KanbanBoard;
