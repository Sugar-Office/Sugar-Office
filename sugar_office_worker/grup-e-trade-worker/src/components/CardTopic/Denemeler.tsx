import React from 'react'

const Denemeler = () => {
  return (
<>  
<div className="flex items-center space-x-4">
     <button className="p-2 bg-gray-200 rounded">☰</button>
     <span>Product Compare (0)</span>
   </div>
   <div className="flex items-center justify-end space-x-4 mt-2">
   <label htmlFor="sort" className="mr-2">
     Sort By:
   </label>
   <select id="sort" name="sort" className="p-2 border rounded">
     <option value="" selected>
       Default
     </option>
     {/* Other options can be added here */}
   </select>

   <label htmlFor="show" className="mr-2 ml-4">
     Show:
   </label>
   <select id="show" name="show" className="p-2 border rounded">
     <option value="" selected>
       10
     </option>
     {/* Other options can be added here */}
   </select>
 </div>
</>

  )
}

export default Denemeler
