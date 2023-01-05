import React from 'react'

export default  function Header() {
  return (
    <div className='w-full h-[70px] bg-black flex justify-between p-4'>
    <h1 className='text-orange-600 text-2xl font-bold '>AVALANCH</h1>
    <button className=' rounded-lg text-white  px-4 py-2 bg-red-500 cursor-pointer'>
        add new item
    </button>
    </div>
  )
}

