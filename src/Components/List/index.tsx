import React from "react";
import ListItem from "./ListItem";
import taskProps from "../../types/tasks";

interface ListProps {
  tasks: taskProps[];
}

const List: React.FC<ListProps> = ({ tasks }) => {
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item: taskProps) => (
          <ListItem key={item.task} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
