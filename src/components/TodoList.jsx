import React, { useState, useEffect } from 'react'

export function TodoList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    &lt;div className="mb-4"&gt;
      &lt;input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && addTask()}
        className="bg-slate-800 text-slate-100 p-2 w-full mb-2"
        placeholder="Add a new task"
      /&gt;
      &lt;ul&gt;
        {tasks.map(task => (
          &lt;li key={task.id} className="flex items-center justify-between p-2 bg-slate-800 mb-1"&gt;
            &lt;div className="flex items-center"&gt;
              &lt;input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(task.id)} 
                className="mr-2"
              /&gt;
              &lt;span className={task.completed ? 'line-through text-slate-400' : 'text-slate-100'}&gt;
                {task.text}
              &lt;/span&gt;
            &lt;/div&gt;
            &lt;button onClick={() => deleteTask(task.id)} className="text-slate-400"&gt;X&lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  )
}
