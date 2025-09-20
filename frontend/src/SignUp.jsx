import { useState } from "react"
import NavBar from "./NavBar"
import { Link, useNavigate } from "react-router-dom"
import { Mail, LockKeyhole, Eye, UserRound, ChevronLeft, EyeOff } from "lucide-react"

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    // const [confirmPassword, setpassword] = useState("")
    const [showpassword, setshowPassword] = useState(false)
    const [showConfirmPassword, setshowConfirmPassword] = useState(false)
    const [error, setError] = useState("")
    const [success, setSucces] = useState("")
    const [erros, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const newErros={}
    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleShowPassword = () => {
        setshowPassword((password) => (!password))
    }
    const handleShowConfirmPassword = () => {
        setshowConfirmPassword((password) => (!password))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        for (let key in erros) {
            // console.log(!erros[key]);
            if(!formData[key]){
                newErros[key]=`${key} is empty fill it `
            }
            console.log(newErros);
        }
        if(Object.keys(newErros).length>0){
            setErrors(newErros)
        }
        // if (!formData.name || !formData.email || !formData.confirmPassword || !formData.password) {
        //     setError("please fill all the fields !!")
        // }
        // else if (formData.confirmPassword !== formData.password) {
        //     setError("password didn't matched")

        // } else {
        //     setError("")
        //     setSucces("hurray you have created an account in wague-verse")
        //     setFormdata({
        //         name: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""
        //     })
        // }
        // console.log(erros);
        
    }
    return (<>
        <NavBar />
        <div className='flex flex-col  items-center  gap-5 bg-blue-50 '>
            <h1 className="text-2xl text-blue-600 font-bold mLink">Join Wague-verse</h1>
            <p className='text-gray-600 text-center font-semibold'>Create your account and  <br /> start your blogging journey</p>
            <form className="flex flex-col shadow-2xl shadow-black w-1/3 py-7 items-center gap-5 rounded-xl bg-white" onSubmit={handleSubmit}>
                <div className="w-[90%] relative">
                    <h1 className="text-md text-gray-700 font-semibold">Full Name</h1><UserRound className="absolute mt-5 ml-3" size={20} color='gray' />
                    <input
                        type="text"
                        name="name"
                        id="1"
                        placeholder='Enter your full name'
                        className=' pl-10 border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 '
                        onChange={handleChange}
                        value={formData.name}
                    />
                    {erros.name && <p>{erros.name}</p>}
                </div>
                <div className="w-[90%] relative">
                    <h1 className="text-md text-gray-700 font-semibold">Email Address</h1><Mail className="absolute mt-5 ml-3" size={20} color='gray' />
                    <input
                        type="email"
                        name="email"
                        id="2"
                        placeholder='Enter your Email address'
                        className='pl-10 border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500'
                        onChange={handleChange}
                        value={formData.email}
                    />
                    {erros.email && <p>{erros.email}</p>}

                </div>
                <div className="w-[90%] relative">
                    <h1 className="text-md text-gray-700 font-semibold">Password</h1><LockKeyhole size={20} className="absolute mt-5 ml-3" color='gray' />
                    {showpassword ?
                        <Eye size={20} className="absolute right-0  mt-5 mr-4" color='gray' onClick={handleShowPassword} />
                        : <EyeOff size={20} className="absolute right-0  mt-5 mr-4" color='gray' onClick={handleShowPassword} />
                    }
                    <input
                        type={showpassword ? "password" : "text"}
                        name="password"
                        id="3"
                        placeholder='Enter your password'
                        className='pl-10 border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 '
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
                {erros.password && <p>{erros.password}</p>}

                <div className="w-[90%] relative">
                    <h1 className="text-md text-gray-700 font-semibold">Confirm Password</h1><LockKeyhole size={20} className="absolute mt-5 ml-3" color='gray' />
                    {showConfirmPassword ?
                        <Eye size={20} className="absolute right-0  mt-5 mr-4" color='gray' onClick={handleShowConfirmPassword} />
                        : <EyeOff size={20} className="absolute right-0  mt-5 mr-4" color='gray' onClick={handleShowConfirmPassword} />
                    }
                    <input
                        type={showConfirmPassword ? "password" : "text"}
                        name="confirmPassword"
                        id="4"
                        placeholder='Confirm your password'
                        className='pl-10 border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 '
                        onChange={handleChange}
                        value={formData.confirmPassword}
                    />
                </div>
                {erros.confirmPassword && <p>{erros.confirmPassword}</p>}
                <div className="flex gap-3 px-4 justify-center rounded-xl ">
                    <input type="checkbox" name="terms" id="6" className="h-5 w-5 items-center" />
                    <p>i agree the terms and conditions</p>
                </div>

                {/* {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-400">{success}</p>} */}

                <button className="w-[90%] cursor-pointer rounded-xl bg-purple-500 font-semibold text-white px-4 py-5" type="submit">Create Account</button>
                <div className="border-[0.5px] border-gray-500 w-[90%]  "></div>
                <p className="text-gray-500 font-semibold">Already have an account ?  <Link to="/signin" className="text-purple-500 cursor-pointer">SignIn Here</Link></p>
                <button className="text-white font-semibold bg-purple-800 py-3 px-4 w-[90%] rounded-xl cursor-pointer relative">
                    <ChevronLeft className="absolute ml-33" color="white" />
                    Back to home</button>
            </form>
        </div>
    </>
    )
}

export default SignUp