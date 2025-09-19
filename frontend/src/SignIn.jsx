import React from 'react'

const SignIn = () => {
    return (
        <div className='flex flex-col  min-h-screen items-center justify-center  '>
            <div className=' flex flex-col items-center  rounded-2xl px-2 gap-4 shadow-2xl shadow-black  bg-white'>
                <h1 className='text-2xl font-bold mt-8'>Sign In</h1>
                <p className='text-gray-400 '>Access you account</p>
            <form className='w-[400px] flex flex-col gap-4 px-4 '>
                <div className='flex flex-col gap-2'>
                    <p className='text-black '>Email Address</p>
                    <input type="text" placeholder='sample@gmail.com' className='w-[95%] border-1 border-grey-400 rounded-xl px-2 py-3 outline-none focus:border-purple-500 focus:border-2' />
                </div>
                <div>
                    <p className='text-black '>Password</p>
                    <input type="password" placeholder='sample123' className='w-[95%] border-1 border-grey-400 rounded-xl px-2 py-3 outline-none focus:border-purple-500 focus:border-2 '/>
                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center gap-1'>
                        <input type="checkbox" name="me" id="" className='h-5 w-5'/><p>Remember me</p>
                    </div>
                    <p>Forget Password ?</p>
                </div>
                <button className='bg-blue-700 px-2 py-2 rounded-xl hover:scale-105 text-white font-bold '>Sign In</button>
                <div></div>
            </form>
                            <p className='py-4'>Dont have an account <span className='text-blue-600 font-semibold'>Create one here</span></p>
            </div>
            
        </div>
    )
}

export default SignIn