// src/components/TaskList.tsx
import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  title: string;
  priority: string;
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (task: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  const sortedTasks = tasks.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title

  return (
    <ul className="w-full max-w-3xl space-y-4">
      {sortedTasks.map((task, index) => (
        <TaskItem key={index} task={task.title} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
