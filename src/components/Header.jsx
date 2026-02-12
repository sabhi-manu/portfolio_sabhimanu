import React from 'react'
import { Mongodb, Nodejs, Reactjs, Redux, ProfileImg, Express } from "../assets"

const Header = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row px-5 md:px-10 gap-5 py-5 mt-10 border md:gap-15  '>
            <div className='flex flex-col mb-20 '>
                <span className='text-lg font-bold text-orange-700'>
                    FULL-STACK DEVELOPER
                </span>
                <div className='flex gap-4 items-center my-4'>
                    <h1 className='text-gray-800 dark:text-neutral-100 text-4xl md:text-5xl  font-bold text-center'>
                        Hi,
                    </h1>
                    {/* <div className='flex border items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full'>
                        <p className='text-3xl font-bold px-5 py-2 pb-2 text-center'>
                            Developer
                        </p>
                    </div> */}
                </div>
                <h1 className='text-3xl  font-extrabold text-black dark:text-neutral-100 tracking-wider'>
                    I'm Sabhimanau Patel
                </h1>
                <p className='text-md text-black dark:text-gray-100 mt-5 2xl:mt-10  max-w-[700px]'>
                    Full-Stack Web Developer with ability to learn and collaborate in
                    rapidly changing environments and compositions.
                </p>
                <div className='mt-10 flex gap-10'>
                   <a href="#email">
                     <button className='text-lg font-medium bg-orange-700 rounded-md px-5 py-3 text-white'>Hire Me</button>
                   </a>
                    <a href="#project">
                        <button className='text-lg text-white fonnt-semibold rounded-md py-3 px-5 bg-orange-500 '>Project</button>
                    </a>
                </div>
            </div>

            <div className='border rounded-full border-gray-500 dark:border-gray-200 w-[300px] h-[300px] relative overflow-hidden '>
                <img  className='w-full h-full rounded-full object-cover absolute hover:scale-125 duration-500 ' src={ProfileImg} alt="profleImage" />
                {/* <div className='relative w-full h-full rounded-full'>
                    <img src={Mongodb} alt="reactImg" className='w-16  h-16  absolute top-7 left-0 ' />
                    <img src={Nodejs} alt="reactImg" className='w-16  h-16  absolute top-7 right-0 ' />
                    <img src={Reactjs} alt="reactImg" className='w-16  h-16  absolute bottom-7 left-0 ' />
                    <img src={Redux} alt="reactImg" className='w-16  h-16  absolute bottom-7 right-0 ' />
                </div> */}
            </div>
        </div>
    )
}

export default Header