import React from 'react';
import {
  KanbanColumn,
} from '.';

import './KanbanBoard.css';

interface IStage {
  id: string;
  name: string;
  tasks: ITask[];
}

interface ITask {
  id: string;
  summary: string;
}

interface IBoardProps {
  stages: IStage[];
  onMoveFrom: Function;
}

const Board: React.FC<IBoardProps> = (props): JSX.Element => {
  const {
    stages,
    onMoveFrom,
  } = props;
  if (!stages) return <div className="kanban-board" />;
  const size = stages.length;
  return (
    <div className="kanban-board">
      {stages.map((stage, index) => (
        <KanbanColumn
          key={stage.id}
          stage={stage}
          onMoveFrom={onMoveFrom}
          first={index === 0}
          last={(index + 1) === size}
        />
      ))}
    </div>
  );
}

export default Board;
