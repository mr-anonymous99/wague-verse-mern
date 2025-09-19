import React from 'react'

const Blog = ( {b }) => {
    // console.log(b);

    return (
        <div className=' border-[0.5px] border-gray-500 rounded-xl flex flex-col gap-2 justify-center relative'>
            <img src={b.img} alt="" className='rounded-t-xl hover:scale-110' />
                <p className='bg-blue-500 px-2 rounded-xl absolute top-4 left-3'>{b.trending}</p>
                <p className='absolute top-4 right-3 rounded-xl bg-gray-300 px-2'>save</p>
            <div className='py-1 px-2 flex flex-col gap-3'>
                <div className='flex items-center gap-1'>
                    <img src={b.profile} alt="" className='w-[40px] rounded-[50%] ' />
                    <div>
                        <p>{b.name}</p>
                        <div className='flex gap-2'>
                            <p className='text-sm'>{b.timeofpost}</p>
                            <p className='text-sm'>{b.leftTime}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className=''>{b.title}</h1>
                    <p className='text-gray-500 '>{b.description}</p>
                </div>
            </div>
            <div className='w-[100%] h-[0.5px] bg-gray-400'></div>
            <div className='flex items-center justify-between px-9 mb-6'>
                <p className='text-gray-500'>{b.readTime}</p>
                <p className='font-bold text-blue-500'>Read More</p>
            </div >
        </div>
    )
}

export default Blog