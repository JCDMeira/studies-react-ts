import React from "react";
import Form from "./Components/form";
import List from "./Components/List";

import style from "./app.module.scss";
import Stopwatch from "./Components/Stopwatch";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Stopwatch />
      <List />
    </div>
  );
}

export default App;
