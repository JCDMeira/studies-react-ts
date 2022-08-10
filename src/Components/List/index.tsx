import React from "react";
import ListItem from "./ListItem";
import style from "./List.module.scss";

const List: React.FC = () => {
  const tasks = [
    { task: "React", time: "02:00:00" },
    { task: "Js", time: "02:00:00" },
  ];

  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <ListItem key={item.task} item={item} style={style} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
