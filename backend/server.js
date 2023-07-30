const express = require("express")
// const cors = require("cors")
const app = express()
const tasks = []

// app.use(cors(
//   {
//     origin: ["https://to-do-list-frontend-pi.vercel.app"],
//     methods: ["POST", "GET", "DELETE"],
//     credentials: true
//   }
// ))

app.use(express.json());

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Please provide title and description' });
  }

  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.json(newTask);
});

app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.json({ message: 'Task deleted successfully' });
});

app.listen(5000, () => { console.log("Server started on port 5000") })