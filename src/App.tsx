import React, { useState } from "react";
import Form from "./Components/form";
import List from "./Components/List";

import style from "./app.module.scss";
import Stopwatch from "./Components/Stopwatch";

function App() {
  const [tasks, setTask] = useState([
    { task: "React", time: "02:00:00" },
    { task: "Js", time: "02:00:00" },
  ]);
  return (
    <div className={style.AppStyle}>
      <Form />
      <Stopwatch />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
