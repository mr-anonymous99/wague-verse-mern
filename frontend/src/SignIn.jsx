import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import {Mail,LockKeyhole,Eye,LogOut} from "lucide-react"

const SignIn = () => {
    return (<>
    <NavBar/>
        <div className='flex flex-col  min-h-screen items-center justify-center  bg-blue-50 '>
            <div className=' flex flex-col items-center  rounded-2xl px-2 gap-4 shadow-2xl shadow-black  bg-white'>
                <h1 className='text-2xl font-bold mt-8'>Sign In</h1>
                <p className='text-gray-400 '>Access you account</p>
            <form className='w-[400px] flex flex-col gap-4 px-4 '>
                <div className='flex flex-col gap-2 relative'>
                    <p className='text-black '>Email Address</p>
                    <input type="text" placeholder='sample@gmail.com' className='w-[95%] border-1 border-grey-400 rounded-xl pl-10  px-2 py-3 outline-none focus:border-purple-500 focus:border-2 ' /><Mail size={18} className='absolute mt-12  ml-3 'color='gray'/>
                </div>
                <div className='relative'>
                    <p className='text-black '>Password</p>
                    <LockKeyhole size={18} className='absolute mt-4 ml-3'color='gray'/>
                    <Eye size={18} className='absolute right-0 mt-4 mr-10'color='gray'/>
                    <input type="password" placeholder='sample123' className=' pl-10 w-[95%] border-1  border-grey-400 rounded-xl px-2 py-3 outline-none focus:border-purple-500 focus:border-2 relative'/>

                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center gap-1'>
                        <input type="checkbox" name="me" id="" className='h-5 w-5'/><p>Remember me</p>
                    </div>
                    <p>Forget Password ?</p>
                </div>
                <button className='bg-blue-700 px-2 py-2 rounded-xl hover:scale-105 text-white font-bold relative'><LogOut size={18} className='absolute rotate-180 ml-[33%] mt-1'/>Sign In</button>
                <div></div>
            </form>
                <p className='py-4'>Dont have an account <Link to="/signup" className='text-blue-600 font-semibold'>Create one here</Link></p>
            </div>
            
        </div>
        </>
    )
}

export default SignIn