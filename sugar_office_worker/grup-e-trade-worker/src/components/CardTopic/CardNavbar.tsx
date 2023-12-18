import React from "react";
import CardLeftMenu from "./CardNavbar/CardLeftMenu";
import CardRightDropdownMenu from "./CardNavbar/CardRightDropdownMenu";


const CardNavbar = () => {
  return (
    <>
      <div
        className="Card-Menu p-2 h-12 flex items-center justify-around w-full grid grid-cols-2 grid-rows-1 grid-gap-4 gap-32 bg-sky-200 "
        // style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <CardLeftMenu/>
        <CardRightDropdownMenu/>
   
      </div>

      <>
        {/* <div className=" flex flex-col items-center justify-between card-header border-white border-2 shadow-2xl rounded-t-lg border-t-2 border-b-2 border-pink-400 w-12/12 px-32   ">
        <div className="card-header w-full border-white border-2 rounded-t-lg  p-1 mt-2 ">
          <div className="card-header flex items-center justify-between  bg-orange-400 border-gray-200 border-2 rounded-t-lg ">
            <div className="w-full flex items-center justify-between bg-white border-white border-2 rounded-t-lg mr-1 ml-1 p-1 ">
              <div className="flex items-center">
                <h3 className="text-black font-bold text-xl mr-4">
                  Popular Product
                </h3>
              </div>
              <div className="flex items-center">
                <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-sm mr-2">
                  Featured
                </span>
                <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-sm mr-2">
                  Bestseller
                </span>
                <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-sm mr-4">
                  Latest
                </span>
                <button
                  id="prev"
                  className="w-6 h-6 text-yellow-600 rounded-full"
                >
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2001/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  id="next"
                  className="w-6 h-6 text-yellow-600 rounded-full"
                >
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-500  shadow-lg overflow-hidden col-span-1 h-full px-32 border-t-2 border-b-2 border-pink-400">
        <h3 className="text-2xl font-bold text-gray-800 text-start mt-4 ">
          Deals &amp; Promotions
        </h3>
        <div className="grid grid-cols-3 gap-4 mt-6 mb-8  ">
          {/* Birinci kart */}
        {/* <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
            <img
              src="assets/pictures/image (1).png"
              alt="Woman in white dress"
              className="w-full h-250-px object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-bold text-xs mt-4 mb-4">
                Sale Off Unlimited - Buy 1 Get 2
              </h3>
              <p className="text-2xs font-bold text-gray-900 text-start mb-3">
                Save 80% on order more than $599. Delivery in 1 days. Apply for
                the first 1k Customers.
              </p>
            </div>
          </div> */}
        {/* İkinci kart */}
        {/* <div className="bg-pink-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
            <img
              src="assets/pictures/image.png"
              alt="Speaker"
              className="w-full h-250-px object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-bold text-xs mt-4 mb-4">
                Offer Monday - Save $50 on Speaker
              </h3>
              <p className="text-2xs font-bold text-gray-900 text-start mb-3">
                Save 50% on order more than $99. Dailvery in 1 days. Apply for
                the first ik Customers.
              </p>
            </div>
          </div> */}
        {/* Üçüncü kart */}
        {/* <div className="bg-gray-400 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
            <img
              src="assets/pictures/image (2).png"
              alt="Smartphone"
              className="w-full h-250-px object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-bold text-xs mt-4 mb-4">
                Hurry Up - Smartphone only $199 Today
              </h3>
              <p className="text-2xs font-bold text-gray-900 text-start mb-3">
                {" "}
                All smartphone products at the same price $299, Delivery in I
                deys. Apply for the first Ik Customers.
              </p>
            </div>
          </div>
        </div>
      </div>  */}
      </>
    </>
  );
};

export default CardNavbar;
