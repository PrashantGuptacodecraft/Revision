import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(data);
  }, []);

  const addTask = () => {
    const newTasks = [...tasks, { text: task }];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTask("");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h2>Tasks</h2>

        <input value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addTask}>Add</button>

        {tasks.map((t, i) => (
          <div key={i}>{t.text}</div>
        ))}
      </div>
    </div>
  );
}