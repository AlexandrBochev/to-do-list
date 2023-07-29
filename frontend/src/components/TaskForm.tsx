import cross from "../img/cross.svg"
import { ITask } from "../models"
import { useState } from "react"

interface TaskProps {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  addTask: (newTask: ITask) => void
}

const TaskForm = ({ modal, setModal, addTask }: TaskProps) => {
  const [titleValue, setTitleValue] = useState<string>('')
  const [descValue, setDescValue] = useState<string>('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (titleValue === '' || descValue === '') {
      alert('Please fill in all empty fields')
      return modal = true
    }

    let newTask: ITask = {
      id: new Date().getTime(),
      title: titleValue,
      description: descValue
    }
    addTask(newTask)

    setTitleValue('')
    setDescValue('')
  }

  return (
    <>
      {modal &&
      <div className='absolute w-full h-full px-4 top-0 left-0'>
        <div
          className='absolute w-full h-full bg-black bg-opacity-80 top-0 left-0'
          onClick={() => setModal(false)}
        />
        <div className='rounded-lg relative p-8 max-w-lg mx-auto mt-20 bg-white'>
          
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setTitleValue(e.target.value)}
              className="w-full border rounded-md p-2 mt-6"
              type="text" placeholder="Add Title"
            />
            <textarea
              onChange={(e) => setDescValue(e.target.value)}
              className="w-full border rounded-md p-2 mt-6"
              placeholder="Add Description"
            />
            <button
              type="submit"
              className="border rounded-md p-2 mt-6 font-bold bg-slate-200 text-slate-500 hover:bg-slate-500 hover:text-white"
            >
              Add Task
            </button>
          </form>

          <img
            width={32} height={32} src={ cross } alt="Cross"
            className='absolute top-3 right-3 cursor-pointer'
            onClick={() => setModal(false)}
          />
        </div>
      </div>}
    </>
  )
}

export default TaskForm