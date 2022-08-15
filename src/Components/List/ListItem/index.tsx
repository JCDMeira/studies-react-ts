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
      className={`${style.item} ${selected ? style.itemSelecionado : ""}`}
      onClick={() => handleSelect({ completed, id, selected, task, time })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default ListItem;
