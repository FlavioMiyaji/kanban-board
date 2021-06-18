import React, {
  useCallback,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import {
  KanbanTaskCreate,
  KanbanBoard,
} from './components';
import logo from '../../assets/logo.svg'

import './KanbanBoardPage.css';

enum EDirection {
  forth = '>',
  back = '<',
}

interface IMoveFrom {
  stage: IStage;
  task: ITask;
  direction: EDirection;
}

interface IStage {
  id: string;
  name: string;
  tasks: ITask[];
}

interface IUser {
  name: string;
  photo?: string;
}

interface ITask {
  id: string;
  summary: string;
  assigned?: IUser;
  type?: string;
}

const text = `Lorem ipsum dolor sit amet 
consectetur adipisicing elit. Fugiat qui 
distinctio culpa inventore. Vero ipsum 
quas nesciunt. Non, facilis ab.`;

const initStages: IStage[] = [{
  id: uuid(),
  name: 'TODO',
  tasks: [{
    id: uuid(),
    summary: text,
    assigned: { name: 'Flavio' },
    type: 'Development',
  }, {
    id: uuid(),
    summary: text,
  }, {
    id: uuid(),
    summary: text,
    assigned: { name: 'Flavio', photo: 'user-avatar.jpeg' },
    type: 'Planning',
  }],
}, {
  id: uuid(),
  name: 'Analyzing',
  tasks: [{ id: uuid(), summary: text }],
}, {
  id: uuid(),
  name: 'Analyzed',
  tasks: [{ id: uuid(), summary: text }],
}, {
  id: uuid(),
  name: 'Developing',
  tasks: [
    { id: uuid(), summary: text },
    { id: uuid(), summary: text },
    { id: uuid(), summary: text },
    { id: uuid(), summary: text },
    { id: uuid(), summary: text },
  ],
}, {
  id: uuid(),
  name: 'Developed',
  tasks: [],
}, {
  id: uuid(),
  name: 'Developed',
  tasks: [],
}, {
  id: uuid(),
  name: 'Testing',
  tasks: [],
}, {
  id: uuid(),
  name: 'Done',
  tasks: [{ id: uuid(), summary: text }],
}];

const KanbanBoardPage: React.FC = (): JSX.Element => {
  const [stages, setStages] = useState<IStage[]>([...initStages]);
  const handleAddTask = useCallback((summary: string) => {
    setStages(stages => {
      const [first, ...rest] = stages;
      let { tasks } = first;
      tasks = [...tasks, { id: uuid(), summary }];
      return [{
        ...first, tasks,
      }, ...rest];
    });
  }, [setStages]);
  const handleMoveFrom = useCallback((event: IMoveFrom) => {
    const deleteTask = (stage: IStage, task: ITask) => ({
      ...stage,
      tasks: stage.tasks.filter(currentTask => (currentTask.id !== task.id)),
    });
    const addFirstTask = (stage: IStage, task: ITask) => ({
      ...stage,
      tasks: [task, ...stage.tasks],
    });
    const addLastTask = (stage: IStage, task: ITask) => ({
      ...stage,
      tasks: [...stage.tasks, task],
    });
    const { stage: from, task, direction } = event;
    setStages(prevStages => {
      const fromIndex = prevStages.findIndex(({ id }) => id === from.id);
      const isLast = (fromIndex + 1) >= prevStages.length;
      const isFirst = fromIndex <= 0;
      return prevStages.map((stage, index) => {
        if (stage.id === from.id) return deleteTask(stage, task);
        switch (direction) {
          case EDirection.back: {
            if (isFirst) return stage;
            const isNext = fromIndex === (index + 1);
            if (isNext) return addLastTask(stage, task);
            break;
          }
          case EDirection.forth: {
            if (isLast) return stage;
            const isPrevious = fromIndex === (index - 1);
            if (isPrevious) return addFirstTask(stage, task);
            break;
          }
        }
        return stage;
      });
    });
  }, []);
  return (
    <div className="kanban-board-container">
      <header>
        <img className="logo" src={logo} alt="logo" />
        <h1 className="project">Kanban board</h1>
      </header>
      <KanbanTaskCreate handleAddTask={handleAddTask} />
      <KanbanBoard
        stages={stages}
        onMoveFrom={handleMoveFrom}
      />
    </div>
  );
}

export default KanbanBoardPage;
