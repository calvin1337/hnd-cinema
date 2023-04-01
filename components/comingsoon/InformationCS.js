import React from "react";

const InformationCS = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1">
      <div className="flex items-center justify-center">
        <img className="w-4/5 h-4/5"
          src="https://via.placeholder.com/600x400"
          alt=""
        />
      </div>
      <div className="content-container flex justify-center flex-col">
        <div className="notification-container text-right m-5 ">
          <button className="btn">Notify me</button>
        </div>
        <h3>Name: Creed III</h3>
        <h3>
          Movie Info: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam dolores sint quis minima aperiam optio qui facere debitis
          ullam dolorem.
        </h3>
        <h3>Release Date: 3rd March 2023</h3>
      </div>
    </div>
  );
};

export default InformationCS;
