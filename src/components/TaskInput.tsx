// src/components/TaskInput.tsx
import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (task: string, priority: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle, priority);
      setTaskTitle('');
      setPriority('Low');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-3 mb-6">
      <input
        type="text"
        className="px-4 py-2 border rounded-md w-64"
        value={taskTitle}
        onChange={handleInputChange}
        placeholder="Enter task"
        required
      />
      <select
        value={priority}
        onChange={handlePriorityChange}
        className="px-4 py-2 border rounded-md"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
