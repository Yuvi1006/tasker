// src/components/TaskItem.tsx
import React, { useState } from 'react';

interface TaskItemProps {
  task: string;
  deleteTask: (task: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompletion = () => {
    setCompleted(!completed);
  };

  return (
    <li
      className={`flex justify-between items-center p-4 bg-white shadow-md rounded-md transition-transform hover:scale-105 ${
        completed ? 'line-through opacity-60' : ''
      }`}
    >
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleCompletion}
          className="scale-150"
        />
        <span>{task}</span>
      </div>
      <button
        onClick={() => deleteTask(task)}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
