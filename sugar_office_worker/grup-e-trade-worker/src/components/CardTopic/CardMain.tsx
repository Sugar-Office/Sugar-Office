import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

const CardMain = () => {
  return (
    <>
      <div className="bg-white-500  shadow-lg overflow-hidden col-span-1 h-full border-t-2 border-b-2 border-pink-500 flex flex-col itmes-center justify-evenly">
        {/* <h3 className="text-2xl font-bold text-gray-800 text-start mt-4 ">
          Deals &amp; Promotions
        </h3> */}
        <div className="grid grid-cols-3 gap-4 mt-6 mb-8  ">
          {/* Birinci kart */}
          <div className="bg-blue-400 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
            <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                  src="assets/pictures/image (1).png"
                  alt="An assortment of soaps"
                  width="{500}"
                  height="{200}"
                  className="w-full h-250-px object-cover"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-100" />
                  <StarIcon className="w-4 h-4 text-yellow-100" />
                  <StarIcon className="w-4 h-4 text-yellow-100" />
                  <StarIcon className="w-4 h-4 text-yellow-100" />
                  <StarIcon className="w-4 h-4 text-yellow-100" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* İkinci kart */}

          <div className="bg-pink-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                src="assets/pictures/image.png"
                alt="Speaker"
                className="w-full h-250-px object-cover"
                  width="{500}"
                  height="{200}"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
   
          </div>
          {/* Üçüncü kart */}
          <div className="bg-gray-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                  src="assets/pictures/image (2).png"
                  alt="Smartphone"
                  className="w-full h-250-px object-cover"
                  width="{500}"
                  height="{200}"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
        
          </div>
            {/* Birinci kart */}
            <div className="bg-blue-400 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
            <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                  src="assets/pictures/image (1).png"
                  alt="An assortment of soaps"
                  width="{500}"
                  height="{200}"
                  className="w-full h-250-px object-cover"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* İkinci kart */}

          <div className="bg-pink-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                src="assets/pictures/image.png"
                alt="Speaker"
                className="w-full h-250-px object-cover"
                  width="{500}"
                  height="{200}"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
   
          </div>
          {/* Üçüncü kart */}
          <div className="bg-gray-400 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                  src="assets/pictures/image (2).png"
                  alt="Smartphone"
                  className="w-full h-250-px object-cover"
                  width="{500}"
                  height="{200}"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
        
          </div>
            {/* Birinci kart */}
            <div className="bg-blue-400 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
            <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                  src="assets/pictures/image (1).png"
                  alt="An assortment of soaps"
                  width="{500}"
                  height="{200}"
                  className="w-full h-250-px object-cover"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* İkinci kart */}

          <div className="bg-pink-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                src="assets/pictures/image.png"
                alt="Speaker"
                className="w-full h-250-px object-cover"
                  width="{500}"
                  height="{200}"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
   
          </div>
          {/* Üçüncü kart */}
          <div className="bg-gray-400 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                  src="assets/pictures/image (2).png"
                  alt="Smartphone"
                  className="w-full h-250-px object-cover"
                  width="{500}"
                  height="{200}"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
        
          </div>
            {/* Birinci kart */}
            <div className="bg-blue-400 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
            <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                  src="assets/pictures/image (1).png"
                  alt="An assortment of soaps"
                  width="{500}"
                  height="{200}"
                  className="w-full h-250-px object-cover"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* İkinci kart */}

          <div className="bg-pink-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                src="assets/pictures/image.png"
                alt="Speaker"
                className="w-full h-250-px object-cover"
                  width="{500}"
                  height="{200}"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
   
          </div>
          {/* Üçüncü kart */}
          <div className="bg-gray-400 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer max-w-sm rounded overflow-hidden shadow-lg  ">
              <div className="">
                <img
                  src="assets/pictures/image (2).png"
                  alt="Smartphone"
                  className="w-full h-250-px object-cover"
                  width="{500}"
                  height="{200}"
                />
                <div className="absolute bottom-1 bg-white bg-opacity-75 p-2 mb-2 h-12  gap-2 flex itmes-center justify-evenly w- ">
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s font-bold">132 Days</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">10 Hours</p>
                  </div>
                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s ">09 Min</p>
                  </div>

                  <div className="flex flex-col itmes-center text-center justify-center">
                    <p className="text-s">49 Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex flex-col itmes-center justify-evenly">
                <div className="flex flex-center items-center justify-center content-center space-x-1 reating">
                  {/* <StarOutlineIcon className="w-8 h-8 text-yellow-500"/> */}

                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="text-sm font-thin">Apple Cinema 30²</p>
                </div>
                <div className="flex flex-center items-center justify-center content-center">
                  <p className="font-bold text-l text-red">$ 45.00</p>
                  <p className="text-xs ml-1 line-through"> $49.00</p>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>

    </>
  );
};

export default CardMain;
