import React from "react";
import "./Items.css";

const Items = (props) => {
  const deleteClickHandle = (e) => {
    console.log(e);
    console.log(e.target.key);
  };

  return props.itemsList.map((item) => (
    <li onClick={deleteClickHandle} key={item.id} className="goal-item">
      {item.text}
    </li>
  ));
};

export default Items;
