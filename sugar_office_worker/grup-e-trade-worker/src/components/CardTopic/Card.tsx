import React from "react";
import CardMain from "./CardMain";
import CardNavbar from "./CardNavbar";
import CardPagination from "./CardPagination";
// import Denemeler from "./Denemeler";


const Card = () => {
  return (

    <div 
    className=" p-2 w-full "
    
    > 
      <CardNavbar />
     <CardMain />
     <CardPagination/>
      {/* <Denemeler/> */}
    </div>
  );
};

export default Card;
