import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className='container max-w-3xl mx-auto px-4 py-8'>
      <h1>To Do List</h1>
      <TaskList />
    </div>
  );
}

export default App;
