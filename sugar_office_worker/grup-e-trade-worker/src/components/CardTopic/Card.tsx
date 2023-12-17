import React from "react";
import CardMain from "./CardMain";
import CardNavbar from "./CardNavbar";
// import Denemeler from "./Denemeler";


const Card = () => {
  return (

    <div 
    className=" p-2 w-full "
    
    > 
      <CardNavbar />
     <CardMain />
      {/* <Denemeler/> */}
    </div>
  );
};

export default Card;
