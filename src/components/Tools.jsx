import React from 'react'
import {  tools } from '../data'

const Tools = () => {
    return (
        <div>
           
            <div className='w-full flex  flex-wrap items-center justify-center gap-10 lg:gap-20  '>
                {tools.map((item,index)=>(
                     <div key={index} className='flex gap-2 items-center bg-white rounded-md shadow-lg px-5 py-1 '>
            <img src={item.icon} className='w-10 h-10' />
            <p className=' text-black text-md'>{item.name}</p>
          </div>
                ))}
            </div>
        </div>
    )
}

export default Tools