import React, {
  useRef,
  useCallback,
  useState,
} from 'react';
import { Input } from '../../../components';
import { Form as Unform } from '@unform/web';
import { FormHandles } from '@unform/core';

import './TaskCreate.css';

interface ICreateTaskData {
  summary: string;
}

interface ITaskCreateProps {
  handleAddTask: (summary: string) => void;
}

const TaskCreate: React.FC<ITaskCreateProps> = ({ handleAddTask }): JSX.Element => {
  const [summary, setSummary] = useState('');
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ICreateTaskData) => {
    handleAddTask(data.summary);
    setSummary('');
  }, [handleAddTask]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const summary = event.target.value;
    setSummary(summary);
  };

  const handleKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddTask(summary);
      setSummary('');
      event.preventDefault();
    }
  };

  return (
    <Unform
      className="task"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <label>
        <p>Add an task</p>
        <Input
          name="summary"
          onChange={handleChange}
          onKeyPress={handleKey}
          type="text"
          value={summary}
        />
      </label>
    </Unform>
  );
}

export default TaskCreate;
