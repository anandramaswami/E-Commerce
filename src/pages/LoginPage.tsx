import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.tsx";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showLogin, setShowLogin] = useState(false);

    const { login } = useUser();
    const navigate = useNavigate();

    const handleLogin = (e: any) => {
        e.preventDefault();
        if (username === "anand" && password === "anand123") {
            login(username, password);
            navigate("/home");
        } else {
            alert("Invalid Credentials");
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogin(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-amber-100 flex items-center justify-center px-4">
            <div className={`w-full sm:w-[65%] md:w-[50%] lg:w-[40%] xl:w-[35%] rounded-2xl shadow-lg shadow-gray-900 overflow-hidden transition-all duration-700 ease-out ${showLogin ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="bg-[#edaf11] flex flex-col items-center justify-center p-6 sm:p-8">
                    <img src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-15.jpg" alt="Cart" className="w-[35%] sm:w-[30%] rounded-full" />
                </div>
                <h3 className="bg-[#edaf11] text-lg sm:text-xl text-center text-white font-semibold p-2">Welcome</h3>
                <div className="bg-[#1d1501] text-[#edaf11] flex flex-col items-center justify-center space-y-6 sm:space-y-8 p-4 sm:p-6">
                    <h1 className="text-2xl sm:text-3xl font-bold">Login</h1>
                    <form className="w-full sm:w-[90%] lg:w-[70%] flex flex-col gap-5 sm:gap-7">
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="bg-[#272111] p-3 rounded-md focus:outline-0 hover:border border-[#edaf11]" />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="bg-[#272111] p-3 rounded-md focus:outline-0 hover:border border-[#edaf11]" />
                        <div className="flex items-center text-xs sm:text-sm text-[#edaf11]">
                            <div className="flex items-center gap-1">
                                <input type="checkbox" />
                                <label>Remember me?</label>
                            </div>
                            <a href="#" className="ml-auto hover:underline">Forgot Password?</a>
                        </div>
                        <button type="button" onClick={handleLogin} className="bg-[#f2be13] text-[#1d1501] font-bold p-2 rounded-xl w-[70%] sm:w-[50%] mx-auto mt-2 hover:bg-yellow-400 transition hover:scale-105">
                            Login
                        </button>
                        <div className="flex flex-col sm:flex-row gap-3 mt-3 items-center justify-center">
                            <p className="text-white text-sm sm:text-md font-semibold flex justify-center">Haven't created an account?</p>
                            <button type="button" onClick={() => navigate("/register")} className="bg-[#edaf11] text-[#1d1501] px-4 py-1 rounded-md hover:scale-105 transition">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
