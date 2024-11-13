// src/App.tsx
// src/index.tsx or src/App.tsx
import './assets/styles/tailwind.css';

import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

interface Task {
  title: string;
  priority: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriterion, setSortCriterion] = useState<'title' | 'priority'>('title');

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: string, priority: string) => {
    const newTask = { title: task, priority };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (task: string) => {
    const updatedTasks = tasks.filter(t => t.title !== task);
    setTasks(updatedTasks);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriterion(e.target.value as 'title' | 'priority');
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortCriterion === 'title') {
      return a.title.localeCompare(b.title);
    } else {
      const priorityOrder = ['Low', 'Medium', 'High'];
      return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-green-500 to-purple-600 flex flex-col items-center justify-center p-4">{/* Change background color here */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Task Manager</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search tasks"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-md w-64"
        />
        <select
          value={sortCriterion}
          onChange={handleSortChange}
          className="px-4 py-2 border rounded-md"
        >
          <option value="title">Sort by Title</option>
          <option value="priority">Sort by Priority</option>
        </select>
      </div>
      <TaskInput addTask={addTask} />
      <TaskList tasks={sortedTasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
