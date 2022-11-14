import { useState } from 'react'
import { Header } from './components/Header'
import { Content } from './components/Content'
import './global.css'

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  function addTask(taskTitle:string) {
    setTasks([
      ...tasks,{
        id:crypto.randomUUID(),
        title:taskTitle,
        isCompleted:false
      }
    ])
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function taskCompleted(taskId:string) {
    const newTasks = tasks.map(task=> {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div>
      
      <Header/>
      <Content addTask={addTask} deleteTasks={deleteTask} completedTask={taskCompleted} tasks={tasks} />
    </div>
  )
}


