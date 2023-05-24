import React from "react";
import "./ItemList.css";
import Items from "../Items/Items";

const ItemList = (props) => {
  return (
    <ul className="goal-list">
      <Items itemsList={props.items} />
    </ul>
  );
};

export default ItemList;
