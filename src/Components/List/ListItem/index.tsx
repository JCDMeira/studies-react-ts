import React from "react";
import style from "../List.module.scss";
import taskType from "../../../types/tasks";

const ListItem: React.FC<taskType> = ({
  completed,
  id,
  selected,
  task,
  time,
}): JSX.Element => {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default ListItem;
