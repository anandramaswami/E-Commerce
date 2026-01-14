import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type OrderItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image?: string;
};

type Order = {
    orderId: string;
    cartItems: OrderItem[];
    status: "PAID" | "FAILED";
    orderDate: string;
};

function OrdersPage() {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const [orders, setOrders] = useState<Order[]>([]);

    const orderId = params.get("orderId");
    const status = params.get("status");

    useEffect(() => {
        // 🔹 Load existing orders
        const storedOrders: Order[] =
            JSON.parse(localStorage.getItem("orders") || "[]");

        let updatedOrders = [...storedOrders];

        // 🔹 If redirected from payment app
        if (orderId && status) {
            const alreadyExists = storedOrders.some(
                order => order.orderId === orderId
            );

            if (!alreadyExists) {
                const cartItems: OrderItem[] =
                    JSON.parse(localStorage.getItem("cartItems") || "[]");

                const newOrder: Order = {
                    orderId,
                    cartItems,
                    status: status === "Payment_Success" ? "PAID" : "FAILED",
                    orderDate: new Date().toISOString()
                };

                updatedOrders.push(newOrder);
                localStorage.setItem("orders", JSON.stringify(updatedOrders));

                // cleanup
                localStorage.removeItem("cartItems");
                localStorage.removeItem("currentOrderId");
            }
        }

        setOrders(updatedOrders);
    }, [orderId, status]);

    if (orders.length === 0) {
        return <p className="p-4">No orders yet</p>;
    }

    return (
        <div className="min-h-screen bg-yellow-50 p-4 sm:p-6 md:p-10 content-font flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-3xl text-[#edaf11] font-bold mb-6 sm:mb-8">My Orders</h2>

            <div className="w-full sm:w-[90%] lg:w-[60%] bg-[#edaf11] p-4 sm:p-6 md:p-10 rounded-xl">
                {orders.map(order => (
                    <div key={order.orderId} className="bg-white border-2 border-amber-600 rounded-xl p-4 sm:p-5 sm:px-8 md:px-10 mb-6 flex flex-col">
                        <div className="w-full flex flex-col gap-6">
                            {order.cartItems.map(item => (
                                <div key={item.id} className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center justify-between">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 border border-gray-300 rounded-lg overflow-hidden">
                                        {item.image && (<img src={item.image} className="w-full h-full object-cover" />)}
                                    </div>
                                    <div className="w-full sm:w-[70%] flex flex-col items-start text-sm sm:text-base">
                                        <p><b>Order ID:</b> {order.orderId}</p>
                                        <p className="font-semibold mt-2 sm:mt-4">{item.title}</p>
                                        <p>₹{item.price} × {item.quantity}</p>
                                        <p className="font-bold">₹{item.price * item.quantity}</p>
                                        <p className="mt-2 sm:mt-4"><b>Status:</b> <span className={order.status === "PAID" ? "text-green-600" : "text-red-600"}>{order.status}</span></p>
                                        <p><b>Order Date:</b> {new Date(order.orderDate).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
                <button onClick={() => navigate("/products")} className="bg-amber-500 px-5 py-3 rounded-lg text-white font-semibold text-sm sm:text-base">Continue Shopping</button>
                <button onClick={() => navigate("/home")} className="bg-amber-500 px-5 py-3 rounded-lg text-white font-semibold text-sm sm:text-base">Go to Home page</button>
            </div>
        </div>
    );
}

export default OrdersPage;
