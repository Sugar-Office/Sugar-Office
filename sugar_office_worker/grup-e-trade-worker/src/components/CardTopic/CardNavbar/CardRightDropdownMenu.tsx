import React from 'react'

const CardRightDropdownMenu = () => {
  return (
    <>
      <div className="flex items-center justify-evenly grid grid-cols-4 grid-rows-1 grid-gap-1 space-x-2 w-full  ">
        <label htmlFor="sort" className="mr-1">
          Sort By:
        </label>
        <select id="sort" name="sort" className=" border rounded ">
          <option value="" selected>
            Default
          </option>
          {/* Other options can be added here */}
        </select>

        <label htmlFor="show" className="mr-1">
          Show:
        </label>
        <select id="show" name="show" className="border rounded w-12">
          <option value="" selected>
            10
          </option>
          {/* Other options can be added here */}
        </select>
      </div>
    </>
  )
}

export default CardRightDropdownMenu
