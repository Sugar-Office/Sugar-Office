import React from 'react'

const Module5 = () => {
  return (
    <>
  {/*-- Modul-5 --*/}
  <div
    className="  flex flex-col items-center justify-center bg-cover bg-fixed bg-center opacity-80 "
    style={{
      backgroundImage:
        'url("../public/assets/picture/modul-5/rBNaFl8s1EqAaSQTAAHsypAUzSo008.jpg")',
      height: 500
    }}
  >
    <div className="w-9/12">
      <h3 className="title text-4xl text-white font-bold pb-8 text-center ">
        End of Season Sale
      </h3>
      <div className="relative text-white text-center   flex-wrap">
        <p className="mb-4  mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <br />
        </p>
      </div>
      <div className="btn-shop text-center p-4 ">
        <a
          className="btn bg-pink-800 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded absolute "
          href="#"
        >
          Shop Now
        </a>
      </div>
    </div>
  </div>
</>

  )
}

export default Module5
