import React from "react";
import "./Items.css";

const Items = (props) => {
  return props.itemsList.map((item) => (
    <li
      onClick={() => props.onDeleteItem(item.id)}
      key={item.id}
      className="goal-item"
    >
      {item.text}
    </li>
  ));
};

export default Items;
