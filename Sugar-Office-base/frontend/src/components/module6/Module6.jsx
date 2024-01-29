import React from 'react'

const Module6 = () => {
  return (
    <>
    {/*--   Modul-6  */}
    <hr className="border-white dark:border-gray-700" />
    <div className="bg-gray-700  w-full  p-12 flex items-center justify-center ">
      <div className="flex justify-between w-9/12">
        <div className="flex gap-5 items-center ">
          <span className="flex items-center justify-center hover:cursor-pointer  w-20 h-20 border-2 border-blue-600 rounded-full">
            <svg
              className="h-8 w-8 text-red-500 "
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx={7} cy={17} r={2} /> <circle cx={17} cy={17} r={2} />{" "}
              <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            </svg>
          </span>
          <div>
            <h2 className="text-white font bold  hover:text-blue-600 hover:cursor-pointer transition-all duration-500">
              Free Shipping
            </h2>
            <p className="text-gray-500 font bold">Free delivery over $100</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <span className="flex items-center justify-center w-20 h-20 border-2 border-blue-600 rounded-full">
            <svg
              className="h-8 w-8 text-red-500 "
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path
                stroke="none"
                d="M0 0h24v24H0z"
              /> <path d="M9 12l2 2l4 -4" />{" "}
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
            </svg>
          </span>
          <div>
            <h2 className="text-white font bold hover:cursor-pointer hover:text-blue-600 transition-all duration-500">
              Free Returns
            </h2>
            <p className="text-gray-500 font bold">Hassle free returns</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <span className="flex items-center justify-center w-20 h-20 border-2 border-blue-600 rounded-full">
            <svg
              className="h-8 w-8 text-red-500"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />{" "}
              <line x1={12} y1={12} x2={20} y2="7.5" />{" "}
              <line x1={12} y1={12} x2={12} y2={21} />{" "}
              <line x1={12} y1={12} x2={4} y2="7.5" />
            </svg>
          </span>
          <div>
            <h2 className="text-white font bold hover:cursor-pointer hover:text-blue-600 transition-all duration-500">
              Secure Shopping
            </h2>
            <p className="text-gray-500 font bold">Best Security features</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <span className="flex items-center justify-center w-20 h-20 border-2 border-blue-600 rounded-full">
            <svg
              className="h-8 w-8 text-red-500"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
            </svg>
          </span>
          <div>
            <h2 className="text-white font bold hover:cursor-pointer hover:text-blue-600 transition-all duration-500">
              Unlimited Blocks
            </h2>
            <p className="text-gray-500 font bold">Any content,any page</p>
          </div>
        </div>
      </div>
    </div>
    <hr className="border-white dark:border-gray-700" />
  </>
  
  )
}

export default Module6
