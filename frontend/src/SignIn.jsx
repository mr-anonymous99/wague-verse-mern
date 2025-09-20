import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { Mail, LockKeyhole, Eye, LogOut, EyeOff } from "lucide-react"

const SignIn = () => {
    const[formData,setformData]=useState({
        email:"",
        password:""
    })

    const [showPass, setshowPass] = useState(false)
    const toggleShow = () => {
        console.log(showPass)
        setshowPass((pass) => (!pass))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData);
        
    }

    const changing=(e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }
    return (
        <>
            <NavBar />
            <div className='flex flex-col  min-h-screen items-center justify-center  bg-blue-50 '>
                <div className=' flex flex-col items-center  rounded-2xl px-2 gap-4 shadow-2xl shadow-black  bg-white'>
                    <h1 className='text-2xl font-bold mt-8'>Sign In</h1>
                    <p className='text-gray-400 '>Access you account</p>
                    <form className='w-[400px] flex flex-col gap-4 px-4 ' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-2 relative'>
                            <p className='text-black '>Email Address</p>
                            <input 
                            type="email" 
                            name='email'
                            placeholder='sample@gmail.com' 
                            className='w-[95%] border-1 border-grey-400 rounded-xl pl-10  px-2 py-3 outline-none focus:border-purple-500 focus:border-2 ' 
                            value={formData.email}
                            onChange={changing}/>
                            <Mail size={18} className='absolute mt-12  ml-3 ' color='gray' 
                            
                            />
                        </div>
                        <div className='relative'>
                            <p className='text-black '>Password</p>
                            <LockKeyhole size={18} className='absolute mt-4 ml-3' color='gray' />
                            <div className='relative'>
                                {
                                    showPass ? <Eye size={18} className='z-10 absolute top-4 right-10' color='gray' onClick={toggleShow} />
                                        : <EyeOff size={18} className='z-10 absolute top-4 right-10' color='gray' onClick={toggleShow} />
                                }
                                <input 
                                type={showPass ? "password" : "text"} 
                                name='password'
                                placeholder='sample123' 
                                className=' px-10 w-[95%] border-1  border-grey-400 rounded-xl py-3 outline-none focus:border-purple-500 focus:border-2 relative' 
                                value={formData.password}
                                onChange={changing}
                                />

                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex justify-center items-center gap-1'>
                                <input 
                                type="checkbox" 
                                name="me" 
                                id="" 
                                className='h-5 w-5' />
                                <p>Remember me</p>
                            </div>
                            <p>Forget Password ?</p>
                        </div>
                        <button className='bg-blue-700 px-2 py-2 rounded-xl hover:scale-105 text-white font-bold relative'><LogOut size={18} className='absolute rotate-180 ml-[33%] mt-1' />Sign In</button>
                        <div></div>
                    </form>
                    <p className='py-4'>Dont have an account <Link to="/signup" className='text-blue-600 font-semibold'>Create one here</Link></p>
                </div>

            </div>
        </>
    )
}

export default SignIn