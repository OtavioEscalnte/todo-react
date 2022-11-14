import { ChangeEvent, FormEvent, useState } from 'react'
import {PlusCircle} from 'phosphor-react'

import { Task } from './Task'
import { ITask } from '../App'

import clipboardImg from '../assets/clipboard.svg'

import styles from './Content.module.css'





interface props {
  tasks: ITask[];
  addTask: (taskTitle:string) => void
  deleteTasks: (taskId:string) => void
 completedTask:(taskId:string) => void
}

export function Content ({tasks, addTask,deleteTasks,completedTask}:props) {
  const tasksCountCreated = tasks.length
  const tasksCountCompleted = tasks.filter(task=> task.isCompleted).length
  const [title,setTitle] = useState('')

  function handleAddTask(event:FormEvent){
    event.preventDefault()

    addTask(title)
    setTitle('')
  }

 function changeTitle (event:ChangeEvent<HTMLInputElement>) {
  setTitle(event.target.value)
 }

  return (
    <div className={styles.registerTasksContainer}>

        <form onSubmit={handleAddTask}>
          <div className={styles.registerTaskInputContainer}>
          <input type='text' name='task' placeholder='Adicione uma nova tarefa' value={title} onChange={changeTitle}  required/>
          <button type='submit'>
            Criar
          <PlusCircle className='plus' size={16}/>
          </button>
          </div>
        </form>

        <div className={styles.tasksDetails}>
          <div className={styles.containerTasksTitle}>
            <p className={styles.createdTasks}>Tarefas criadas:</p>
            <span>{tasksCountCreated}</span>
          </div>
          <div className={styles.containerTasksTitle}>
            <p className={styles.finishedTasks}>Tarefas concluidas:</p>
            <span>{tasksCountCompleted} de {tasksCountCreated}</span>
          </div>
        </div>

     {tasks.length <= 0 ? (

     
        <div className={styles.notTasksRegistredContainer}>
            <img src={clipboardImg}/>
            <strong>Você ainda não tem tarefas cadastradas<span>Crie tarefas e organize seus itens a fazer</span> </strong> 
        </div>
     ): (
        <div className={styles.taskList}>
            {tasks.map((task)=> (
              <Task key={task.id} task={task} deleteTasks={deleteTasks}  completedTask={completedTask}/>
            ))}
        </div>
     )}
    </div>
  )
}