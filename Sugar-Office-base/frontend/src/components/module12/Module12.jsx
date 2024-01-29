import React from 'react'

const Module12 = () => {
  return (
    <>
    {/*---- Modul-12 ----*/}
    <div className=" w-full flex flex-wrap bg-pink-100 items-center">
      <div
        id="box-1"
        className="flex flex-col gap-6  text-center items-center mx-auto"
        style={{ height: 700 }}
      >
        <div className=" grid grid-rows-4 gap-2 justify-between my-auto">
          <h3 className=" text-black text-2xl mt-10">MID-AUTUMN SALE</h3>
          <h1 className="text-6xl text-black ">Makeup You`r Unique</h1>
          <p className="text-black mt-8">
            Buh-bye body acne. Hello Smoothing AHA Body Lotion
          </p>
          <button className="bg-black hover:bg-gray-800  text-white rounded-3xl p-3 w-64 h-12 mx-auto mt-4">
            BUY NOW / $59.00
          </button>
        </div>
      </div>
      <div id="box-2" className="">
        <picture>
        <img
          className=""
          src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/02/0x0-691618915.jpg"
          alt=""
        />
        </picture>
      </div>
    </div>
  </>
  
  )
}

export default Module12
