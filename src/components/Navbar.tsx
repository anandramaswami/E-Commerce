import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useProducts } from "../context/ProductContext.tsx";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext.tsx";
import { Search, User } from "lucide-react";


function Navbar() {

    const { user, isAuthenticated, logout } = useUser();
    const [searchproduct, setSearchproduct] = useState("");
    const { setSearchTerm } = useProducts();
    const { totalCount } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleSearch = () => {
        setSearchTerm(searchproduct);
        navigate("/viewproduct");
    };

    return (
        <header className="w-full bg-[#1d1501] fixed top-0 z-50">
            <div className="flex flex-col md:flex-row items-center justify-between mt-2 px-4 py-3 gap-4">
                <div className="flex items-center gap-3">
                    <img src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-15.jpg" className="w-9 sm:w-10 rounded-full" />
                    <h1 className="text-white text-xl sm:text-2xl font-extrabold">E-Cart</h1>
                </div>

                <div className="w-full md:w-[30%] bg-white rounded-2xl flex">
                    <input type="search" placeholder="Search products" className="w-full p-2 pl-5 rounded-l-2xl focus:outline-0 text-sm sm:text-base" onChange={(e) => setSearchproduct(e.target.value)} />
                    <button onClick={handleSearch} className="bg-white px-4 rounded-r-2xl">
                        <Search />
                    </button>
                </div>

                <nav className="flex items-center flex-wrap justify-center gap-5 sm:gap-8 text-white text-sm sm:text-lg">
                    {isAuthenticated && (
                        <span className="flex items-center gap-2 bg-amber-400 px-3 sm:px-4 py-1.5 rounded-full text-black font-medium shadow-sm">
                            <User className="w-4 h-4 sm:w-5 sm:h-5" />
                            Hi, {user?.username}
                        </span>
                    )}

                    <Link to="/home" className="hover:text-amber-400 transition duration-200 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-amber-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all">
                        Home
                    </Link>

                    <Link to="/products" className="hover:text-amber-400 transition duration-200 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-amber-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all">
                        Products
                    </Link>

                    <Link to="/cart" className="hover:text-amber-400 transition duration-200 flex items-center gap-1">
                        Cart
                        {totalCount > 0 && (
                            <span className="bg-amber-400 text-black text-xs sm:text-sm px-2 rounded-full">
                                {totalCount}
                            </span>
                        )}
                    </Link>

                    <button onClick={handleLogout} className="px-3 sm:px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition duration-200">
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
