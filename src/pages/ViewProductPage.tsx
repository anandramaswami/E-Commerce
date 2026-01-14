import Navbar from '../components/Navbar'
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';


function ViewProductPage() {
    const { filteredProducts } = useProducts();
    const { addToCart } = useCart();

    return (
        <div className="bg-yellow-50 min-h-screen">
            <Navbar />
            <div className="pt-[90px] sm:pt-[100px] px-4 sm:px-6 lg:px-10">
                {filteredProducts.length > 0 ? (
                    <div className="flex flex-col gap-6 sm:gap-8 items-center">
                        {filteredProducts.map(product => (
                            <div key={product.productId} className="w-full sm:w-[90%] md:w-[85%] lg:w-[70%] border border-[#edaf11] rounded-xl bg-white p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center">
                                <img src={product.image} className="w-full md:w-1/2 h-56 sm:h-72 md:h-[400px] object-cover rounded-lg" />
                                <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4 justify-center items-center md:items-start px-2">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center md:text-left">{product.title}</h3>
                                    <p className="text-base sm:text-lg md:text-xl font-semibold mt-1">${product.price}</p>
                                    <p className="text-gray-700 text-sm sm:text-base mt-2 text-center md:text-left">{product.description}</p>
                                    <button onClick={() => addToCart(product)} className="bg-[#edaf11] px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl mt-3 sm:mt-4 font-semibold hover:bg-amber-600 transition hover:scale-105">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-red-500 text-center mt-10 text-base sm:text-lg md:text-xl">No products found</p>
                )}
            </div>
            <div className="mt-20 sm:mt-24">
                <Footer />
            </div>
        </div>
    );
}

export default ViewProductPage;
