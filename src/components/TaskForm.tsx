import React, {
  useRef,
  useCallback,
} from 'react';
import { Input } from '.';
import { Form as Unform } from '@unform/web';
import { FormHandles } from '@unform/core';

import './TaskForm.css';

interface ICreateTaskData {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface ITaskFormProps {
  handleAddTask: (food: ICreateTaskData) => void;
}

const moskUsers = [{
  code: 'flavio',
  name: 'Flavio Miyaji'
}];

const mockTypes = [{
  code: 'task',
  name: 'Task'
}, {
  code: 'error',
  name: 'Error'
}, {
  code: 'improvement',
  name: 'Improvement'

}];

const TaskForm: React.FC<ITaskFormProps> = ({ handleAddTask }): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ICreateTaskData) => {
    handleAddTask(data);
  }, [handleAddTask]);

  return (
    <Unform
      className="task"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <label>
        <p>Assign to</p>
        <select value="" onChange={() => { }}>
          {moskUsers.map(user => (
            <option value={user.code}>{user.name}</option>
          ))}
        </select>
      </label>
      <label>
        <p>Summary</p>
        <Input name="summary" />
      </label>
      <label>
        <p>Alias</p>
        <Input name="alias" />
      </label>
      <label>
        <p>Type</p>
        <select value="" onChange={() => { }}>
          {mockTypes.map(task => (
            <option value={task.code}>{task.name}</option>
          ))}
        </select>
      </label>
      <label>
        <p>Version</p>
        <Input name="version" />
      </label>
      <label>
        <input type="checkbox" />Aproved
      </label>
      <label>
        <input type="checkbox" />Review required
      </label>
      <footer>
        <button>Clear</button>
        <button type="submit">Submit</button>
      </footer>
    </Unform>
  );
}

export default TaskForm;
