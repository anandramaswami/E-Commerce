import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {

    const { cartItems, removeFromCart, clearCart, totalCount, totalPrice, changeQuantity } = useCart();
    const navigate = useNavigate();

    const handlePayNow = () => {

        const orderId = "ORD" + Date.now();

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        localStorage.setItem("currentOrderId", orderId);

        const paymentURL = import.meta.env.VITE_PAYMENT_APP_URL

        window.location.href =
            `${paymentURL}/login` +
            `?to=E-Cart` +
            `&orderId=${orderId}` +
            `&amount=${totalPrice}` +
            `&merchant=EasyPay`;
    };

    return (
        <div className="min-h-screen bg-yellow-50">
            <Navbar />
            <div className="pt-[90px] sm:pt-[100px] mt-6 sm:mt-10 content-font">
                <h1 className="text-center text-2xl sm:text-3xl text-[#edaf11] font-bold mb-6 sm:mb-8">Your Cart</h1>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 px-4 lg:px-10">
                    <div className={`w-full lg:w-[60%] ${cartItems.length === 0 ? "hidden" : "bg-[#edaf11] border border-gray-400 p-3 sm:p-4 rounded-xl shadow-lg"}`}>
                        {cartItems.map(item => (
                            <div key={item.productId} className="bg-white m-2 p-4 sm:p-5 rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center">
                                {item.image && (<img src={item.image} alt={item.title} className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg" />)}
                                <div className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left">
                                    <h3 className="font-bold text-lg sm:text-xl">{item.title}</h3>
                                    <p className="font-semibold text-base sm:text-lg">${item.price}</p>
                                    <div className="bg-amber-100 flex gap-4 items-center justify-center sm:justify-start rounded-lg px-3 py-1">
                                        <button onClick={() => changeQuantity(item.productId, item.quantity - 1)} className="bg-amber-300 px-4 font-semibold rounded-md">-</button>
                                        <p className="font-bold">{item.quantity}</p>
                                        <button onClick={() => changeQuantity(item.productId, item.quantity + 1)} className="bg-amber-300 px-4 font-semibold rounded-md">+</button>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.productId)} className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className={`w-full h-fit lg:w-[35%] border border-[#edaf11] p-4 sm:p-5 rounded-xl shadow-lg bg-white ${cartItems.length === 0 ? "mx-auto" : ""}`}>
                        <div className={`border-b-2 border-[#edaf11] pb-3 mb-4 ${cartItems.length === 0 ? "hidden" : "text-center"}`}>
                            <h2 className="text-lg sm:text-xl text-[#bc8908] font-semibold">Order Summary</h2>
                        </div>
                        {cartItems.length > 0 ? (
                            <div>
                                <h2 className="text-right text-base sm:text-lg text-gray-600 font-semibold">Total Items : {totalCount}</h2>
                                <div className="mt-4 flex flex-col gap-2 sm:gap-3">
                                    {cartItems.map(item => (
                                        <div key={item.productId} className="flex justify-between text-sm sm:text-base">
                                            <p className="font-semibold">{item.title} ({item.quantity})</p>
                                            <p>${item.price.toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t-2 border-[#edaf11] mt-6 pt-4 text-lg sm:text-xl font-bold flex justify-between">
                                    <p>Total</p>
                                    <p>${totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                                    <button onClick={handlePayNow} className="bg-[#edaf11] px-6 py-3 text-white font-semibold rounded-xl hover:bg-amber-600 transition">Pay Now</button>
                                    <button onClick={clearCart} className="bg-[#edaf11] px-6 py-3 text-white font-semibold rounded-xl hover:bg-amber-600 transition">Clear Cart</button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-5 my-7">
                                <h2 className="text-base sm:text-lg font-semibold">Your cart is empty!</h2>
                                <button onClick={() => navigate("/products")} className="bg-[#edaf11] px-6 py-3 text-white font-semibold rounded-xl hover:bg-amber-600 transition">Start Shopping</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-20 sm:mt-24">
                <Footer />
            </div>
        </div>
    );
}

export default CartPage;
