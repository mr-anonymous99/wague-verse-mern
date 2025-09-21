import React from 'react'
import {Bookmark ,Clock} from "lucide-react"
const Blog = ({ b }) => {
    // console.log(b);

    return (
        <div className=' border-[0.5px] border-gray-500 rounded-xl flex flex-col gap-2 justify-center relative w-[140%] md:w-[100%] left-[-40px] md:left-0'>
            <img src={b.img} alt="" className=' rounded-t-xl' />
            <p className='bg-blue-500 text-[9px] md:px-4 md:py-2 md:font-semibold rounded-xl absolute top-4 left-3'>{b.trending}</p>
            <p className='absolute top-4 right-3 rounded-[50%] bg-gray-300 p-1 '><Bookmark   className=' size-[12px] md:size-[24px]'/></p>
            <div className='py-1 px-2 flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <img src={b.profile} alt="" className='w-[40px] rounded-[50%] ' />
                    <div>
                        <p>{b.name}</p>
                        <div className='flex gap-2'>
                            <p className='text-[12px]'>{b.timeofpost}</p>
                            <p className='text-[12px]'>{`${b.leftTime}`}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className=''>{b.title}</h1>
                    <p className='text-gray-500 text-sm md:text-[15px]'>{b.description}</p>
                </div>
            </div>
            <div className='w-[100%] h-[0.5px] bg-gray-400'></div>
            <div className='flex items-center justify-between px-9 mb-6'>
                <p className='text-gray-500 flex gap-1 '><Clock size={15} className='mt-[5.5px]'/>{b.readTime}</p>
                <p className='font-bold text-blue-500'>Read More</p>
            </div >
        </div>
    )
}

export default Blog