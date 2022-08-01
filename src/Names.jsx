import React from "react";

export const Names = (props) => {
  const getSportsName = (sportList) => {
    return sportList.map((item) => {
      return item + " ";
    });
  };

  console.log("name page called");

  return (
    <div>
      <h3>Name is : {props.details.name}</h3>
      <p> Age is : {props.details.age}</p>
      <h3> Favourite Sports : {getSportsName(props.details.sports)} </h3>
    </div>
  );
};
