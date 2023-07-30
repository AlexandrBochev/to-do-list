import { useEffect, useState } from "react"
import TaskItem from "./TaskItem"
import { ITask } from "../models";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await fetch('api/tasks');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  }

  const addTask = async (newTask: ITask) => {
    try {
      const response = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      const data = await response.json();
      setTasks([...tasks, data]);
      setModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  const delTask = async (id: number) => {
    try {
      const response = await fetch(`api/tasks/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='pt-4'>
      <TaskForm modal={ modal } setModal={ setModal } addTask={ addTask } />
      <button
        className="border rounded-md p-2 mt-6 font-bold bg-slate-200 text-slate-500 hover:bg-slate-500 hover:text-white"
        onClick={() => setModal(true)}
      >Add Task</button>
      {!tasks.length ?
        <p className="font-bold mt-6">Task list is empty. Please add new tasks.</p> :
        tasks.map((task) => <TaskItem task={ task } key={ task.id } delTask={delTask} />)}
    </div>
  )
}

export default TaskList