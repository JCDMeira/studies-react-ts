import React from "react";
import "./style.scss";

const List: React.FC = () => {
  const tasks = [
    { task: "React", time: "02:00:00" },
    { task: "Js", time: "02:00:00" },
  ];
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => {
          return (
            <li key={`${item.task}${item.time}`} className="item">
              <h3>{item.task}</h3>
              <span>{item.time}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default List;
