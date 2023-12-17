import React from "react";

const CardLeftMenu = () => {
  return (
    <div>
      <div className="Card-Left-Menu grid grid-cols-1 grid-rows-1 grid-gap-4  h-screen h-8 w-full ">
        <div className="flex items-center gap-2 w-full">
          <button className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded">
          <svg fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H9V9H7V7Z" fill="currentColor"/><path d="M11 7H13V9H11V7Z" fill="currentColor"/><path d="M17 7H15V9H17V7Z" fill="currentColor"/><path d="M7 11H9V13H7V11Z" fill="currentColor"/><path d="M13 11H11V13H13V11Z" fill="currentColor"/><path d="M15 11H17V13H15V11Z" fill="currentColor"/><path d="M9 15H7V17H9V15Z" fill="currentColor"/><path d="M11 15H13V17H11V15Z" fill="currentColor"/><path d="M17 15H15V17H17V15Z" fill="currentColor"/></svg>
          </button>
          <button className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded">☰</button>
          <button className="w-56"><span>Product Compare (0)</span></button>
          
        </div>
      </div>
    </div>
  );
};

export default CardLeftMenu;
