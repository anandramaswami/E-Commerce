import Navbar from "../components/Navbar"
import ImageSlider from "../components/ImageSlider"
import { useState, useEffect } from "react";
import { products } from "../data/Product";
import Categories from "../components/Categories";
import { useCart } from "../context/CartContext.tsx";
import Footer from "../components/Footer.tsx";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const [viewproducts, setViewProducts] = useState<any[]>([]);

    const images = [
        { url: "https://as2.ftcdn.net/jpg/05/20/15/39/1000_F_520153905_DpORx6OLESlfvdEBzHFMeDbnm8kxt67t.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/sudipta/GW/BAU/Budgetunrec._CB777837018_.jpg" }
    ];

    const { addToCart } = useCart();

    const handleAddtoCart = (product: any) => {
        addToCart(product);
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setViewProducts(data.products);
                console.log(viewproducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="bg-yellow-50 pt-20 sm:pt-24">
            <Navbar />

            <div className="w-full px-3 sm:px-6 md:w-[90%] lg:w-[80%] mx-auto mt-4 sm:mt-6">
                <ImageSlider slides={images} />
            </div>

            <div className="content-font w-full border border-gray-200 bg-white shadow-xl py-5 px-4 sm:px-6 md:px-10 mt-8 sm:mt-10 mb-16 sm:mb-20">
                <h1 className="text-center text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8">
                    Shop by Categories
                </h1>
                <Categories />
            </div>

            <div className="content-font grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10">
                <div className="text-center">
                    {viewproducts?.filter(product => product.id === 7).map(product => (
                        <div key={product.id} className="border border-[#edaf11] rounded-xl p-4 space-y-3 bg-white hover:scale-105 transition-transform duration-300">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3">{product.title}</h2>
                            <p className="text-lg font-semibold">${product.price}</p>
                            <p className="text-gray-600 text-sm sm:text-base">{product.category}</p>
                            <img src={product.thumbnail} alt={product.title} className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover mx-auto mb-4" />
                            <button onClick={() => handleAddtoCart(product)} className="bg-[#edaf11] px-4 py-2 rounded-2xl hover:bg-amber-600 transition">Add to Cart</button>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    {products.filter(product => product.productId === 2).map(product => (
                        <div key={product.productId} className="border border-[#edaf11] rounded-xl p-4 space-y-3 bg-white hover:scale-105 transition-transform duration-300">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3">{product.title}</h2>
                            <p className="text-lg font-semibold">${product.price}</p>
                            <p className="text-gray-600 text-sm sm:text-base">{product.category}</p>
                            <img src={product.image} alt={product.title} className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover mx-auto mb-4" />
                            <button onClick={() => handleAddtoCart(product)} className="bg-[#edaf11] px-4 py-2 rounded-2xl hover:bg-amber-600 transition">Add to Cart</button>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    {products.filter(product => product.productId === 43).map(product => (
                        <div key={product.productId} className="border border-[#edaf11] rounded-xl p-4 space-y-3 bg-white hover:scale-105 transition-transform duration-300">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3">{product.title}</h2>
                            <p className="text-lg font-semibold">${product.price}</p>
                            <p className="text-gray-600 text-sm sm:text-base">{product.category}</p>
                            <img src={product.image} alt={product.title} className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover mx-auto mb-4" />
                            <button onClick={() => handleAddtoCart(product)} className="bg-[#edaf11] px-4 py-2 rounded-2xl hover:bg-amber-600 transition">Add to Cart</button>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    {viewproducts?.filter(product => product.id === 12).map(product => (
                        <div key={product.id} className="border border-[#edaf11] rounded-xl p-4 space-y-3 bg-white hover:scale-105 transition-transform duration-300">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold mt-3">{product.title}</h2>
                            <p className="text-lg font-semibold">${product.price}</p>
                            <p className="text-gray-600 text-sm sm:text-base">{product.category}</p>
                            <img src={product.thumbnail} alt={product.title} className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover mx-auto mb-4" />
                            <button onClick={() => handleAddtoCart(product)} className="bg-[#edaf11] px-4 py-2 rounded-2xl hover:bg-amber-600 transition">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-10 flex justify-center px-4">
                <button onClick={() => navigate('/products')} className="bg-[#edaf11] px-6 py-3 text-white font-semibold rounded-xl hover:bg-amber-600 transition w-full sm:w-auto">
                    Go to Product Page
                </button>
            </div>

            <div className="mt-16 sm:mt-20">
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
