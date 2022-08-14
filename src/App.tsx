import React, { useState } from "react";
import Form from "./Components/form";
import List from "./Components/List";

import style from "./app.module.scss";
import Stopwatch from "./Components/Stopwatch";

import taskType from "./types/tasks";

function App() {
  const [tasks, setTask] = useState<taskType[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <Stopwatch />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
