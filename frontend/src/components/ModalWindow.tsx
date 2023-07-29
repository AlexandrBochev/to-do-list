import cross from "../img/cross.svg"
import { ITask } from "../models"

interface TaskProps {
  task: ITask
  modal: any
  setModal: any
}

const ModalWindow = ({ modal, setModal, task }: TaskProps) => {
  return (
    <>
    {modal &&
      <div className='absolute w-full h-full px-4 top-0 left-0'>
        <div
          className='absolute w-full h-full bg-black bg-opacity-80 top-0 left-0'
          onClick={() => setModal(false)}
        />
        <div className='rounded-lg relative p-8 max-w-lg mx-auto mt-20 bg-white'>
          <h1 className='mb-4'>{ task.title }</h1>
          <p>{ task.description }</p>
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

export default ModalWindow