import React from 'react'

const Module9 = () => {
  return (
    <>
    {/*------ modul-9 */}
    <div className="bg-yellow-300 h-auto md:h-32 flex flex-col md:flex-row justify-around items-center flex-wrap">
      <div className=" w-9/12 flex left flex-wrap flex-grow-2 items-center justify-center gap-6">
        <div className="md:mr-2 mt-4 md:mt-10">
          <svg
            className="h-14 w-18 text-black p-1 "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <div className="md:mr-2 mt-4 md:mt-10">
          <h1 className="text-black text-2xl font-semibold">
            Subsciribe Newsletter
          </h1>
          <p className="text-black">
            Get all the latest information on Events, Sales and Offers.Sign up for
            newslater today.
          </p>
        </div>
        <div className="mt-4 md:mt-10 ">
          <input
            type="email"
            placeholder="Email Adress"
            className="p-2 w-full md:w-48 lg:w-96 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
          />
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Module9
