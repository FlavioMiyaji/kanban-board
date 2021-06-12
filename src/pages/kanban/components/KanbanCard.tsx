import React from 'react';

import './KanbanCard.css';

interface ITask {
  summary: string;
}

interface IKanbanCardProps {
  task: ITask;
}

const KanbanCard: React.FC<IKanbanCardProps> = ({ task }): JSX.Element => {
  const { summary } = task;
  return (
    <div className="kanban-card">
      {summary}
    </div>
  );
}

export default KanbanCard;
