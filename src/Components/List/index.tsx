import React from "react";
import ListItem from "./ListItem";
import taskProps from "../../types/tasks";
import taskType from "../../types/tasks";

import style from "./List.module.scss";

interface ListProps {
  tasks: taskProps[];
  handleSelect: (selectedTask: taskType) => void;
}

const List: React.FC<ListProps> = ({ tasks, handleSelect }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item: taskProps) => (
          <ListItem key={item.task} handleSelect={handleSelect} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
