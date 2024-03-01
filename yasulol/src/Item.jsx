import React from "react";

const Item = (props) => {
  return (
    <div className=" w-8 h-8 lg:w-9 lg:h-9 bg-white rounded-md border-[1px] flex justify-center items-center transition-all duration-1000">
      <img
        className="w-auto h-auto max-w-full max-h-full rounded-md"
        src={`${props.item}`}
        alt=""
      />
    </div>
  );
};

export default Item;
