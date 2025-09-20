
import { Link } from "react-router-dom"
import {Home} from "lucide-react"
const NavBar = () => {
    return (
        <div className="min-w-screen flex justify-around items-center py-2">
            <h1 className="text-xl font-bold">Wague-verse</h1>
            <Link to="/" className="text-black hover:bg-blue-300 px-5 py-2 rounded-lg cursor-pointer flex justify-center gap-1"><Home size={18} className="mt-[2px]"/>Home</Link>
            <div className="flex gap-5">
                <Link to="/signin" className="font-semibold text-gray-400 cursor-pointer mt-2">SignIn</Link >
                <Link  to ="/signup" className="font-semibold  bg-blue-500 text-white px-5 py-2 rounded-xl cursor-pointer">SignUp</Link >
            </div>
        </div>
    )
}

export default NavBar