import { Trash, Check} from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox';

import styles from './Task.module.css'


import { ITask } from '../App';

interface Props {
task:ITask
  deleteTasks:(taskId:string)=>void
  completedTask:(taskId:string) => void
}

export function Task({task, deleteTasks,completedTask}:Props) {
  return (
    <div className={styles.container}>
      <div>
       <Checkbox.Root className={styles.checkBoxRoot} checked={task.isCompleted} onClick={()=> completedTask(task.id) }>
          <Checkbox.Indicator className={styles.indicator}>
                <Check className={styles.check} />
          </Checkbox.Indicator>
      </Checkbox.Root>
      </div>
      <p style={task.isCompleted? {textDecoration:'line-through', color:'#808080', width:'100%'} :{textDecoration:'none',color:'#F2F2F2',width:'100%'}}  className={styles.content}>
        {task.title}
      </p>
      <button onClick={()=> deleteTasks(task.id)}>
        <Trash size={14} className={styles.trash}/>
      </button>
    </div>
  )
}