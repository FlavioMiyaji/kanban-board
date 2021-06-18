import React from 'react';
import { KanbanCard } from '.';

import './KanbanColumn.css';

interface IStage {
  name: string;
  tasks: ITask[];
  color?: string;
}

interface ITask {
  id: string;
  summary: string;
}

enum EDirection {
  forth = '>',
  back = '<',
}

interface IMove {
  task: ITask;
  direction: EDirection;
}

interface IColumnProps {
  stage: IStage;
  onMoveFrom: Function;
  first: boolean;
  last: boolean;
}

const Column: React.FC<IColumnProps> = (props): JSX.Element => {
  const {
    stage,
    onMoveFrom,
    first,
    last,
  } = props;
  const { name, tasks, color = 'aqua' } = stage;
  const handleMoveFrom = ({ task, direction }: IMove) => {
    onMoveFrom({ stage, task, direction });
  }
  return (
    <div className="kanban-column" >
      <h1
        style={{
          backgroundColor: color,
          borderColor: color,
        }}
      >
        {name}
      </h1>
      <div className="items" style={{ borderColor: color }}>
        {tasks.map(task => (
          <KanbanCard
            key={task.id}
            task={task}
            onMove={handleMoveFrom}
            first={first}
            last={last}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
