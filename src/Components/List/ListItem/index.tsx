import React from "react";

interface ListItemProps {
  item: ItemProps;
  style: any;
}
interface ItemProps {
  task: string;
  time: string;
}

const ListItem: React.FC<ListItemProps> = ({ item, style }): JSX.Element => {
  return (
    <li className={style.item}>
      <h3>{item.task}</h3>
      <span>{item.time}</span>
    </li>
  );
};

export default ListItem;
