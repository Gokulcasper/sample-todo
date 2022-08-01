import React from "react";

const Contacts = ({ names }) => {
  console.log("names", names.length);
  return (
    <div>
      {names.length > 0 ? (
        <div>
          {names.map((name, index) => {
            return <h3 key={index}> Contact name is :{name.name} </h3>;
          })}
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default Contacts;
