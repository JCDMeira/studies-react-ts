import React from "react";
import style from "./ListItem.module.scss";
import taskType from "../../../types/tasks";

interface ListItemProps extends taskType {
  handleSelect: (selectedTask: taskType) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  completed,
  id,
  selected,
  task,
  time,
  handleSelect,
}): JSX.Element => {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        completed ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completed && handleSelect({ completed, id, selected, task, time })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
};

export default ListItem;
