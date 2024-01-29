import React from 'react'

const Module10 = () => {
  return (
    <>
    {/*-------- Modul-10 -------*/}
    <div className=" flex items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-14">
      <div className=" w-9/12">
        <h1 className="text-2xl font-bold">Popular Departments</h1>
        <p className="text-black text-sm">
          Products From These Categories Often Buy
        </p>
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          <div className="flex flex-row  justify-center bg-white sm:my-4 md:my-4 my-2 py-5 sm:py-8 md:py-8">
            <div className=" my-auto text-center ">
              <h2 className=" pl-2 text-black text-lg  font-bold">Vegatables</h2>
              <p className=" pl-2 text-sm text-gray-500">1 Products</p>
            </div>
            <div className=" flex items-center justify-center ">
              <img
                className="w-full h-auto "
                src="https://img.freepik.com/premium-photo/vegetables-isolated-white-background_976492-142.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=ais"
                alt="vegatables"
              />
            </div>
          </div>
          <div className="flex flex-row  justify-center bg-white sm:my-4 md:my-4  my-2 py-5 sm:py-8 md:py-8">
            <div className="my-auto text-center  flex-shrink-0">
              <h2 className="pl-2 text-black text-lg font-bold">Fruits</h2>
              <p className="pl-2 text-sm  text-gray-500">9 Products</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-full h-auto"
                src="https://img.freepik.com/premium-photo/health-fruit-white-background_368913-297.jpg"
                alt="fruits"
              />
            </div>
          </div>
          <div className="flex flex-row  justify-center bg-white sm:my-4 md:my-4  my-2 py-5 sm:py-8 md:py-8">
            <div className=" my-auto text-center">
              <h2 className="pl-2 text-black text-lg font-bold">Breakfast</h2>
              <p className="pl-2 text-gray-500 text-sm">8 Products</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-full h-auto"
                src="https://navixia.com/storage/app/uploads/public/63d/779/900/63d7799003bd4500694874.jpg"
                alt="breakfast"
              />
            </div>
          </div>
          <div className="flex flex-row  justify-center bg-white sm:my-4 md:my-4  my-2 py-5 sm:py-8 md:py-8">
            <div className="my-auto text-center">
              <h2 className="pl-2 text-black text-lg font-bold">Cooking</h2>
              <p className="pl-2 text-gray-500 text-sm">5 Products</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-full h-auto "
                src="https://media.istockphoto.com/id/184933350/fr/photo/faire-cuire-les-ingr%C3%A9dients-oeufs-farine-lait-sucre.jpg?s=612x612&w=0&k=20&c=u0uYdeIQizR1--sYqmEQdiXKBTe6zIaFGGOwpIdcaX0="
                alt="cooking"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Module10
