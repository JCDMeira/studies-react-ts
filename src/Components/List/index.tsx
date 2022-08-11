import React from "react";
import ListItem from "./ListItem";
import style from "./List.module.scss";
import taskProps from "../../models/tasks";

interface ListProps {
  tasks: taskProps[];
}

const List: React.FC<ListProps> = ({ tasks }) => {
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
