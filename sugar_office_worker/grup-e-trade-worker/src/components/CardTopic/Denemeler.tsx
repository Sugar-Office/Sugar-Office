



// import React, { useState, useEffect } from 'react';

// const Denemeler = () => {
//   const [time, setTime] = useState({
//     days: 132,
//     hours: 10,
//     minutes: 9,
//     seconds: 49,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime((prevTime) => ({
//         ...prevTime,
//         seconds: prevTime.seconds - 1,
//       }));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

// return (
<div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
   <div className="md:flex">
     <div className="md:flex-shrink-0">
       <img className="h-48 w-full object-cover md:w-48" src="/path-to-your-image.jpg" alt="An assortment of soaps"/>
    
     <div className="p-8">
       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Countdown</div>
       {/* <p className="mt-2 text-gray-500">{time.days} Days {time.hours} Hours {time.minutes} Min {time.seconds} Sec</p> */}
     </div> 
     </div>
   </div>
</div>
// );
// };

// export default Denemeler;

{/* <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
<div className="md:flex">
  <div className="md:flex-shrink-0">
    <img
      className="object-cover md:w-48"
      src="assets/pictures/image (1).png"
      alt="An assortment of soaps"
    />

    <div className="p-2 ">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        Countdown
      </div>
      {/* <p className="mt-2 text-gray-500">{time.days} Days {time.hours} Hours {time.minutes} Min {time.seconds} Sec</p> */}
//     </div>
//   </div>
// </div>
// </div> */}


<div className=" flex flex-col itmes-center justify-evenly ">
{/* <div className="w-full bg-graySoft rounded-md border-l-8 border-yellowDark P-4 p-2 text-2xl font-bold mt-4">
  Popular Product
</div> */}
{/* <div className="grid grid-cols-3 gap-4 ">
  <div className="border border-graySoft hover:border-yellowDark group rounded-sm ">
    <div className="cursor-pointer">
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/15-288x288.jpg"
        className=" cursor-pointer "
      />
    </div>
    <div className="p-2 ml-1">
      <p>CAR</p>
      <p className="font-bold">Fashion Design</p>

      <div className=" my-4 text-xl font-bold">$602.00</div>
    </div>
  </div>
  <div className="border border-graySoft hover:border-yellowDark group rounded-sm relative">
    <div className="cursor-pointer">
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/22-288x288.jpg"
        className="group-hover:hidden transition-all duration-300 cursor-pointer "
      />
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/21-288x288.jpg"
        className="hidden group-hover:block"
      />
    </div>
    <div className="p-2 ml-1 cursor-pointer">
      <p>HTC</p>
      <p className="font-bold hover:text-yellowDark">
        Alternator Engine Car
      </p>
      <div>
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
      </div>
      <div className="group-hover:invisible my-4 text-xl font-bold">
        $1,202.00
      </div>
    </div>
    <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4">
      <button className="bg-graySoft p-2 hover:bg-yellowDark rounded-full text-md font-thin">
        + Add To Cart
      </button>
      <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full">
        <i className="fa-solid fa-heart fa-xs" />
      </div>
      <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
        <i className="fa-solid fa-code-compare" />
      </div>
    </div>
  </div>
  <div className="border border-graySoft hover:border-yellowDark group rounded-sm relative">
    <div className="cursor-pointer">
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/26-288x288.jpg"
        className="group-hover:hidden transition-all duration-300 cursor-pointer "
      />
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/20-288x288.jpg"
        className="hidden group-hover:block"
      />
    </div>
    <div className="p-2 ml-1 cursor-pointer">
      <p>CAR</p>
      <p className="font-bold hover:text-yellowDark">Fashion Design</p>
      <div>
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
      </div>
      <div className="group-hover:invisible flex itmes-center my-4">
        <div className="text-xl font-bold">$38.00</div>
        <div className="line-through text-xs m-2">$122</div>
        <div className="bg-yellowDark w-8 h-5 rounded-lg text-xs p-1 mt-1">
          70%
        </div>
      </div>
    </div>
    <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2 my-4">
      <button className="bg-graySoft p-2 hover:bg-yellowDark rounded-full text-md font-thin">
        + Add To Cart
      </button>
      <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
        <i className="fa-solid fa-heart fa-xs" />
      </div>
      <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
        <i className="fa-solid fa-code-compare" />
      </div>
    </div>
  </div>
  <div className="border border-graySoft hover:border-yellowDark group rounded-sm relative">
    <div className="cursor-pointer">
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/27-288x288.jpg"
        className="group-hover:hidden transition-all duration-300 cursor-pointer "
      />
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/23-288x288.jpg"
        className="hidden group-hover:block"
      />
    </div>
    <div className="p-2 ml-1 cursor-pointer">
      <p>CAR</p>
      <p className="font-bold hover:text-yellowDark">Car Body Parts</p>
      <div>
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
      </div>
      <div className="group-hover:invisible my-4 text-xl font-bold">
        $602.00
      </div>
    </div>
    <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2 my-4">
      <button className="bg-graySoft p-2 hover:bg-yellowDark rounded-full text-md font-thin">
        + Add To Cart
      </button>
      <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
        <i className="fa-solid fa-heart fa-xs" />
      </div>
      <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
        <i className="fa-solid fa-code-compare" />
      </div>
    </div>
  </div>
  <div className="border border-graySoft hover:border-yellowDark group rounded-sm relative">
    <div className="cursor-pointer">
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/12-288x288.jpg"
        className="group-hover:hidden transition-all duration-300 cursor-pointer "
      />
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/11-288x288.jpg"
        className="hidden group-hover:block"
      />
    </div>
    <div className="p-2 ml-1 cursor-pointer">
      <p>CAR</p>
      <p className="font-bold hover:text-yellowDark">Fashion Design</p>
      <div>
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
      </div>
      <div className="group-hover:invisible my-4 text-xl font-bold">
        $602.00
      </div>
    </div>
    <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4">
      <button className="bg-graySoft p-2 hover:bg-yellowDark rounded-full text-md font-thin">
        + Add To Cart
      </button>
      <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
        <i className="fa-solid fa-heart fa-xs" />
      </div>
      <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
        <i className="fa-solid fa-code-compare" />
      </div>
    </div>
  </div>
  <div className="border border-graySoft hover:border-yellowDark group rounded-sm relative">
    <div className="cursor-pointer">
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/16-288x288.jpg"
        className="group-hover:hidden transition-all duration-300 cursor-pointer "
      />
      <img
        src="https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/17-288x288.jpg"
        className="hidden group-hover:block"
      />
    </div>
    <div className="p-2 ml-1 cursor-pointer">
      <p>CAR</p>
      <p className="font-bold hover:text-yellowDark">Fashion Design</p>
      <div>
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
        <i
          className="fa-regular fa-star fa-xs"
          style={{ color: "#FEC42C" }}
        />
      </div>
      <div className="group-hover:invisible my-4 text-xl font-bold">
        $602.00
      </div>
    </div>
    <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4">
      <button className="bg-graySoft p-2 hover:bg-yellowDark rounded-full text-md font-thin">
        + Add To Cart
      </button>
      <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
        <i className="fa-solid fa-heart fa-xs" />
      </div>
      <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
        <i className="fa-solid fa-code-compare" />
      </div>
    </div>
  </div>
</div>
</div> */}