import { ITask } from "../models"
import bin from "../img/bin-delete.svg"
import { useState } from "react"
import ModalWindow from "../components/ModalWindow";

interface TaskProps {
  task: ITask
  delTask: (id: number) => void
}

const TaskItem = ({ task, delTask }: TaskProps) => {
  const [check, setCheck] = useState(true)
  const [modal, setModal] = useState(false)

  const checkStyle = check ? 'cursor-pointer' : 'cursor-pointer line-through text-slate-500'
  
  return (
    <>
      <div className='flex justify-between items-end py-3'>
        <ModalWindow modal={ modal } setModal={ setModal } task={ task } />
        <div className='flex'>
          <input className='mr-3' type="checkbox" onChange={() => setCheck(prev => !prev)}
          />
          <h2 className={checkStyle} onClick={() => setModal(true)}>{ task.title }</h2>
        </div>
        <div className='flex'>
          <p className='hidden sm:block mr-3'>{ task.description }</p>
          <img className='cursor-pointer' width={16} height={16} src={ bin } alt="Bin" onClick={() => delTask(task.id)} />
        </div>
      </div>
      <hr />
    </>
  )
}

export default TaskItem