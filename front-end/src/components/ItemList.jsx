import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import SingleItem from "./SingleItem";
import { artistArray } from "../assets/database/artists";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {

  const { pathname } = useLocation()
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome ? (
        <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              // id={currObj.id}
              // name={currObj.name}
              // image={currObj.image}
              // banner={currObj.banner}
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
