import React from "react";

const CardMain = () => {
  return (
    <>
      <div className="bg-white-500  shadow-lg overflow-hidden col-span-1 h-full border-t-2 border-b-2 border-pink-400">
        {/* <h3 className="text-2xl font-bold text-gray-800 text-start mt-4 ">
          Deals &amp; Promotions
        </h3> */}
        <div className="grid grid-cols-3 gap-4 mt-6 mb-8  ">
          {/* Birinci kart */}
          <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-150 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
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
          </div>
          {/* İkinci kart */}
          <div className="bg-pink-500 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
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
          </div>
          {/* Üçüncü kart */}
          <div className="bg-gray-400 rounded-lg shadow-lg overflow-hidden col-span-1 hover:brightness-125 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 relative cursor-pointer">
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
      </div>
    </>
  );
};

export default CardMain;
