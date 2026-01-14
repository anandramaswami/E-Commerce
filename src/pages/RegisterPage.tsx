import { useNavigate } from "react-router-dom"

function RegisterPage() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-amber-100 flex items-center justify-center">
            <div className="w-[90%] sm:w-[65%] md:w-[50%] lg:w-[40%] xl:w-[35%] rounded-2xl shadow-lg shadow-gray-900 my-10 overflow-hidden">
                <div className="bg-[#edaf11] flex flex-col items-center justify-center p-8">
                    <img src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-15.jpg" alt=""
                        className="w-[30%] rounded-full" /> 
                </div>
                <p className="bg-[#edaf11] text-white text-xl font-semibold p-2 text-center">Create an account</p>
                <div className="bg-[#1d1501] text-[#edaf11] flex flex-col items-center justify-center space-y-8 p-6">
                    <h1 className="text-3xl font-bold">Register</h1>
                    <div className="w-[95%] sm:w-[90%] lg:w-[70%] flex flex-col gap-7">
                        <input type="text" placeholder="Username" className="bg-[#272111] p-3 rounded-md focus:outline-0 hover:border border-[#edaf11]" />
                        <input type="text" placeholder="Email" className="bg-[#272111] p-3 rounded-md focus:outline-0 hover:border border-[#edaf11]" />
                        <input type="password" placeholder="Password" className="bg-[#272111] p-3 rounded-md focus:outline-0 hover:border border-[#edaf11]" />
                        <input type="password" placeholder="Confirm Password" className="bg-[#272111] p-3 rounded-md focus:outline-0 hover:border border-[#edaf11]" />
                        <div className="flex items-center text-sm text-[#edaf11]">
                            <div className="flex items-center gap-1">
                                <input type="checkbox" />
                                <label>Remember me?</label>
                            </div>
                            <a href="#" className="ml-auto hover:underline">Forgot Password?</a>
                        </div>
                        <button type="button" onClick={()=>navigate('/')} className="bg-[#f2be13] text-[#1d1501] font-bold p-2 rounded-xl w-[70%] sm:w-[50%] mx-auto mt-2 hover:bg-yellow-400 transition hover:scale-105">
                            Register
                        </button>
                        <div className="flex flex-col sm:flex-row gap-3 mt-3 items-center justify-center">
                            <p className="text-white text-sm sm:text-md font-semibold flex justify-center">Already created an account?</p>
                            <button type="button" onClick={() => navigate("/")} className="bg-[#edaf11] text-[#1d1501] px-4 py-1 rounded-md hover:scale-105 transition">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
