import { useState } from "react"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import {Mail ,LockKeyhole,Eye,UserRound,ChevronLeft} from "lucide-react"

const SignUp = () => {
    const [formData,setFormdata]=useState({
        name:"",
        email:"",
        password:""
    })
    const [confirmPassword,setpassword]=useState("")
    const handleSubmit=(e)=>{
      setFormdata({
        ...formData,
        [e.target.name]:e.target.value
      })
    }
    const handleconfirm=(e)=>{
        setpassword(
            [e.target.name]=e.target.value
        )
    }
    const handlePassword=(e)=>{
        console.log(confirmPassword + " " + formData.password);
        
        if (confirmPassword.toLowerCase()===formData.password.toLowerCase()) {
            return <Navigate to="/"/>
        }else{
            alert("both are not same")
        }

    }
  return (<>
  <NavBar/>
    <div className='flex flex-col  items-center  gap-5 bg-blue-50 '>
        <h1 className="text-2xl text-blue-600 font-bold mLink">Join Wague-verse</h1>
        <p className='text-gray-600 text-center font-semibold'>Create your account and  <br/> start your blogging journey</p>
        <form className="flex flex-col shadow-2xl shadow-black w-1/3 py-7 items-center gap-5 rounded-xl bg-white" onSubmit={handlePassword}>
            <div className="w-[90%] relative">
                <h1 className="text-md text-gray-700 font-semibold">Full Name</h1><UserRound className="absolute mt-5 ml-3" size={20} color='gray'/>
                <input type="text" name="name" id="1" placeholder='Enter your full name' className=' pl-10 border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 ' onChange={handleSubmit}/>
            </div>
            <div className="w-[90%] relative">
                <h1 className="text-md text-gray-700 font-semibold">Email Address</h1><Mail className="absolute mt-5 ml-3" size={20} color='gray'/>
                <input type="email" name="email" id="2" placeholder='Enter your Email address' className='pl-10 border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500' onChange={handleSubmit}/>
            </div>
            <div className="w-[90%] relative">
                <h1 className="text-md text-gray-700 font-semibold">Password</h1><LockKeyhole size={20}  className="absolute mt-5 ml-3" color='gray'/><Eye size={20} className="absolute right-0  mt-5 mr-4" color='gray'/>
                <input type="password" name="password" id="3" placeholder='Enter your password' className='pl-10 border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 ' onChange={handleSubmit}/>
            </div>
            <div className="w-[90%] relative">
                <h1 className="text-md text-gray-700 font-semibold">Confirm Password</h1><LockKeyhole size={20}  className="absolute mt-5 ml-3" color='gray'/><Eye size={20} className="absolute right-0  mt-5 mr-4"color='gray'/>
                <input type="password" name="confirmpassword" id="4" placeholder='Confirm your password' className='pl-10 border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 'onChange={handleconfirm}/>
            </div>
            <div className="flex gap-3 border-gray-400 border-1 w-[90%] py-5 px-4 justify-center rounded-xl ">
                <input type="checkbox" name="terms" id="6"  className="h-5 w-5 items-center"/>
                <p>i agree the terms and conditions</p>
            </div>
            <button className="w-[90%] cursor-pointer rounded-xl bg-purple-500 font-semibold text-white px-4 py-5" >Create Account</button>
            <div className="border-[0.5px] border-gray-500 w-[90%]  "></div>
            <p className="text-gray-500 font-semibold">Already have an account ?  <Link to="/signin" className="text-purple-500 cursor-pointer">SignIn Here</Link></p>
            <button className="text-white font-semibold bg-purple-800 py-3 px-4 w-[90%] rounded-xl cursor-pointer relative"><ChevronLeft className="absolute ml-33"  color="white" />Back to home</button>
        </form> 
    </div>
    </>
  )
}

export default SignUp