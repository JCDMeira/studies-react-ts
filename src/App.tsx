import React from "react";
import Form from "./Components/form";
import List from "./Components/List";

import style from "./app.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
