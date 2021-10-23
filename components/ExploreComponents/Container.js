import React from "react";

const Container = (props) => {
  return (
    <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-content-stretch gap-2">
      {props.children}
    </div>
  );
};

export default Container;
