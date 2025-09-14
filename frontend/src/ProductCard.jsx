

const ProductCard = () => {
    return (
        <div className="border-2 border-blue-300 w-fit flex   items-center gap-10 p-10 rounded-2xl bg-gray-200" >
            <img src="./vite.svg" alt="vite photo" className="w-[100px] h-[100px]" />
            <div className="flex flex-col  gap-1">
                <h2 className="font-bold text-xl">vite new version</h2>
                <p className="text-lg ">most popularly used framework </p>
                <p>100+ brought used last month</p>
                <p className="bg-red-600 w-fit px-2 font text-white rounded-[3px]">sale price Live</p>
                <h2 className="font-extrabold"> $ 1900</h2>
                <p ><span className=" bg-green-500 mb-2 px-0.5 w-[90px]">save 400</span>with coupon</p> 
                <button className="bg-blue-400 text-white w-[90%] py-4 rounded-2xl cursor-pointer hover:bg-black mb-3">add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard  