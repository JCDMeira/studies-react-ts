import React, { useState } from "react";
import Form from "./Components/form";
import List from "./Components/List";

import style from "./app.module.scss";
import Stopwatch from "./Components/Stopwatch";

import taskType from "./types/tasks";

function App() {
  const [tasks, setTasks] = useState<taskType[] | []>([]);
  const [selected, setSelected] = useState<taskType>();

  const handleSelect = (selectedTask: taskType) => {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  };

  const finishTask = () => {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return { ...task, selected: false, completed: true };
          }
          return task;
        })
      );
    }
  };

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <Stopwatch selected={selected} finishTask={finishTask} />
      <List tasks={tasks} handleSelect={handleSelect} />
    </div>
  );
}

export default App;
