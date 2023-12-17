import React from 'react'
import Card from './CardTopic/Card'

const PageCard = () => {
  return (
    <>
    <div className="page-full grid grid-cols-3 w-full h-full">
    <div className='col-span-1 bg-sky-600 '>
{/* Buraya soltarafin komponenti çağirilacak   */}
    </div>
    <div className='card-building col-span-2'>
      <Card/>
    </div>    
    </div>
    

    </>
    
  )
}

export default PageCard
